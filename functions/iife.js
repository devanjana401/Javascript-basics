//Immediately invoked function expression  
//Feature :-
//1.Immediately invoked -- invoke means call function
//2.Data privacy -- variables defined inside iife,are not accessible outside
//3.Closure -- ability to access parent variables
//4.Self contain -- executes independently without effecting surrounding code

(function(){
    console.log("I'm invoked immediately");
})();