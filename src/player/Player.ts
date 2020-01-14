import { Actor } from "./actor";
import * as Location from "../cities/list";
import { tackle, quickattack } from "../techniques/move-index";

export class Adventurer extends Actor {
  constructor() {
    super(1, "Human", "Name Placeholder", "normal");
    this.name = "Larry";
    this.level = 1;
    this.stats.hp = 10;
    this.stats.attack = 6;
    this.stats.defense = 4;
    this.element = "Normal";
    this.type = "Normal";
    this.moves = [tackle, quickattack];
  }
}
