//Callback functions are function,that are passed as arguments to another function.
//Used for 
//1.Handle Asynchronous operation   (synchronous-line by line execution)
//2.Avoid blocking code execution
//Nested callback called as callback hell(difficult to maintain codes)

//This is our callback function
function greetUser(name){
    console.log(`Hello,${name}...!`);
}

//This function takes another function(callback) as an argument
function getUserInput(callback){
    const name = "Anjana" ; //simulating user input
    callback(name)
}
getUserInput(greetUser);