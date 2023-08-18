
1.
const digits = [4, 5, 6, 67, 7];
const doubleDigits = digits.map(function (num, index) {
  return num * 2;
});

console.log(doubleDigits);
console.log(digits.length);


2.
let oddNumbers = [1, 3, 5, 7, 9, 10, 11, 13, 15, 17, 19, 20];

const checkIfOnlyOdd = (array) => {
  for (let num of array) {
    if (num % 2 === 0) {
      console.log("They are not all odd.");
      return false;
    }
  }
  console.log("They are all odd.");
  return true;
};

const replaceWithOdd = (array) => {
  let newArray = [];
  for (let num of array) {
    if (num % 2 === 0) {
      newArray.push(num + 1);
    } else {
      newArray.push(num);
    }
  }
  return newArray;
};

checkIfOnlyOdd(oddNumbers);

let modifiedArray = replaceWithOdd(oddNumbers);
console.log(modifiedArray);

3.
let myString = "Fruit loops is the best cereal.";
let total = 0;
let newString = ""; 

for (let i = 0; i < myString.length; i++) {
  let theVowel = myString.charAt(i);

  if (/[aeiouAEIOU]/gi.test(theVowel)) {
    total++;
  } else {
    newString += theVowel; 
  }
}

console.log(`Modified string without vowels: ${newString}`);
console.log(`Total number of vowels: ${total}`);

4.
const myStringaling = "hello hello hello";
const pattern = /hello/g;
let result;

while ((result = pattern.exec(myStringaling)) !== null) {
  console.log(`Found '${result[0]}' at position ${result.index}`);
}

5.
let isItAPalindrome;
let word = "A man a plan a canal, Panama.";

let cleanedWord = word.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
let backwards = cleanedWord.split("").reverse().join("").toLowerCase();

if (cleanedWord === backwards) {
  isItAPalindrome = true;
  console.log("It is a palindrome!");
} else {
  console.log("It is not a palindrome, sorry.");
}