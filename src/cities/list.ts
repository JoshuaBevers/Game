import { ICity } from "./ICity";
import { cities } from "../init/STATE";

export class Talizam implements ICity {
  name: string;
  description: string;
  connectedCities: string[];

  constructor() {
    this.name = "Talizam";
    this.description = "This is TALIZAM!";
    this.connectedCities = ["Breaker", "Null"];
  }
}

export class Breaker implements ICity {
  name: string;
  description: string;
  connectedCities: string[];

  constructor() {
    this.name = "Breaker";
    this.description = "This is BREAKER!!";
    this.connectedCities = ["Talizam", "Second Null"];
  }
}
