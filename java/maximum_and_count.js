
//maximum number
let values = [33, 44, 88, 11, 99, 12, 4];
const numbers = [12, 33 ,44, 77, 1, 2];
function maximum(array) {
      let max = array[0];   
    for (let i = 0; i < array.length; i++){
        if(array[i] > max){
         max = array[i];
    }
}
    return max;
    
}

console.log("\n Maximum value: ",maximum(values));
console.log("\n Maximum number: ",maximum(numbers));


//minimum number
let value = [33, 44, 88, 11, 99, 12, 4];
const numb = [12, 33 ,44, 77, 1, 2];
function minimum(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}
console.log("\n Minimum value: ",minimum(value));
console.log("\n Minimum number: ",minimum(numb));




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
