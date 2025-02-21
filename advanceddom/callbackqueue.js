
console.log("Start");
 
// Synchronous code
console.log("Step 1: Sync task");
 
// setTimeout (Task Queue)
setTimeout(() => {
    console.log("Step 2: setTimeout task");
}, 2000);
 
// setInterval (Task Queue)
let intervalId = setInterval(() => {
    console.log("Step 3: setInterval task (every 1 second)");
}, 1000);
 
// Promise (Microtask Queue)
Promise.resolve().then(() => {
    console.log("Step 4: Promise task");
});
 
// Another synchronous code
console.log("Step 5: Another sync task");
 
// Stop the interval after 3 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Step 6: Interval cleared");
}, 3000);
 
console.log("End");