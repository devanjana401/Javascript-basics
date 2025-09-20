//Checking condition and run successcode if condition is true,else run failure code)
//condition ? successcode : failurecode

// let age = 10;
// let result = (age >= 18) ? "Adult" : "Minor";
// console.log(result);

const prompt = require('prompt-sync')();


let age = prompt("Enter your age:");
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);