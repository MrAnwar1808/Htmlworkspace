
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



//scope using num
// let globalNumber = 123; 
// function scope1() {
//     let localNumber = 456; 
//     console.log(globalNumber , localNumber);
//     if (true) {
//         let blockNumber = 789;
//         console.log(blockNumber);
//     } 
// }
// scope1();





function DayName(dayNumber) {
    let day;
    switch (dayNumber) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Invalid day";
    }
    return day;
}

console.log(DayName(4)); 
console.log(DayName(7)); 
console.log(DayName(8)); 






function basket(fruit) {
    switch (fruit) {
        case "apple":
        case "orange":
        case "banana":
            console.log("You have selected your favorite fruit");
            break;
        default:
            console.log("Fruit Not Available ");
    }
}

basket("apple");   
basket("banana");  
basket("pear");   







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
let Numbers = numbers.slice(1,6);
console.log("After slice:", Numbers);

//splice
numbers.splice(0, 2 );      //deletes the first 2 elements
//numbers.splice(0, 2 , 2 );    //deletes the first 2 elements and addes the 2 in those places
//numbers.splice(2, 0, 90 );  //addes 90 in the second index position
//numbers.splice(2, 2 );    //delete the 2 number from second index
//numbers.splice(2, 1 );       // deletes only second index
console.log("After splice:", numbers);


//foreach
numbers.forEach((number , index) =>
{
// console.log("Element at index 0:", number);
// console.log("Element at index 1:", number);
// console.log("Element at index 2:", number);
// console.log("Element at index 3:", number);
// console.log("Element at index 4:", number);
// console.log("Element at index 5:", number);
// console.log("Element at index 6:", number);
// console.log("Element at index 7:", number);
console.log(`Each Element at index ${index}:, ${number}`);

}
)
