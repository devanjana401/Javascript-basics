//creating arrays:

//1.using literals
let colors = ["Red","Yellow","Green"];
console.log(colors);

//2.using array constructor
let numbers = new Array(10,20,30);
console.log("Numbers:",numbers);
// let numbers = new Array(3);  do not take this as an array element,it consider it as array size  o/p;[ < 3 items>]  less readable & not use much

//3.creating an  empty array and pushing values later
let items = [];
items.push("apple");
console.log("Items",items);
