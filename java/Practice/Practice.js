

function operation(a,b){
    return{
        add: a + b,
        subtraction: a - b,
        product: a * b,
        remainder: a % b,
        division: a / b,
        Exponentiation: a ** b
    };
}
console.log(operation(3,2))



// let sum = 0;
// for(i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(`sum of numbers 1 to 10: ${sum}`);

// let sub = 10;
// for(i = 10; i >= 1; i--){
//     sub -= i;
// }
// console.log(`sub of numbers 10 to 1: ${sub}`);


let m;
for(m = 1; m <=10; m++){
    console.log(`counting numbers from 1 to 10: ${m}`)
}


let n;
for(n = 10; n >=1; n--){
    console.log(`counting numbers from 10 to 1: ${n}`)
}


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

    //scopes using var
    let globalName = "Anwar"; 
    function scope() {
    let localName = "Farhan"; 
    console.log(globalName + " " + localName); 
    if (true) {
        let blockName = "Welcome"; 
        console.log(blockName + " to the team, " + globalName + localName); 
    }
}
scope();

//terinary
function shop(item) {
    return item == "chocolate" ? "$20" :
           item == "ice_cream" ? "$30" :
           item == "biscuits"  ? "$10" :
           item == "drinks"     ?  "$30": "no item Added" ;
                
}
let item = "drinks";
console.log(shop(item));



let numbers = [10, 20, 30, 40, 50, 60];
console.log("Length of array:", numbers.length);
console.log("Element at index 2:", numbers[2]);

console.log("Forward loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("Reverse loop:");
for (let i = numbers.length-1; i >= 0; i--) {
    console.log(numbers[i]);
}

//push
numbers.push(70, 80);
console.log("After push:", numbers);   //push addes the elemenets we have given in the last

//pop
numbers.pop();
console.log("After pop:", numbers);       //pop removes the last element
 

//shift
numbers.shift();
console.log("After Shift:", numbers);       //shift deletes the first element



//unshift
numbers.unshift(10);
console.log("After unshift:", numbers);        //unshift add the element in ths first

//slice
let Numbers = numbers.slice(1,6);               //remove index 1 and 6
console.log("After slice:", Numbers);


let str= " Anwar Farhan"

//`charAt(index)`
console.log(str.charAt(1))
console.log(str.charAt(2))

//`charCodeAt(index)`
console.log(str.charCodeAt('a'))
console.log(str.charCodeAt(2))



// const numbers = [12, 33 ,44, 77, 1, 2];
// function maximum(array) {
//       let max = array[0];   
//     for (let i = 0; i < array.length; i++){
//         if(array[i] > max){
//          max = array[i];
//     }
// }
//     return max;
    
// }
// console.log("\n Maximum number: ",maximum(numbers));



//count
const number = [1, 2, 3, 4, 1, 2, 3, 4, 5, ,5 ,5 ,5];
const target = 5;
function countoccurance(arr , target){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            count++
        }
    }
        return count;
}
console.log("\nNo of reapeated values: ", countoccurance(number , target));





    
//Event Propagation (Bubbling) 

// const outer = document.querySelector('.outer')
// const middle = document.querySelector('.middle')
// const inner = document.querySelector('.inner')

// outer.addEventListener('click', function(){
//     console.log("you have clicked on margin where bubbling is active")
// })

// middle.addEventListener('click', function(){
//     console.log("you have clicked on border where bubbling is active")
// })

// inner.addEventListener('click', function(){
//     console.log("you have clicked on padding where bubbling is active")
// })

//Event Propagation (Capturing)

const outer = document.querySelector('.outer')
const middle = document.querySelector('.middle')
const inner = document.querySelector('.inner')

outer.addEventListener('click', function(){
    console.log("you have clicked on margin") 
},true)                                                   //true means capturing phase

middle.addEventListener('click', function(Event){
    console.log("you have clicked on border")
    // Event.stopPropagation()
},true)

inner.addEventListener('click', function(){
    console.log("you have clicked on padding")// if i click on inner the flow wil be outer to middle to inner
},true)






function arthmatic(a, b){
    return a + b;
   
}
console.log(arthmatic(2,3))