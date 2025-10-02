//flattens nested arrays into a single-level array (depth can be specified)

const nested = [1,[2,[3]]];
const flat1 = nested.flat(2);  //we can mention how much flat use
console.log(flat1);
