const fruits = ['apple', 'banana'];
const fruitEntries = fruits.entries();

for (const entry of fruitEntries) {
  console.log(entry); // [0, 'apple'], then [1, 'banana']
}
