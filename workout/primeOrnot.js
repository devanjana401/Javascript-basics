const prompt = require("prompt-sync")();
let num = Number(prompt("Please enter a number:"));
let isPrime = true;
if (num <= 1) {
    isPrime = false;
} else if (num === 2) {
    isPrime = true;
} else if (num % 2 === 0) {
    isPrime = false;
} else {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " is not a prime number");
}
