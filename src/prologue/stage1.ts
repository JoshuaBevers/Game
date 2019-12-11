import Scene from "../scene-config/overworld-menu";
import * as Locations from "../cities/list";
import { recieveIItem } from "../items/add-item";
import { Player } from "../init/STATE";
import { potion } from "../items/potions";
import { Talizam, Breaker } from "../init/STATE";
import { cityOptions, changeLocation } from "../engine/locationChange";
import { battleSetup } from "../battle/createBattle";
import { runBattle } from "../battle/combat";

export default class Prologue extends Scene {
  async onEnter() {
    console.log("Overworld Scene Starting");
  }

  async onExit() {
    console.log("Overworld Scene Exiting");
  }

  async run() {
    const encounter1 = await battleSetup(Player, Player); // fights self.
    console.log("This is Prologue");
    console.log(Player._location + " : This is the players current location.");
    await runBattle(encounter1);
  }
}

async function cart() {
  console.log(
    "Hey, you. You're finally awake. You're " +
      Player.name +
      " Right? I think I've seen you're face around here before."
  );
}
