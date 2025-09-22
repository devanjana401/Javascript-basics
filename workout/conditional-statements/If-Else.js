const prompt = require("prompt-sync")();
let age = prompt("Enter age: ");
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("You can't vote");
}