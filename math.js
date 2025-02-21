
//Math.random() → Generates a random number between 0 and 1.
let randomNumber = Math.random();
console.log("Random Number: ", randomNumber); // Output: A random number between 0 and 1, e.g., 0.547512

let randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Random Number: ", randomInt); // Output: A random integer between 1 and 10


//Math.floor() → Rounds down to the nearest integer.
let number = 5.67;
let flooredNumber = Math.floor(number);
console.log("Floored Number: ", flooredNumber); // Output: 5


let negativeNumber = -5.67;
let flooredNegative = Math.floor(negativeNumber);
console.log("Floored Negative Number: ", flooredNegative); // Output: -6


//Math.min() → Returns the smallest of the provided numbers.
let smallestNumber = Math.min(5, 12, 3, 8);
console.log("Smallest Number: ", smallestNumber); // Output: 3


let smallestOfArray = Math.min(...[10, 23, 5, 0, -2]);
console.log("Smallest of an Array: ", smallestOfArray); // Output: -2


//Math.max() → Returns the largest of the provided numbers.
let largestNumber = Math.max(5, 12, 3, 8);
console.log("Largest Number: ", largestNumber); // Output: 12


let largestOfArray = Math.max(...[10, 23, 5, 0, -2]);
console.log("Largest of an Array: ", largestOfArray); // Output: 23
