

let p = 7;          //number
let q = '7';        //{'a', '1', 'anwar', 'a1' }= string

console.log(p == q);             // true (will only check the number not the type)
console.log(p === q);           // false (will check the type as well)
console.log(p != 5);            // true (7 is not equal to 5)
console.log(p !== '7');         // true (not strictly equal as the value is string)
console.log(p > 3);             // true   (7 greater than 3)
console.log(p <= 5);           // false     
console.log("\n");
console.log(p < 4);
console.log(p >= 7);
console.log("\n");


console.log(q != 6);            // true (7 is not equal to 6)
console.log(q !== '7');         // false (the value is strictly equal)
console.log(q > 3);             // true   (7 greater than 3)
console.log(q <= 5);           // false  (as the 7 is not less than or equal to 5)
