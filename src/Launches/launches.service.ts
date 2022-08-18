import axios from "axios";
import { Launch } from "./models/Launch.model";
import { Payload } from "./models/Payload.model";
import { Rocket } from "./models/Rocket.model";
import { Request, Response } from "express";

type PayloadResponse = {
  payloads: Payload[];
}

type RocketResponse = {
  rocket_id: string;
  rocket_name: string;
  description: string;
  images: string[];
  second_stage: PayloadResponse;
}

type LaunchesResponse = {
  flight_number: number;
  mission_name: string;
  rocket: RocketResponse;
  payloads: Payload[];
}

//caching (e.g: to a json) allows offline mode
const getLaunchesOnly = async (url: string): Promise<LaunchesResponse[]> => {
  let returnValue: LaunchesResponse[] = [];
  const response = await axios.get(url);
  const launches = response.data;

  launches.forEach((launch: LaunchesResponse) => {
    const myLaunchObject = {
      flight_number: launch.flight_number,
      mission_name: launch.mission_name,
      rocket: launch.rocket,
      payloads: launch.rocket.second_stage.payloads,
    };
    returnValue.push(myLaunchObject);
  });

  return returnValue;
};

//caching (e.g: to a json) allows offline mode
const getRockets = async (url: string): Promise<Record<string, any>> => {
  let returnValue: Object[] = [];
  const response = await axios.get(url);
  const rockets = response.data;

  rockets.forEach((rocket: Record<string, any>) => {
    const myRocketObject = {
      rocket_id: rocket.rocket_id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      images: rocket.flickr_images,
      payloads: rocket.second_stage.payloads,
    };
    returnValue.push(myRocketObject);
  });

  return returnValue;
};

function getRocketMerge(
  theRocket: Record<string, any>,
  rocket: Record<string, any>
): Rocket {
  return new Rocket(
    theRocket.rocket_id ? theRocket.rocket_id : rocket.rocket_id,
    theRocket.rocket_name ? theRocket.rocket_name : rocket.rocket_name,
    theRocket.rocket_description
      ? theRocket.rocket_description
      : rocket.description,
    theRocket.images ? theRocket.images : rocket.flickr_images,
    getPayloadMerge(theRocket, rocket)
  );
}

function getPayloadMerge(
  theRocket: Record<string, any>,
  rocket: Record<string, any>
): Payload[] {
  return [theRocket.payloads, rocket.second_stage.payloads]
    .flat()
    .filter((payload: Record<string, any>) => payload.payload_id !== "");
}

async function getLaunches(): Promise<Launch[]> {
  const [rockets, launches] = await Promise.all([
    getRockets(`https://api.spacexdata.com/v3/rockets`),
    getLaunchesOnly(`https://api.spacexdata.com/v3/launches`),
  ]);

  const myLaunches = launches.map((launch: LaunchesResponse) => {
    let theRocket = rockets.find((rocket: RocketResponse) => {
      if (rocket.rocket_id === launch.rocket.rocket_id) {
        return rocket;
      }
    });
    return new Launch(
      launch.flight_number,
      launch.mission_name,
      getRocketMerge(theRocket, launch.rocket),
      getPayloadMerge(theRocket, launch.rocket)
    );
  });
  return myLaunches;

}

const getPaginatedLaunches = async function getPaginatedLaunches(
  req: Request, res: Response) {

  const limit = parseInt(req.query.limit as string) || 10;
  const page = parseInt(req.query.page as string) || 1;
  const launches = await getLaunches();
  const paginatedLaunches = launches.slice((page - 1) * limit, page * limit);

  return res.send({
    data: paginatedLaunches,
    total: launches.length,
    per_page: limit,
    page: page,
    pages: Math.ceil(launches.length / limit),
  });
}

export default getPaginatedLaunches;
