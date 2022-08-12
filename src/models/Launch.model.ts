import { Payload } from "./Payload.model";
import { Rocket } from "./Rocket.model";
export class Launch {
  flight_number: number;
  mission_name: string;
  rocket: Rocket;
  payloads: Payload[] = [];

  constructor(flight_number: number, mission_name: string, rocket: Rocket, payloads: Payload[]) {
    this.flight_number = flight_number;
    this.mission_name = mission_name;
    this.rocket = rocket;
    this.payloads = payloads;
  }
}
