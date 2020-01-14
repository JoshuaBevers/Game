import { Adventurer } from "../player/Player";
import { Battle } from "./init";
import { Actor } from "../player/actor";
import Chalk from "chalk";
import { applyDamage } from "./apply-damage";
import { moveSelect } from "./move-select";
import { fightCalc } from "./damage-calc";
import { getMove } from "../techniques/get-move";

export async function runBattle(Battle: Battle) {
  // a second partner should be brought into this to choose what to battle against.
  //for the sake of brevity, I'm just going to bring in the same Player. This can be flushed out later.
  const { Opponent, Player } = Battle; //deconstructor
  console.log("We've reached here.");
  while ((Player.stats.hp || Opponent.stats.hp) > 0) {
    const move = await moveSelect(Battle, Player); //requires moves to work.
    const damage = await fightCalc(Player, Opponent, move); //requires move to work.
    applyDamage(Player, damage);
    console.log("This is the battle loop.");
  }
}
