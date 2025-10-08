const fruits = ['apple', 'banana'];
const fruitEntries = fruits.entries();

for (const entry of fruitEntries) {
  console.log(entry);
}

// for (const [index, fruit] of fruitEntries) {
//   console.log(index, fruit);
// }
//out-- 0 apple 1 banana