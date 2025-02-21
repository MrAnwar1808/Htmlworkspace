

let str = "anwar";
let num = Number(str);           
console.log(typeof num);          



let num1 = 123;
let str1 = String(num1);             
console.log(typeof str1);             


let value = 1;
let boolValue = Boolean(value);           
console.log(boolValue); 





let floatNum = "12.34";
let intNum = parseInt(floatNum);          //parseInt(12.34)                
let preciseNum = parseFloat(floatNum);       //parsefloat(12.34)        
console.log(intNum);                                   
console.log(preciseNum); 
console.log(floatNum)                              



let intString = "42.99px";
let parsedInt = parseInt(intString);
console.log("Parsed integer from '42px':", parsedInt);





let floatString = "3.14abc";
let parsedFloat = parseFloat(floatString);
console.log("Parsed float from '3.14abc':", parsedFloat);