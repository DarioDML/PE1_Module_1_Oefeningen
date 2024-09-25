// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let geboortejaar = parseFloat(await userInput.question("Wat is je geboortejaar? ")); // parseFloat om de ingegeven waarde te lezen als getal ipv string
let toekomstjaar = parseFloat(await userInput.question("Het jaar waar je je leeftijd wilt weten? "));

let leeftijd = toekomstjaar-geboortejaar;

console.log("In "+toekomstjaar+" zal ik " +(leeftijd-1) +" of " + leeftijd +" jaar oud zijn.");


process.exit();
