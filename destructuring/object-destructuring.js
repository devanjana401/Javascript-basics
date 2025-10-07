const person = {
    name:"Anjana",
    age:23,
    country:"India"
}

//basic
const {name,age} = person;
console.log(name);
console.log(age);

//rename variables
const {country:nation} = person;
console.log(nation);

//default values
const {gender = "female"} = person;
console.log(gender);
