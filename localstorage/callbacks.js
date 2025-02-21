

console.log(hoistedFunction());  


console.log(myVar);  
var myVar = "I am hoisted";

function hoistedFunction() {
    return "I am a hoisted function!";
}


function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(function() {
     
        const data = { message: "Data fetched successfully!" };
        callback(data);  
    }, 2000);  
}


fetchData(function(data) {
    console.log("Callback executed: ", data.message);
});

console.log("End of the script");
