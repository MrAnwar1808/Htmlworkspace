
console.log("\n for loop: ")
//for loop
for(let i = 0; i < 5; i++)
{
    console.log("For loop's iteration:", i);
}



console.log("\n while loop: ")
//while loop
let count = 5;
while (count <= 10)
{
    console.log(" while loop's count is:", count);
    count++;
} 


console.log("\n do-while loop: ")
//do-while
let number = 11;
do{
    console.log(" do loop's starting from number :", number);
    number++;
}
while(number < 20)
{
    console.log("do-while end number is:", number);
    
}


console.log("\n for...of: ")
//for-of
const emp_details = ["Name: Anwar", "Company-name: ITS", "ID: 1234", "Designation: Associate-software", "Location: Hyderabad"];
for (const emp of emp_details) 
{
console.log("Employee ", emp);
}

console.log("\n for....in: ")
 //for-in
const emp ={ name: "Anwar", Company: "ITS", id: "1234" };
for (const key in emp )
{
    console.log(key + ":- " + emp[key]);
}


console.log("\n break: ")
//break
for( let i = 0; i < 5; i++)
{
    if(i === 5) break;
    console.log(i);
}


//continue
for( let i =5; i < 10; i++)
{
    if( i === 7 ) continue;
    console.log("value:",i);
}


//Breaking and Continuing Loops
for (let i = 0; i < 10; i++) 
{
    if (i === 5) {
    break;                                  // Exit the loop when i is 5
    }
    console.log("Iteration:", i);
}

    for (let i = 0; i < 10; i++) 
{
    if (i % 2 === 0) {
    continue;                               // Skip even numbers
    }
    console.log("Odd number:", i);
}

    for (let i = 0; i < 10; i++)
{
    if (i % 2 !== 0){
      continue;                          // skip odd number         
    }
    console.log("Even number:", i);

}


//Funtion

function greet1(name) {
    console.log(" Welcome to Innovators Tech Solutions " + name);
    }
    greet1("Anwar");

//function with parameters-1
function greet(name) {
    console.log(`Welcome to Innovators Tech Solutions ${name}`);
    console.log("Hello, " + name + " Memebers ", "Welcome to Innovators Tech Solutions")
}
greet("Team");

// Welcome to Innovators Tech Solutions Anwar
// Welcome to Innovators Tech Solutions Team
// Hello, Team Memebers Welcome to Innovators Tech Solutions
// hello, Team


//function & parameters-2
greet = function(name){
    console.log("hello, " + name);
}
greet("Team");

//Function & parameters = Add
function add(a,b){
    return a+b;
}
console.log(add(2,3));

//Function & parameter = multiply-1
function multipy(c,d){
    return [c*d, c%d];
    
}
console.log(multipy(3,2));

//Function & parameter = All operations
function operation(e,f){
    return{
        add: e + f,
        subtraction: e - f,
        product: e * f,
        remainder: e % f,
        division: e / f,
        Exponentiation: e ** f
    };
}
console.log(operation(3,2))


//if-else
function checkEligibility(age){
if (age < 18){
    console.log("You're not eligible to vote.");
}
else if (age >= 18 & age <= 24 ){
    console.log("ready to vote.");
}
else {
    console.log("You are eligible to vote.");
}
}

checkEligibility(20);
checkEligibility(0);
 checkEligibility(17);
 checkEligibility(37);

 



function checkevenodd(start, end){
for( i = start; i <= end; i++){
    if (i % 2 === 0){
        console.log(i + "is even");
    }else{
        console.log(i + "is odd");
    }
}

}
checkevenodd(1,10);



let sum = 0;
for(i = 1; i <= 10; i++){
    sum += i;
}
console.log(`sum of numbers 1 to 10: ${sum}`);

let sub = 10;
for(i = 10; i >= 1; i--){
    sub -= i;
}
console.log(`sub of numbers 10 to 1: ${sub}`);


let m;
for(m = 1; m <=10; m++){
    console.log(`counting numbers from 1 to 10: ${m}`)
}


let n;
for(n = 10; n >=1; n--){
    console.log(`counting numbers from 10 to 1: ${n}`)
}
