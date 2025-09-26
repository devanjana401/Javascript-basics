//To arrange/sort elements as in order of ascending or descending

let nums = [10,1,21,2];
nums.sort();
console.log(nums);

//numeric sort - ascending order
const numbers1 = [4,2,5,1,3];
numbers1.sort((a,b) => a-b)
console.log(numbers1);

//numeric sort - descending order
const numbers2 = [4,2,5,1,3];
numbers2.sort((a,b) => b-a)
console.log(numbers2);


//default string sort - ascending
let fruits1 = ['banana','apple','dates','cherry'];
fruits1.sort();
console.log(fruits1);

//string sort - descending
let fruits2 = ['banana','apple','cherry','dates'];
fruits2.sort((a,b) => b.localeCompare(a));
console.log(fruits2);