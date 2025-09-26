// const calc = (a, b) => ({
//     multiply: a * b,
//     add: a + b,
//     subtract: a - b,
//     divide: a / b
// });
// console.log(calc(2,5));


// const calc = (a, b) => {
//     return {
//         multiply: a * b,
//         add: a + b,
//         subtract: a - b,
//         divide: a / b
//     }
// };
// console.log(calc(2, 5));


const calc = (a, b) => {
    const addition = a + b;
    console.log("Addition:",addition);
    const subtraction = a - b;
    console.log("Subtraction:",subtraction);
    const divison = a / b;
    console.log("Division:",divison);
    const multiplication = a * b;
    console.log("Multiplication:",multiplication);
    return (addition,subtraction,divison,multiplication);
};
calc(6,3)
