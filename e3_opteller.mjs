// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in

// EASY

// let som;
// let getal1 = parseFloat(await userInput.question("Getal 1? ")); // parseFloat om de ingegeven waarde te lezen als getal ipv string
// let getal2 = parseFloat(await userInput.question("Getal 2? "));

// som = getal1 + getal2;

// console.log("De som van deze 2 getallen is "+som);


//MEDIUM


let getal1 = 31; // parseFloat om de ingegeven waarde te lezen als getal ipv string
let getal2 = 76;

let som = getal1 + getal2;
let verschil = getal1 - getal2;
let product = getal1 * getal2;
let deling = getal1 / getal2;

console.log("De som van de twee getallen is "+som);
console.log("Het verschil van de twee getallen is "+verschil);
console.log("Het product van de twee getallen is "+product);
console.log("De deling van de twee getallen is "+deling);


process.exit();
