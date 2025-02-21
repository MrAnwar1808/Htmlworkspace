
let employee_details = {
    name : "Anwar",
    organisation : "ITS",
    role : "Developer",
    printID : function() {
        //    employee_details.office_address = "Kub Towers, Gachibowli,hyd";
        //    employee_details.home_address = "sv nivaas, nizampet, hyd"
           console.log(this)
    },
    update_address : function(home , office){
        this.home_address = home,
        this.office_address = office
    
    },
    blood_group: "B +ve"
}
employee_details.update_address("Kub Towers, Gachibowli,hyd","sv nivaas, nizampet, hyd")
employee_details.printID()
// employee_details.office_address = "Kub Towers, Gachibowli,hyd";
// employee_details.home_address = "sv nivaas, nizampet, hyd";
//console.log(employee_details);






//using class and constructor
class employee {
    constructor(name,organisation,role ){
        this.name = name,
        this.organisation = organisation,
        this.role = role
       
    }
    updateAddress(home_address , office_address){
        this.home_address = home_address,
        this.office_address= office_address
    }
    
    printdetails(){
        console.log(`
            Name           :    ${this.name},
            Organisation   :    ${this.organisation},
            Role           :    ${this.role},
            Home Address   :    ${this.home_address},
            office Address :    ${this.office_address}`
        );
    }
}
const Employee = new employee("Anwar Farhan","Innovators Tech Solutions","Software Developer");
Employee.updateAddress("kodad, suryapet(dist)" , "Kub Towers, Hyderabad");
console.log("\nEmployee Detail :")
Employee.printdetails()

const Employee1 = new employee("shaik", "ITS", "Trainer");
Employee1.updateAddress("chennai" , "hyderabad");
console.log("\nEmployee1 Detail :")
Employee1.printdetails()

const Employee2 = new employee("farhan", "ITS", "Hr");
Employee2.updateAddress("gachibowli" , "Hyderabad");
console.log("\nEmployee2 Detail :")
Employee2.printdetails()







//using ternary and this and new
class itsemployee {
    constructor(name,organisation,role ){
        this.name = name,
        this.organisation = organisation,
        this.role = role,
        this.salary = this.getsalary(role)

    }
    updateAddress(home_address , office_address){
        this.home_address = home_address,
        this.office_address= office_address
    }
    getsalary(role){
        return role == "Software Developer" ?    "7L p.a" :
               role == "Tester"             ?    "8L p.a"  :
               role == "Trainer"            ?    "9L p.a"  :
               role == "Hr"                 ?     "10L p.a"  :
               role == "project manager"    ?   "***********" : "more roles need to be hire";
    
    }
    
    printempdetails(){
        console.log(`
            Name           :    ${this.name},
            Organisation   :    ${this.organisation},
            Role           :    ${this.role},
            Salary         :    ${this.salary}
            Home Address   :    ${this.home_address},
            office Address :    ${this.office_address}`
        );
    }

}
const Employee3 = new itsemployee("Anwar Farhan","Innovators Tech Solutions","Software Developer");
Employee3.updateAddress("kodad, suryapet(dist)" , "Kub Towers, Hyderabad");
console.log("\nEmployee3 Detail used Ternary to disclose salary:");
Employee3.printempdetails()

const Employee4 = new itsemployee("shaik", "ITS", "Trainer");
Employee4.updateAddress("chennai" , "hyderabad");
console.log("\nEmployee4 Detail used Ternary to disclose salary:");
Employee4.printempdetails()

const Employee5 = new itsemployee("farhan", "ITS", "Hr");
Employee5.updateAddress("gachibowli" , "Hyderabad");
console.log("\nEmployee5 Detail used Ternary to disclose salary:");
Employee5.printempdetails()






//calculating uber rides
class uberRide{
    constructor(name,mobile,currentlocation, destination){
           this.name = name,
           this.mobile= mobile,
           this.currentlocation= currentlocation,
           this.destination= destination
    }
    changinglocations(start_point , end_point){
        this.currentlocation = start_point,
        this.destination = end_point
        // uberRide.currentlocation= start_point,
        // uberRide.destination = end_point

    }
    distance(km){
        if (km > 0 && km <= 5){
             return "₹50";
            }
        else if (km > 5 && km <= 10){
             return "₹100";
            }
        else if (km > 10 && km <= 15){
             return "₹150";
            }
        else if (km > 15 && km <= 20){
             return "₹200";
            }
        else if (km > 20 && km <= 25){
             return "₹300";
            }
        else if (km > 25 && km <= 30){
             return "₹400";
            }   
        else if (km > 30 && km <= 35){  
            return "₹500";
            }
        else {
            return "No trips are available after 40km";
        }

    }

