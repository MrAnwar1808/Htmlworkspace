
// function findSecondLargestAndSmallest(arr) {
    
   
//     let largest = -Infinity, secondLargest = -Infinity;
//     let smallest = Infinity, secondSmallest = Infinity;

//     // Traverse the array to find largest and smallest
//     for (let num of arr) {
//         if (num > largest) {
//             secondLargest = largest;
//             largest = num;
//         } else if (num > secondLargest && num !== largest) {
//             secondLargest = num;
//         }

//         if (num < smallest) {
//             secondSmallest = smallest;
//             smallest = num;
//         } else if (num < secondSmallest && num !== smallest) {
//             secondSmallest = num;
//         }
//     }

//     if (secondLargest === -Infinity || secondSmallest === Infinity) {
//         throw new Error("Array must have at least two distinct elements.");
//     }

//     return { secondSmallest, secondLargest };
// }

// // Example usage
// let array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// let result1 = findSecondLargestAndSmallest(array1);
// console.log("Second Smallest:", result1.secondSmallest); // 2
// console.log("Second Largest:", result1.secondLargest);   // 6








let array3 = [2, 8, 9 , 11, 70 , 99]

    
  //let array4 = [4, 2, 6, 1, 5, 3, 6, 4];
  function secondMaximum(array) {

    let sorted = [...new Set(array)].sort((a, b) => a - b);
    let ascending = [...sorted];
    let descending = [...sorted].reverse();

    return { 
        secondSmallest: sorted[1], 
        secondLargest: sorted[sorted.length - 2],
        ascending: ascending, 
        descending: descending 
    };
}

let result = secondMaximum(array3);
console.log("Second Smallest:", result.secondSmallest); // 2
console.log("Second Largest:", result.secondLargest);   // 5
console.log("Ascending Order:", result.ascending);
console.log("Descending Order:", result.descending);






let arr = [1, 2, 4, 66, 43, 81, 36, 24];
let k = 5;
let filterarr = [];
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        filterarr.push(arr[i]);
    }
}


if (filterarr.length === 0) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > k) {
            filterarr.push(arr[i]);
        }
    }
    console.log("Filter array (k condition):", filterarr);
} else if (filterarr.length !== 0) {
    console.log("Filter array (even indices):", filterarr);
}


let transformarray = [];
for (let i = 0; i < filterarr.length; i++) {
    transformarray.push(filterarr[i] * i);
}


let sum = 0;
for (let i = 0; i < transformarray.length; i++) {
    sum = sum + transformarray[i];
}
console.log("Sum:", sum);


let reversearray = [];
for (let i = transformarray.length - 1; i >= 0; i--) {
    reversearray.push(transformarray[i]);
}
console.log("Reverse array (manual):", reversearray);


transformarray.reverse();
console.log("Transform array (reverse method):", transformarray);






