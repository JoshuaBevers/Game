import Scene from "./scene";
import Prologue from "../prologue/stage1";
import { SceneStack } from "./scene-stack";
import { Player } from "../init/STATE";
import { recieveIItem } from "../items/add-item";
import { potion } from "../items/potions";

const prompts = require("prompts");
let interval: any;

export default class OverworldScene extends Scene {
  async onEnter() {}
  async onExit() {
    var question;
    question = await QuittingTheGame();
    if (question === 2) {
      //this does not retrieve the last area. It quits the game as well. This need to be fixed using the scene stack to put the last known town and chapter player was in.
    }
  }
  async run() {}
}

async function QuittingTheGame() {
  //prompts player if they would like to exit the game.
  const questions = [
    {
      type: "select",
      name: "value",
      message: "Would you like to quit the game?",
      choices: [
        { title: "yes", value: 1 },
        { title: "no", value: 2 }
      ],
      initial: 1
    }
  ];

  const answers = await prompts(questions, {
    onCancel: cleanup,
    onSubmit: cleanup
  });
  console.log(answers.value);
  return answers.value;
}

function cleanup() {
  clearInterval(interval);
}
