import { faker } from "@faker-js/faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lng: number;
    lat: number;
  };
  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lng: faker.location.longitude(),
      lat: faker.location.latitude(),
    };
  }

  markerContent() {
    return `
      <h1>Company Name: ${this.companyName}</h1>
      <h3>CatchPhrase: ${this.catchPhrase}</h3>
    `;
  }
}
