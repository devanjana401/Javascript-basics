const prompt = require('prompt-sync')();
let a = prompt("Enter fisrt number:");
let b = prompt("Enter second number:");
let temp = a;
a = b;
b= temp;
console.log("After swapping a=",a,"b=",b);
