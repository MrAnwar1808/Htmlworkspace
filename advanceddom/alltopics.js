

// 1. Variables and Data Types
let userName = "Anwar"; // String
const userAge = 28; // Number
let isUserStudent = false; // Boolean

// 2. Operators
let a = 10, b = 5;
let sum = a + b; // Arithmetic
let isEqual = a === b; // Comparison
let isAdult = userAge >= 18; // Logical

// 3. Conditional Statements
let eligibilityMessage = isAdult ? "You are eligible to vote." : "You are not eligible to vote.";

// 4. Loops
let evenNumbers = [];
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    }
}

// 5. Functions
function greetUser(name) {
    return `Hello, ${name}!`;
}

// 6. Arrays
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango");

// 7. Objects
let person = {
    name: userName,
    age: userAge,
    isStudent: isUserStudent,
    greet() {
        return `Hi, I am ${this.name}.`;
    }
};

// 8. Promises
let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched successfully!"), 2000);
});

// 9. Async/Await
async function fetchDataAsync() {
    let result = await fetchData;
    console.log(result);
    return result;
}

// 10. Fetch API (simulated with a Promise)
function fetchUserData() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "John Doe" }), 1000);
    });
}

// 11. setTimeout
setTimeout(() => {
    console.log("This message is delayed by 3 seconds!");
}, 3000);

// 12. setInterval
let counter = 0;
let intervalId = setInterval(() => {
    counter++;
    console.log(`Interval count: ${counter}`);
    if (counter === 3) {
        clearInterval(intervalId);
        console.log("Interval cleared.");
    }
}, 1000);

// 13. Scope (Global and Local)
let globalVar = "I am global";
function scopeTest() {
    let localVar = "I am local";
    console.log(globalVar); // accessible
    console.log(localVar); // accessible
}

// 14. Hoisting
console.log(x); // undefined (due to hoisting)
var x = 10;

// 15. Closures
function outer() {
    let outerVar = "I am from the outer function!";
    return function inner() {
        console.log(outerVar);
    };
}

// 16. Template Literals
let greetingMessage = `Hello, ${userName}. You are ${userAge} years old.`;

// 17. Spread and Rest Operators
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5];
function sumAll(...args) {
    return args.reduce((total, num) => total + num, 0);
}

// 18. Array Methods
let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(num => num * 2);
let evenNumbersFromArray = nums.filter(num => num % 2 === 0);
let totalSum = nums.reduce((acc, curr) => acc + curr, 0);

// Run the example and display all concepts
async function runExample() {
    // Displaying output of various concepts
    let output = `
        1. Variables and Data Types: 
        Name: ${userName}, Age: ${userAge}, Student: ${isUserStudent}
        
        2. Operators:
        Sum: ${sum}, Is Equal: ${isEqual}, Is Adult: ${isAdult}
        
        3. Conditional Statements:
        ${eligibilityMessage}
        
        4. Loops:
        Even Numbers: ${evenNumbers.join(', ')}
        
        5. Functions:
        Greet Message: ${greetUser(userName)}
        
        6. Arrays:
        Fruits: ${fruits.join(', ')}

        7. Objects:
        Person: ${person.greet()}

        8. Promises:
        Fetch Data: (awaiting 2 seconds) ${await fetchData}
        
        9. Async/Await:
        Async Fetch Data: ${await fetchDataAsync()}
        
        10. Fetch API:
        Fetched User Data: ${JSON.stringify(await fetchUserData())}

        11. setTimeout:
        (Message logged after 3 seconds)

        12. setInterval:
        (Interval count will be logged every second for 3 seconds)

        13. Scope:
        Global: ${globalVar}, Local: (localVar is scoped to the function)

        14. Hoisting:
        x = ${x}

        15. Closures:
        Inner function has access to: ${outer()()}

        16. Template Literals:
        Greeting: ${greetingMessage}

        17. Spread and Rest Operators:
        More Numbers: ${moreNumbers.join(', ')}, Sum of All: ${sumAll(1, 2, 3, 4, 5)}

        18. Array Methods:
        Doubled: ${doubled.join(', ')}, Even Numbers: ${evenNumbersFromArray.join(', ')}, Total Sum: ${totalSum}
    `;

    document.getElementById("output").innerText = output;
}