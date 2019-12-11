import { Adventurer } from "../player/Player";
import * as Location from "../cities/list";
import { Actor } from "../player/actor";
import fs from "fs";

//the goal of this is to operate a lot like a config. It sets the data and allows it to be in scope and easily referenced.
//this might need to be broken into its own file inside init and functions called to do the setup at the start of the game.
//if this gets to have a terrible load time, consider certain setups to use a non-awaited promise to have it load in at its leasure. It shouldn't come to this.

//exports the created the player.
export const Player = new Adventurer();

// exports locations. This might need to be broken up depending on how many locations.
export var Talizam = new Location.Talizam();
export var Breaker = new Location.Breaker();
export const cities = [Breaker, Talizam];
//const save = Player.serialize;

// const foo = new Actor(1, "hi", "No", "normal");
// const save = foo.serialize();
// fs.writeFileSync("./save.json", save);

// //reading back in
// const bar = fs.readFileSync("./save.json").toString();
// const bar2 = JSON.parse(bar);
// const foo2 = Actor.deserialize(bar2);
