const prompt = require("prompt-sync")();
//Get user input
let userInput = prompt("Do you want the promise to succeed? (yes/no): ");
//Create the promise based on user input
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (userInput.toLowerCase() === "yes") {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    }, 2000); 
});
//Handle the promise
myPromise
    .then(result => console.log(result))  // runs if promise is resolved
    .catch(error => console.log(error))   // runs if promise is rejected
    .finally(() => console.log("Promise execution finished!"));
