import axios from "axios";
import { Launch } from "../models/Launch.model";
import { Payload } from "../models/Payload.model";
import { Rocket } from "../models/Rocket.model";

const getLaunchesOnly = async (url: string): Promise<Record<string, any>> => {
  let returnValue: Object[] = [];
  await axios
    .get(url)
    .then((response) => response.data)
    .then((launches: Record<string, any>) => {
      launches.forEach((launch: Record<string, any>) => {
        const myLaunchObject = {
          flight_number: launch.flight_number,
          mission_name: launch.mission_name,
          rocket: launch.rocket,
          payloads: launch.rocket.second_stage.payloads,
        };
        returnValue.push(myLaunchObject);
      });
    })
  return returnValue;
};

const getRocket = async (url: string): Promise<Record<string, any>> => {
  let returnValue: Object[] = [];
  await axios
    .get(url)
    .then((response) => response.data)
    .then((rockets: Record<string, any>) => {
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
    })
  return returnValue;
};

function getRocketMerge(theRocket: Record<string, any>, rocket: Record<string, any>): Rocket {
  return new Rocket(
    theRocket.rocket_id ? theRocket.rocket_id : rocket.rocket_id,
    theRocket.rocket_name ? theRocket.rocket_name : rocket.rocket_name,
    theRocket.rocket_description ? theRocket.rocket_description : rocket.description,
    theRocket.images ? theRocket.images : rocket.flickr_images,
    getPayloadMerge(theRocket, rocket)
  );
}

function getPayloadMerge(theRocket: Record<string, any>, rocket: Record<string, any>): Payload[] {
  return [theRocket.payloads, rocket.second_stage.payloads]
  .flat()
  .filter((payload: Record<string, any>) => payload.payload_id !== "");
}

export default async function getLaunches(): Promise<Launch[]> {
  return Promise.all([
    getRocket("https://api.spacexdata.com/v3/rockets"),
    getLaunchesOnly("https://api.spacexdata.com/v3/launches"),
  ]).then(([rockets, launches]) => {
    const myLaunches = launches.map((launch: Record<string, any>) => {
      let theRocket = rockets.find((rocket: Record<string, any>) => {
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
  });
}

