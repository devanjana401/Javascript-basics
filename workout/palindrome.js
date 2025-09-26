const prompt = require('prompt-sync')();
let str = prompt("Enter the word:")
str = str.toLowerCase();
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}
