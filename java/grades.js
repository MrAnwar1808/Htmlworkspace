
function grade(marks){

    // return score >= 90 ?  "A"    :
    //        score >= 80 ?  "B"    :
    //        score >= 70 ?  "C"    :
    //        score >= 60 ?  "D"    : 
    //        score >= 50  ? "F"    : "Fail";


    return   marks >= 90 && marks <=100 ? "A" :
             marks >=70  && marks  <= 89 ? "B" :
             marks >=50  && marks  <= 69 ? "C" :
             marks >=40  && marks  <= 49 ? "D" : "Fail";

}
// console.log(grade(93));
// console.log(grade(73));
// console.log(grade(83));
// console.log(grade(43));
// console.log(grade(53));
// console.log(grade(63));


//create object 
rollno1 = {  Name: "john", marks:40 , grade: '' };     //D
rollno2 = {  Name: "rose", marks:60 , grade: '' };     //C
rollno3 = {  Name: "lisa", marks:80 , grade: '' };     //B

//calculate grade
rollno1.grade = grade(rollno1.marks);
rollno2.grade = grade(rollno2.marks);
rollno3.grade = grade(rollno3.marks);

console.log("\n");
console.log(rollno1);
console.log(rollno2);
console.log(rollno3);

//Swap the grade by using pass by value 
function swapgrade(rollno1 , rollno2){
    let rollno = rollno1.grade;
        rollno1.grade = rollno2.grade;
        rollno2.grade = rollno;
}
//before
console.log("\nBefore Swap: ")
console.log(" Name: " + rollno1.Name , "Grade: " + rollno1.grade);     //D
console.log(" Name: " + rollno2.Name , "Grade: " +rollno2.grade);      //C

//after
console.log("\nAfter swap: ");
swapgrade(rollno1 , rollno2)
console.log(" Name: " + rollno1.Name , "Grade: " + rollno1.grade);         //C
console.log(" Name: " + rollno2.Name , "Grade: " +rollno2.grade);          //D

console.log("\n")
swapgrade(rollno3 , rollno1)            //(B , C)
console.log(" Name: " + rollno3.Name , "Grade: " + rollno3.grade);      //C  
console.log(" Name: " + rollno1.Name , "Grade: " +rollno1.grade);       //B




//upgade
function updategrade(student){
    student.grade = grade(student.marks);
}

rollno1.marks = 80;
rollno2.marks = 34;
rollno3.marks = 95;

updategrade(rollno1);
updategrade(rollno2);
updategrade(rollno3);

console.log("\n");
console.log(" Name: " + rollno1.Name , "Grade: " + rollno1.grade);
console.log(" Name: " + rollno2.Name , "Grade: " +rollno2.grade);
console.log(" Name: " + rollno3.Name , "Grade: " +rollno3.grade);
