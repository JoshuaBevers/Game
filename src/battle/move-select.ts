import { Actor } from "../player/actor";
import { Battle } from "./init";
import { Adventurer } from "../player/Player";
let interval: any;
const prompts = require("prompts");

//not having access to specific objects is why a battle class is required.
export async function moveSelect(Battle: Battle, Actor: Actor) {
  try {
    const result = await askQuestions(Battle, Actor);
    return result;
  } catch (err) {
    console.error(err);
  } finally {
  }
}

async function askQuestions(Battle: Battle, Actor: Actor) {
  const questions = [
    {
      type: "select",
      name: "value",
      message: "Please Select a move.",
      choices: [
        { title: Actor.moves[0].id, value: Actor.moves[0].id },
        { title: Actor.moves[1].id, value: Actor.moves[1].id }
        //{ title: battle.pokemonA.moves[2].name }
      ],
      initial: 1
    }
  ];
  const answers = await prompts(questions, {
    onCancel: cleanup,
    onSubmit: cleanup
  });
  return answers.value;
}

function cleanup() {
  clearInterval(interval);
}
