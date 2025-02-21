
let str= "Anwar -war";
let str1= "shaik"
let str2= " Anwar Farhan"

//`charAt(index)`
console.log(str.charAt(1))
console.log(str.charAt(2))
console.log(str.charAt(3))
console.log(str.charAt(4))
console.log(str.charAt(5))


//`charCodeAt(index)`
console.log(str.charCodeAt('a'))
console.log(str.charCodeAt(2))
console.log(str.charCodeAt(4))
console.log(str.charCodeAt('Anwar'))


//`concat(str1, str2, ...)`  
console.log(str1.concat(".", str2, "Ali"))


//`includes(substring, start)`  
console.log( "string includes: ", str.includes("war"))
console.log("string includes: ", str.includes("an"))
console.log("string includes: ", str.includes("An"))
console.log("string includes: ", str.includes("-war"))

//`indexOf(substring, start)` 
console.log("indexOf: ",str.indexOf('w')) 
console.log("indexOf: ", str.indexOf('a')) 
console.log("indexOf: ", str.indexOf('A')) 



//`lastIndexOf(substring, start)`  
console.log("lastIndexOf: ",str.lastIndexOf('w'))
console.log("lastIndexOf: ",str.lastIndexOf('A'))
console.log("lastIndexOf: ",str.lastIndexOf('m'))
console.log("lastIndexOf: ",str.lastIndexOf('o'))


//`localeCompare(compareString)`  
console.log("localeCompare: ", str1.localeCompare(str2))
console.log("localeCompare: ", str.localeCompare(str1))
console.log("localeCompare: ", str.localeCompare(str2))



//`match(regex)`  
console.log("match: ", str.match('a'))
console.log("match: ", str2.match(/n/g))
console.log("match: ", str1.match(/shaik/))
console.log("match: ", str1.match(/shak/))
console.log("match: ", str1.match(/shak/g))

//`matchAll(regex)`  
let str3 = str1.matchAll('a')
let str4 = str2.matchAll('Anwar')
for(let match of str3){
 console.log("matchall: ", match)
}
for(let match of str4){
    console.log("matchall giving input word: ", match)
}

//`repeat(count)`
console.log(str.repeat(2))
console.log(str2.repeat(4))


//`replace(searchValue, newValue)`  
console.log("replace:", str2.replace("Farhan" , "ali"))
console.log("replace with case-sensitive", str2.replace("farhan" , "ali"))


//`replaceAll(searchValue, newValue)`  
console.log("replace all: ",str1.replaceAll("shaik", "sk.Anwar"))
console.log("replace all: ",str.replaceAll("-war", "farhan"))


//`slice(start, end)`  
console.log("slice: ", str.slice(0 , 5))
console.log("slice: ", str.slice(2))
console.log("slice: ", str.slice(-2))
console.log("slice: ", str.slice(0 , -5))




//`split(separator, limit)`  
console.log("split: ", str2.split(" "))
console.log("split: ", str2.split("a", 1))
console.log("split: ", str2.split("a", 2))
console.log("split: ", str2.split("a", 3))
console.log("split: ", str2.split("a", 4))
console.log("split: ", str2.split("a", 5))




//`toLowerCase()`  
console.log("string To lowercase:", str2.toLowerCase());


//`toUpperCase()`  
console.log("String to uppercase: ", str2.toUpperCase());


//`trim()`  
console.log("trim: ", str.trim("-war"))
console.log("trim: ", str2.trim(""))



//`trimStart()` / `trimEnd()`  
console.log("Trim start: ",str.trimStart()); 
console.log("Trim end: ",str.trimEnd());   


//`valueOf()`  
let str6 = "sfrvsf"
console.log("value of: ", str6.valueOf('fgv'))


//`toString()`  
let a = 1234;
console.log("To string: ", a.toString())


//`split method`
let str5= "anbsdgvdducb#dfjdwoifh@cwdefrf"
console.log("split: ", str5.split("@"))
console.log("split: ", str5.split("#"))
console.log("split: ", str2.split(""))


//`reverse the given string`
let reverse = str5.split("").reverse().join("")
console.log("Reversed: ", reverse)
