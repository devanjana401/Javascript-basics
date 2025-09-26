const prompt = require('prompt-sync')();
let n = prompt("Enter the number:");
if(n%2==0){
    console.log(n +" is even");
}
else{
    console.log(n +" is odd");
    
}