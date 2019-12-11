import * as Potions from "./potions";
import { IItem } from "./IItem";
import { Player } from "../init/STATE";
//these need to be replaced asap.

const prompts = require("prompts");
let interval: any;

//this expects a player or NPX as well as an Item in the arguement.
export async function recieveIItem(source: any, IItem: IItem) {
  try {
    console.log("This is the IItem in add-IItem.ts line 11 " + IItem.name);
    const result = await askQuestions(IItem);
    if (result === IItem) {
      source.inventory.push(result);
    }
  } catch (err) {
    console.error(err);
  } finally {
  }
}

async function askQuestions(IItem: IItem) {
  const questions = [
    {
      type: "select",
      name: "value",
      message: "Would you like to recieve " + IItem.name + "?",
      choices: [{ title: "yes", value: IItem }, { title: "no", value: 2 }],
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
