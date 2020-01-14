import Scene from "../scene-config/overworld-menu";
import * as Locations from "../cities/list";
import { recieveIItem } from "../items/add-item";
import { Player } from "../init/STATE";
import { potion } from "../items/potions";
//import { cityOptionsFinder, changeLocation } from "../engine/locationChange";
import { runBattle } from "../battle/combat";
import { Battle } from "../battle/init";

export default class Prologue extends Scene {
  async onEnter() {
    console.log("Overworld Scene Starting");
  }

  async onExit() {
    console.log("Overworld Scene Exiting");
  }

  async run() {
    const battleYourself = new Battle(Player, Player);
    await cart();
    await runBattle(battleYourself);
  }
}

async function cart() {
  console.log(
    "Hey, you. You're finally awake. You're " +
      Player.name +
      " Right? I think I've seen your face around here before. I'mma gonna kill ya."
  );
}

//await runBattle(encounter1); //this is code to start a battle based on encounter one setup.
