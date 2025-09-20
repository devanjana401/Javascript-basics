const prompt = require('prompt-sync')();


let age = prompt("Enter your age:");
let result = (age >= 18) ? "Your eligible for voting" : "Your not eligible for voting";
console.log(result);