    uberFare(){
       const tripdistance = { 
            initial: 0,
            gachibowli: 4,
            madhapur: 7,
            kondapur: 10,
            hitechcity: 15,
            banjarahills: 20,
            jubileeHills: 30,
            mgbs : 35,
            dilshuknaagr: 43
       }
        //const start_point = this.currentlocation;
        const start_point = "initial";
        const end_point = this.destination;

       if(tripdistance[start_point] !== undefined  &&
          tripdistance[end_point] !== undefined )

          {
            const km = Math.abs(tripdistance[end_point] - tripdistance[start_point]);
            
            const fare = this.distance(km);
            console.log("\n")
            console.log(` Passenger: ${this.name},\n Mobile: ${this.mobile}`);

          //console.log( `The fare for ${km} km from ${this.currentlocation} to ${this.destination} is: ${fare}`);
          console.log( `The fare for ${km} km from ${start_point} to ${this.destination} is: ${fare}`);

    } else {
        //console.log(`${this.currentlocation}, ${this.destination}`);
        console.log(`${start_point}, ${this.destination}`);
    }
    }
}

const uberRide1 = new uberRide("Anwar","1234567","gachibowli", "madhapur");
//uberRide1.uberFare();
//uberRide1.changinglocations("initial" , "madhapur");
//console.log("\nChange location so the updated fair: ")
uberRide1.uberFare();
console.log("\n")




//Movie tickets
class movietickets{
    
    constructor(name, mobile, moviename, seattype, quantity){
        this.name = name,
        this.mobile = mobile,
        this.moviename = moviename,
        this.seattype = seattype,
        this.quantity = quantity 
    }
    ticketfare(){
        const ticketprice ={ standard : 100,
            balcony : 150,
            recliner : 250
        };
        if(!ticketprice[this.seattype]){
            return "not selected"
        }
        const total = ticketprice[this.seattype] * this.quantity
        return total

    }
    booking(){
        const Totalprice = this.ticketfare() 
        if(typeof Totalprice === "string" ){
            console.log(Totalprice)
            return;
        }

        console.log(`Name        : ${this.name}
                     Mobile      : ${this.mobile}
                     Movie name  : ${this.moviename}
                     Seat Type   : ${this.seattype}
                     Quantity    : ${this.quantity}
                     Total price  : ₹${Totalprice}`)
    }
}
const Bookings = new movietickets("Anwar","123456666","you","recliner","2")
Bookings.booking()




//account
class sbi{
    #card_number
    constructor(name,card_number, checkbalance){
        this.name = name,
        this.#card_number = card_number,
        this.checkbalance = checkbalance
    };
    
    static checkaccount = ["12121212","13131313","14141414"]

    // static addaccount 
    
    checkaccount(){
         if(sbi.checkaccount.includes(this.card_number)){
            console.log("Account details of the valid account holder:")
         }
         else{
            console.log("Invalid Account")
         }
    }
    accountholder(){
        console.log(
            `Name :${this.name}
            Card Number : ${this.card_number}
            Check Balance : ₹${this.checkbalance}`)
    }
    
}
const Accountholder = new sbi("Anwar", "1213233131", 10)
Accountholder.checkaccount()
Accountholder.accountholder()

const Accountholder1 = new sbi("Farhan", "14141414", 1000)
Accountholder1.checkaccount()
Accountholder1.accountholder()



// //hdfc
class hdfc{
    #card_number; 
    #checkbalance;
    #history; 
    constructor(customer, card_number, checkbalance, branch) {
        this.customer = customer; 
        this.#card_number = card_number;             //abstarction (private feild )
        this.#checkbalance = checkbalance;
        this.#history = []; 
        this.branch = branch; 
    }
}

class Customer {
    constructor(name, contact) {              //aggrestion (independent object)
        this.name = name;
        this.contact = contact;
    }
}

class Transaction {
    constructor(type, amount) {
        this.type = type;                         //composition(dependent object)
        this.amount = amount; 
        this.date = new Date();
    }
}

class Branch {
    constructor(branchName, branchCode) {
        this.branchName = branchName;             //Association(linking related classes)
        this.branchCode = branchCode;
    }
}

