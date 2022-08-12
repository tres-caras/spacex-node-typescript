export class Payload {
  payload_id: string;
  manufacturer: string;
  type: string;

  constructor(payload_id: string, manufacturer: string, type: string) {
    this.payload_id = payload_id;
    this.manufacturer = manufacturer;
    this.type = type;
  }
}
