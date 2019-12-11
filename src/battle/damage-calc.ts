import { Actor } from "../player/actor";
import { Battle } from "./init";
import { Adventurer } from "../player/Player";
import { modifer } from "./modifier";
import { getMove } from "../techniques/get-move";
import { IMove } from "../techniques/IMove";

export async function fightCalc(Attacker: Actor, Defender: Actor, move: any) {
  try {
    console.log(Attacker.name + "This one is attacking.");
    console.log(Defender.name + "This one is defending.");
    var topFraction =
      ((2 * Attacker.stats.level) / 5) * getMove(move)!.power +
      Attacker.stats.attack / Defender.stats.defense;
    var bottomFraction = 50;
    var mod = modifer(Attacker, move);
    const totalDamage = (topFraction / bottomFraction + 2) * mod;
    console.log("The damage is : " + totalDamage);
    return totalDamage;
  } catch (e) {
    console.log((<Error>e).message); //conversion to Error type
  }
}
