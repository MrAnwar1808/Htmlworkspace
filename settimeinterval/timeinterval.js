
//setTimeout()

console.log("Start");

setTimeout(function() {
    console.log("This happens after 2 seconds");
}, 2000);

console.log("End");


//Countdown with setInterval()

let count = 0;

let intervalId = setInterval(function() {
    count++;
    console.log(count);

    if (count === 5) {
        clearInterval(intervalId); // Stop the interval after 5 counts
    }
}, 1000);


//setTimeout & setInterval

console.log("Start");

setTimeout(function() {
    console.log("First delayed message after 1 second");
}, 1000);

setTimeout(function() {
    console.log("Second delayed message after 2 seconds");
}, 2000);

setTimeout(function() {
    console.log("Third delayed message after 3 seconds");
}, 3000);

console.log("End");

//Countdown with setInterval()

let countdown = 5;

let reverse = setInterval(function() {
    console.log(countdown);
    countdown--;

    if (countdown < 0) {
        clearInterval(reverse);
        console.log("Countdown finished!");
    }
}, 1000);

//Using setTimeout() inside a Loop

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // What will this log?
    }, 1000);
}


//Nested setTimeout() Calls

setTimeout(function() {
    console.log("First Timeout");

    setTimeout(function() {
        console.log("Nested Timeout");
    }, 1000);

}, 1000);

