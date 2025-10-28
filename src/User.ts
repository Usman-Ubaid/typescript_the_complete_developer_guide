import { faker } from "@faker-js/faker";
import { MapMarker } from "./CustomMap";

export class User implements MapMarker {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";
  constructor() {
    this.name = faker.person.fullName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent() {
    return `<h1>Username: ${this.name}</h1>`;
  }
}
