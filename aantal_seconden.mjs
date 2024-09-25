// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let aantalDagen = parseFloat(await userInput.question("Geef het aantal dagen: ")); // parseFloat om de ingegeven waarde te lezen als getal ipv string
let aantalUren = parseFloat(await userInput.question("Geef het aantal Uren: "));
let aantalMinuten = parseFloat(await userInput.question("Geef het aantal Minuten: "));
let aantalSeconden = parseFloat(await userInput.question("Geef het aantal Seconden: "));

let totaalSeconden = (aantalDagen*24*60*60) + (aantalUren*60*60) + (aantalMinuten*60) + aantalSeconden;

console.log("Totaal aantal seconden: "+totaalSeconden);


process.exit(); 