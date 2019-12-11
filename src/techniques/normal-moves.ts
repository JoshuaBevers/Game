import { IMove } from "./IMove";

export const tackle: IMove = {
  name: "Tackle",
  id: "Tackle",
  accuracy: 100,
  description: "Charge forward and hit it with your head.",
  power: 40,
  type: "normal"
};

export const quickattack: IMove = {
  id: "Quick Attack",
  name: "Quick Attack",
  accuracy: 100,
  description: "Charge forward and hit it with your head, but do it quickly.",
  power: 30,
  type: "normal"
};

export const Hyperbeam: IMove = {
  name: "Hyperbeam",
  id: "Hyperbeam",
  accuracy: 100,
  description: "Fire the laser.",
  power: 120,
  type: "normal"
};
