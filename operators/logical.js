// && AND (both are true)
// || OR (one of them is true)
// ! NOT(inverted)

//(for comparing condition)

//Logical AND (&&)
// console.log("true && true:" ,true && true)
// console.log("true && false:" ,true && false)
let a = 2;
let b = 21;
let x = a < b  && b >  a;
console.log('x is:',x);

//Logical OR(||)
// console.log("true || false:",true || false);
// console.log("false || false:",false || false);
let y = a > b || a < b ;
console.log("y is:",y)

//Logical NOT (!)
// console.log("!true:",!true);
// console.log("!false:",!false);
let z = !(a>b)
console.log("z is:",z);
