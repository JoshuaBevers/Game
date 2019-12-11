import { Actor } from "../player/actor";

export function applyDamage(Player: Actor, damage: any) {
  Player.stats.hp = Player.stats.hp - damage;
  console.log(Player.name + " Hp is currently: " + Player.stats.hp);
  return Player.stats.hp;
}
