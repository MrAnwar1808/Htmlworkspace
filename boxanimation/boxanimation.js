
const btn = document.getElementById("btn")
const box = document.getElementById("animi-box")

let interval
let moveInterval
let boxPosition = 0
const screenWidth = window.innerWidth
const boxWidth = box.offsetWidth


function animation(){

    interval = setInterval(() => {
        console.log("Event loop is active");
    }, 2000);

    moveInterval = setInterval(() => {
        if(boxPosition < screenWidth - boxWidth){
            boxPosition += 1; 
            box.style.left = boxPosition + "px";
        }else{
            clearInterval(moveInterval)
        }
    },50)

  
}

btn.addEventListener("click", function(){
    // btn.disabled = true;
    animation();
});

