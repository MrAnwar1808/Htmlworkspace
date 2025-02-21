//basic pass by value
let a = 5;
    b = a+5; 
    c = a+b+1;

    console.log(a);
    console.log(b);
    console.log(c);



//pass by value (using numbers)
function reassign(x) {
     x = 20;

     console.log("inside function: ", x);      //20
}
let num = 5;
console.log("\nBefore function: ", num);    //5
reassign(num);
console.log("\nAfter function: ", num);      //5


//increment
function increment(p){
    p += 1;
    console.log("\nIn function Increment", p)
}
let q = 2
console.log("\nBefore Increment: ", q);
increment(q);
console.log("\nAfetr Increment", q)



//pass by value array
function testarray(t,u){
        //t = 5;
       t[1] =6;
       u[0] = 7;
       u[1] = 8;
       console.log("\n In Function TestArray:", t, u, t[1]);
}
let //v = 9;
    v = [13];
    w = [10, 11, 12];
    console.log("\nBefore test: ", v, w[2]);
    testarray(v , w);
    console.log("\nAfetr In Function Test Array:" , v[0], w[1]);
    console.log("\nAfetr In Function Test Array:" , v, w[1]);




//pass by value (using string)
function updatestring(str){
    str = "president Donald Trump";
    
    console.log("\nInside function: ", str );    //donald trump
}
let currentstring = "Mr.Donald Trump"
console.log("\nBefore function: ", currentstring);    //
updatestring(currentstring);
console.log("\nAfter function: ", currentstring);


//pass by reference - object

function details(student){
    student.firstname = "Anwar Farhan"
    console.log("\nFirst Name in submitted Doc's: ", student);
}
let employee = {firstname: "Anwar", lastname: "shaik"};
console.log("\nBefore : ",employee )
details(employee);
console.log("\nAfter correction the updated First Name: ", employee)


//pass by ref - array & array.push

function reassignarray(arr){
    //arr = [1,2,3,4,5];
    arr.push(5,6,7,8);

    console.log("\nIn function:", arr);

}
let actualarray = [1,2,3]
actualarray.push(4)
console.log("\nBefore Function:", actualarray);
reassignarray(actualarray);
console.log("\n After function:", actualarray);
















