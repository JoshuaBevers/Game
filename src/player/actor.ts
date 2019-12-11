import { Stats } from "./stats";
import { IMove } from "../techniques/IMove";
import { ICity } from "../cities/ICity";
import { cities } from "../init/STATE";
//need a hp max.

//const cities = [new Talizam()]; //THIS IS THE ROOT OF EVIL!

export class Actor {
  level: number;
  species: string;
  name: string;
  stats: Stats;
  element: string;
  type: string;
  moves: IMove[];
  _location: string;
  inventory: {}[]; //this should probably be made into a IItem.

  constructor(level: number, species: string, name: string, type: string) {
    this.level = level;
    this.species = species;
    this.name = name;
    this.stats = new Stats();
    this.type = type;
    this.moves = [];
    this.element = "null";
    this.inventory = [];
    this._location = "";
    // this.location = [];
  }
  get location() {
    return cities.find(x => x.name === this._location);
  }
  // static deserialize(data: any) {
  //   return new Actor(data.level, data.species, data.name, data.type);
  // }
  // serialize() {
  //   return JSON.parse(JSON.stringify(this));
  // }
}
