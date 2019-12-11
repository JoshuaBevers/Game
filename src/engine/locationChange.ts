import { Talizam, Breaker } from "../init/STATE";
import { Player, cities } from "../init/STATE";
import { ICity } from "../cities/ICity";
import { Actor } from "../player/actor";
const prompts = require("prompts");
let interval: any;
var i: any;
const currentPlayerLocation = Player._location; //this is the players current location.
//Player is the location source.
//city is the locations.
//a function the iterates through the array options on connected cities and creates a title and value for each? IF so how do we parse that into choices?
// a[] => [a]
// [a] => [b]

export function cityOptions() {
  const cities = getConnectedCities();
  console.log(cities + " : We are at city Options");
  return cities;
}

function getConnectedCities() {
  for (i = 0; i < cities.length; i++) {
    var check = cities[i];
    if (cities.find(x => cities[i].name === Player._location)) {
      return check;
    } else {
      console.log(check);
    }
  }
}

export async function changeLocation() {
  const connectedCities = [Breaker, Talizam];
  //const cities = await getCities(Talizam);
  const cityOptions = connectedCities.map(x => mapcitytochoice(x));

  const questions = [
    {
      type: "select",
      name: "value",
      message: "Where would you like to go to??",
      choices: cityOptions,
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

function mapcitytochoice(City: ICity) {
  return { title: City.name, value: City };
}
