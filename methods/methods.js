
//map() syntax
// var new_array = arr.map(function callback(element, index, array) {
//     // Return value for new_array
// }[, thisArg])


//map
const numbers = [1, 2, 3, 4, 5, -2];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

const squares = numbers.map(num => num ** 2);
console.log(squares);  // [1, 4, 9, 16]


//reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 10

const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product);  // 24

//filter
const greaterThanThree = numbers.filter(num => num > 3);
console.log(greaterThanThree);  // [4, 5]

const positiveNumbers = numbers.filter(num => num > 0);
console.log(positiveNumbers);  // [1, 3, 5]


//find
const firstGreaterThanThree = numbers.find(num => num > 3);
console.log(firstGreaterThanThree);  // 4

const firstNegative = numbers.find(num => num < 0);
console.log(firstNegative);  // -2




const users = [
    { name: 'Anwar', role: 'developer' },
    { name: 'Farhan', role: 'tester' },
    { name: 'shaik', role: 'designer' },
    { name: 'Anwar Farhan', role: 'hr' }
  ];

  //map
  const names = users.map(user => user.name);
  console.log(names); 
  
  //filter
  const olderUsers = users.filter(user => user.age >= 30);
  console.log(olderUsers);  
 

  const newuser = users.filter(user => user.name === 'shaik');
  console.log(newuser); 


  //find
  
  const finduser = users.find(user => user.name === 'Farhan');
  console.log(finduser); 

  const developer = users.find(user => user.role === 'developer');
  console.log(developer); 
  



 //using map 
const words = ['hello', 'world', 'javascript'];
const uppercasedWords = words.map(word => word.toUpperCase());
console.log(uppercasedWords);  



//using reduce
const arrays = [[1, 2], [3, 4], [5, 6]];
const flattened = arrays.reduce((acc, arr) => acc.concat(arr), []);
console.log(flattened);  




//using reduce
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); 














  
  



  
 


