//key-value pairs (also key called as properties)
//use {}
//applicable for any type of data

const person = {
    name:'anjana',
    age:'20',
    isStudent:true
}
console.log(person.name);
console.log(person.age);

//added new data
person.city = "calicut"

//modifying data
person.age = "24"
console.log(person);

//remove a properties from object
delete person.city
console.log("Final person details is:",person);



