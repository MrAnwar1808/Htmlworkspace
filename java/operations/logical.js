
let raj = 'true';
let anwar = true;
let farhan = false;
let anwarfarhan = true;
let af =false;
let a = 2;
let b = 3;

console.log(anwar && farhan);               // false (both conditions must be true)
console.log(anwar && anwarfarhan);             //true (both the conditions are true)
console.log(farhan && anwarfarhan);            //false (both conditions must be true)
console.log("\n");
console.log (a & b);
console.log("\n");
console.log(anwar || farhan);                // true (one condition must be true)
console.log(anwar || anwarfarhan);            // true  (both conditions must be true)
console.log(farhan || anwarfarhan);           // true   (both conditions must be true)
console.log("\n");
console.log(farhan || af);
console.log("\n");


console.log(!anwar);                 // false (negates the value){!true => false(logical not)}
console.log(!farhan);                    // true ()
console.log(!anwarfarhan);                  //false ()
console.log (!raj);
