import * as move from "./move-index";

export function getMove(id: string) {
  try {
    return Object.values(move).find(m => m.id === id);
  } catch (e) {
    console.log((<Error>e).message); //conversion to Error type
  }
}
