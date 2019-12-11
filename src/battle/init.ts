import Chalk from "chalk";
import { Adventurer } from "../player/Player";
import { Actor } from "../player/actor";

export class Battle {
  Player: Actor;
  Opponent: Actor;
  // needs to be changed to trainer once trainer is complete.
  constructor(a: Adventurer, b: Actor) {
    this.Player = a;
    this.Opponent = b;
  }
  printIntro() {
    console.log("///////");
    console.log(Chalk.blue(this.Player.name + " vs " + this.Opponent.name));
    console.log("///////");
  }
}
