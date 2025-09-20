//we can store functions inside object,that are called methods


//example1
const car = {
    brand:"Toyota",
    start:function(){    //anonymous function
        console.log("Car Started");
    }       
}
car.start();

//example2
const person = {
    name:"Anjana",
    age:23,
    greet:function(){
        console.log(`Hello,myname is ${this.name}`);      //this - it is a keyword,it refers the object itself(used to access the properties and method)
        
    }
}
person.greet();



