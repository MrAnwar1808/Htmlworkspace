
document.getElementById("outer").addEventListener("click", function(event){
    event.stopPropagation()
   
    console.log("outer clicked")
})

document.getElementById("middle").addEventListener("click", function(event){
    console.log("middle clicked")
    event.stopPropagation()
})

document.getElementById("inner").addEventListener("click", function(){
    console.log("inner clicked")
    event.stopPropagation()

})

