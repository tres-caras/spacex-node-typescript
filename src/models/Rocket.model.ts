import { Payload } from "./Payload.model";

export class Rocket {
  rocket_id: string;
  rocket_name: string;
  description: string;
  images: string[];
  payloads: Payload[];

  constructor(rocket_id: string = "", rocket_name: string = "", description: string = "", images: string[] = [], payloads: Payload[] = []) {
    this.rocket_id = rocket_id;
    this.rocket_name = rocket_name;
    this.description = description;
    this.images = images;
    this.payloads = payloads;
  }
}
