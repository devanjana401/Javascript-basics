// Step 1: Import prompt-sync
const prompt = require("prompt-sync")();

// Step 2: Get user input
let userInput = prompt("Do you want the promise to succeed? (yes/no): ");

// Step 3: Create the promise based on user input
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (userInput.toLowerCase() === "yes") {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    }, 2000); // 2-second delay
});

// Step 4: Handle the promise
myPromise
    .then(result => console.log(result))  // runs if promise is resolved
    .catch(error => console.log(error))   // runs if promise is rejected
    .finally(() => console.log("Promise execution finished!"));
