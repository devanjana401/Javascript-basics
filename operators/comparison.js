//Used for comparison
//'2'== 2 equal to
//===   strictly equals

//!= not equal
//!== strictly not equal
// > greater than
// < less than
// >= greater than or eqaul to
//<= lesser than or equal to
//'2' !== 2   condition is TRUE 
//'2' == 2 TRUE
//'2' === 2 TRUE
//'2' === 2 FALSE (checking both value and data type)

let a = '2';
let b = 4;
let c = 6;
let d = '2';
let e = 2;

// equal to
console.log("Equal to case a==b:", a == b);
console.log("Equal to case (String and Number)(Here checking both values and data type) a==e:", a == e);

//strictly equal to
console.log("strictly equal to case a===d:", a === d);

//Greater than
console.log("greater than c>b", c > b);
console.log("greater than b>c", b > c);

//less than
console.log("less than c<b", c < b);
console.log("less than b<c", b < c);

//greater than or equal to
console.log("greater than or equal to c > =b", c >= b);
console.log("greater than or equal to  b > =c ", b >= c);

//not equal to
console.log("not eqaul to cas c !=d", c != d);

//strictly not equal to
console.log("strickly not eqaul to case c !==d", c !== d);
console.log("strickly not eqaul to case d !==e", d !== e);
console.log("strickly not eqaul to case d !==a", d !== a);