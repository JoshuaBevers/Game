// import { Talizam, Breaker } from "../init/STATE";
// import { Player, cities } from "../init/STATE";
// import { ICity } from "../cities/ICity";
// import { Actor } from "../player/actor";
// const prompts = require("prompts");
// let interval: any;
// var i: any;
// //Player is the location source.
// //city is the locations.
// //a function the iterates through the array options on connected cities and creates a title and value for each? IF so how do we parse that into choices?
// // a[] => [a]
// // [a] => [b]

// export function cityOptionsFinder() {
//   var local = getConnectedCities(); //gets us player connected cities.
//   const city = local.map(x => getCityByName(x));
//   console.log("THe players current location at : cityOptionsCities: ");
//   console.log(Player._location);
//   return city;
// }

// function getCityByName(name: string) {
//   const city = getCities();
//   if (name === city!.name) {
//     console.log("The Players current location at : getCityByName : ");
//     console.log(Player._location);
//     return city;
//   }
// }

// //compare(local, x)
// function getCities() {
//   console.log("The player's current location is : At getCityByName");
//   console.log(Player._location);
//   var places = cities.find(x => x.name);
//   return places;
// }

// function getConnectedCities() {
//   var places = cities.find(x => checkCities(Player._location, x));
//   return places!.connectedCities;
// }

// function checkCities(currentPlayerLocation: any, cities: ICity) {
//   var con;
//   if (currentPlayerLocation === cities.name) {
//     con = cities.connectedCities;
//     return con;
//   }
// }

// export async function askQuestion() {
//   //I need to get an array of objects for below.
//   const test = cityOptionsFinder();
//   console.log(test);
//   var filteredCity = test.filter(function(el) {
//     return el;
//   });
//   const connectedCities = filteredCity; //connected cities needs to not be this.
//   const cityOptions = connectedCities.map(x => mapcitytochoice(x));

//   const questions = [
//     {
//       type: "select",
//       name: "value",
//       message: "Where would you like to go to??",
//       choices: cityOptions,
//       initial: 1
//     }
//   ];

//   const answers = await prompts(questions, {
//     onCancel: cleanup,
//     onSubmit: cleanup
//   });
//   // console.log(answers.value);
//   return answers.value;
// }

// export async function changeLocation() {
//   var newLocation = [];
//   try {
//     newLocation = await askQuestion();
//     console.log(newLocation);
//   } catch (e) {
//     console.log(e);
//   }

//   const local: ICity = newLocation;
//   Player._location = local.name;
//   return Player._location;
// }

// function cleanup() {
//   clearInterval(interval);
// }

// function mapcitytochoice(City: any) {
//   return { title: City.name, value: City };
// }
