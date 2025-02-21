
// let num= 1

// let array = [ 1,2,3,"anwar","a"]


// const object = { 
//     name : "anwar",
//     organisation : "its"
// }


// let string= " "

// let Boolean= true/false


// for(let i=0; i<=5; i++){
//     console.log(i)
// }





// // function checkevenodd() 
// function checkEligibility(age)
// {
//     //for(let i=1; i<=30; i++){

// //if(i % 2 === 0){
// if(age<=18){
//     //console.log(i ,"is even numbee")
//     console.log("not eligible")

// }



// else{
//     //console.log(i, "is odd number")
//     console.log("eligible to vote")
// }
// }
// //}
// //checkevenodd()
// checkEligibility(27)
// checkEligibility(7)
// checkEligibility(17)
// checkEligibility(18)


// //while
// let count=5;
// while(count<=20){
//     console.log(count);
//     count++
// }



//do-while
let m = 0
do{
    console.log("do: ", m);
    m++;
}while(m<=10){
    console.log("while: ",m)
}


//for-Of    input should be in array with in [ ]
let employedetails = ["name : anwar", "organisation: its", "role: developer"]

for(let details of employedetails){
    console.log("for-of: ", details);
}
console.log("\n")






// //for-in input can be any array or object but while consoling it should be in array [ ]
// // let employee = {name : "anwar", organisation: "its", role: "developer"}

// // for(let info in employee){
// //     console.log("for-in:", employee[info])
// // }





// //function to greet
// function greet(name){
//     console.log("wecome to its"+ name)
// }
// greet("anwar")



//ternary
function shop(item) {
    return item == "chocolate" ? "20" :
           item == "ice_cream" ? "30" :
           item == "biscuits"  ? "10" :
           item == "drinks"     ?  "30": "no item Added" ;
                
}
let item = "drinks";
console.log(shop(item));


//concat() :- add two arrays

//filter() & Find() 
const ages = [32, 33, 16, 40]

function checkAdult(age) {
  return age >= 18;
}
const result = ages.filter(checkAdult)
const voter = ages.find(checkAdult)



console.log("Using Filter", result)                          //filter the ages
console.log("Using find: ", voter)   //checks the first elements that passes the test



//map()
const oddnumber = [1,3,5,7]
const add1 = oddnumber.map(num => num + 1)
console.log(add1)

//reduce()
const sumofall = oddnumber.reduce((acc, num) => acc + num, 0);
console.log(sumofall)




// //this or new
// let employee = {name : "anwar",
//                 organisation: "its",
//                 role: "developer",

//                 printId: function(){
//                     // employee.home_address = "nizampet"
//                     // employee.office_address = "miyapur"
//                     employee.address = "nizampet"
//                     console.log(this)

//                 },

//                 address: function(office){
//                 this.address = office
//                 //  function(home ,office){
//                 //     this.home_address= home,
//                 //     this.office_address=office
                    
//                  },
//                 blood_group: "B +ve" 

//                }
// // console.log(employee.name)
// // console.log(employee.organisation)
// // //console.log(employee.address("hyderabad" , "vijayawada"))
// // //employee.blood("")
// employee.printId()



// class employee_details{

//     constructor(name,organisation,role,officeID){
//         this.name =name,
//         this.organisation = organisation,
//         this.role = role
//         this.officeID= officeID
//         this.jobsalary = this.salary(role)
//     }
//     salary(role){
//         return role == "software" ? "10l" :
//                role == "tester" ? "20l"   :
//                role == "hr"      ?  "5l"   : "not disclosed"

//     }
//     printdetails(){
//        console.log(`
//                     Name : ${this.name},  
//                     Organisation : ${this.organisation}, 
//                     role :  ${this.role} 
//                     officeID: ${this.officeID}, 
//                     salary : ${this.jobsalary}`
//         )

//     //    console.log("name:", this.name)
//     //    console.log("organisation:", this.organisation)
//     //    console.log("role:", this.role)
//     }

// }
// const Employee = new employee_details("Anwar", "its" , "software","123")
// Employee.printdetails()

// const Employee1 = new employee_details("shaik", "its" , "tester","234")
// Employee1.printdetails()


// //fetch()
//   fetch('https://dummyjson.com/users')

//   .then(response => {
//     if(!response.ok){
//         throw new Error('Network is not responding')
//     }
//     return response.json()
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Could not fetch the error', error))


//   //Axios
// axios.get('https://dummyjson.com/users')
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.error('There was an error with the Axios request:', error);
// });


// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; 
  
    if (success) {
      resolve("Operation successful!")
    } else {
      reject("Something went wrong.")
    }
  })
  
  myPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error(error)
    })
    .finally(() => {
      console.log("Promise has been handled.")
    })




  