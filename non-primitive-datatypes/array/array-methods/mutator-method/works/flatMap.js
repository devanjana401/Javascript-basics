let fruits = ['apple', 'orange','grape'];
// use flatMap to transform each item (and flatten)
let result = fruits.flatMap(fruit => [fruit, fruit.toUpperCase()]);
console.log(result);
