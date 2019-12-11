import { getMove } from "../techniques/get-move";
import { Actor } from "../player/actor";
import { IMove } from "../techniques/IMove";

//future idea below

// export class Modifier {
//   dodged: number;
//   charged: boolean;
//   master: number;
//   type: string;
// }

export function modifer(player: any, move: any) {
  var modDamage;
  // type advantage needs to be implimented here. to be built later.
  const STAB = typeMatch(player, move);
  //weather modifer goes here.
  const dodged = 1;
  // requires master affection. To be implimented when trainer is created.
  modDamage = STAB * dodged;
  return modDamage;
}

export function typeMatch(player: Actor, move: any) {
  const test = getMove(move)!.type;
  if (test === player.type) {
    return 2;
  } else {
    return 1;
  }
}
