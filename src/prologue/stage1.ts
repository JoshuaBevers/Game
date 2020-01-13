import Scene from "../scene-config/overworld-menu";
import * as Locations from "../cities/list";
import { recieveIItem } from "../items/add-item";
import { Player } from "../init/STATE";
import { potion } from "../items/potions";
import { Talizam, Breaker } from "../init/STATE";
import { cityOptionsFinder, changeLocation } from "../engine/locationChange";
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
    console.log("This is Prologue");
    //cityOptions();
    await changeLocation();
    console.log("Divide line");
    console.log(Player._location);
    await changeLocation();
    //await cityOptionsFinder();
    console.log("Divide line");
    console.log(Player._location);

    console.log("Passed the location set.");
  }
}

async function cart() {
  console.log(
    "Hey, you. You're finally awake. You're " +
      Player.name +
      " Right? I think I've seen you're face around here before."
  );
}

//await runBattle(encounter1); //this is code to start a battle based on encounter one setup.
