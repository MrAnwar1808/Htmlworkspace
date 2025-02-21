


    //const screen = document.getElementsByClassName("calculator-screen")
    //const keys = document.getElementsByClassName("key")
    //const operators = document.getElementsByClassName("operator")
    //const decimal = document.getElementsByClassName("decimal")
    //const clear = document.getElementsByClassName("clear")
    //const result = document.getElementsByClassName("result")

    const screen = document.getElementById("screen")
    const keys = document.querySelectorAll(".key")
    const operators = document.querySelectorAll(".operator")
    const decimal = document.querySelector(".decimal")
    const clear = document.getElementById("clear")
    const result = document.querySelector(".result")

let current_input = " "
//let previous_input = " "

keys.forEach(function(key){
    key.addEventListener('click', function(){
        current_input += key.textContent
        screen.value = current_input

    })

})

operators.forEach(function(opt){
    opt.addEventListener('click', function(){

        //current_input += "previous_input" + opt.textContent + "current_input"
        current_input += "" + opt.textContent + ""
        screen.value = current_input
    })
})

decimal.addEventListener('click', function(){
    let lastNumber = current_input.split(/[+\-*/]/).pop();
    if (!lastNumber.includes(".")) {
        current_input += "."
        screen.value = current_input
    }
     //current_input += "previous_input" + "." + "current_input"
    // current_input = "."
    // screen.value = current_input
})

clear.addEventListener('click', function(){

    current_input = ""
    screen.value = ""
})

result.addEventListener('click', function(){

    
    screen.value = eval(current_input)
})


