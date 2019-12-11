//needs to take in a Player and Opponent.
import { Battle } from "./init";
import { Actor } from "../player/actor";
//needs to output a battle object.

export async function battleSetup(Player: Actor, Opponent: Actor) {
  // this can be extracted out for a random generator if you wish.
  const combat = new Battle(Player, Opponent);
  return combat;
}

//example return : battle = new Battle(pikachu, bulbasaur, trainer);
