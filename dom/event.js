
const header = document.getElementById("header")
header.addEventListener('mouseover',function(){
    console.log("mouse moved over header")
})
header.addEventListener('mouseleave', function(){
    console.log('mouse left the header')
})
header.addEventListener('mousedown', function(){
    console.log('mouse moved down')
})
header.addEventListener('mouseenter', function(){
    console.log('mouse entered the header')
})
header.addEventListener('mouseout', function(){
    console.log('mouse is out ')
})
header.addEventListener('mouseup', function(){
 console.log('mouse moved up')
})
header.addEventListener('mousemove', function(){
    console.log('mouse moved ')
})


const typer = document.getElementById('texttyper')
typer.addEventListener('keypress', function(event){
    console.log(`key pressed: ${event.key}`)
})
typer.addEventListener('keydown', function(event){
    console.log(`Key down: ${event.key}`)
})
typer.addEventListener('keyup', function(event){
    console.log(`key up: ${event.key}`)
})

// function Click() {
//     console.log('Button clicked');
// }
// function DoubleClick() {
//     console.log('button failed');
// }

const btn = document.getElementById("btn")
btn.addEventListener('click' ,function(){
    console.log('button clicked' )
})
btn.addEventListener('dblclick', function(){
    console.log('button failed' )
})


const form = document.getElementById('forms')
form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log('form submitted')
    const firstname = document.getElementById('firstname').value;
    console.log(`Enter First Name: ${firstname}`);
    const lastname = document.getElementById('lastname').value;
    console.log(`Enter Last Name: ${lastname}`);
    const email = document.getElementById('email').value;
    console.log(`Enter e-mail: ${email}`);
    const number = document.getElementById('number').value;
    console.log(`Enter your number: ${number}`);

    
})


const inputs =document.querySelectorAll('input')
inputs.forEach (input => {

    input.addEventListener('focus', function(){
    console.log(`${inputs.id} field is focused`)
    input.style.backgroundColor="pink"
    })

    input.addEventListener('blur', function(){
        console.log(`${input.id} field is not focused`)
        input.style.backgroundColor='gray'
    })
   
})

const orderedList = document.getElementById('ordered-list')
orderedList.addEventListener('click', function(event){
if(event.target.tagName === 'LI'){
    console.log(`you have clicked to ${event.target.textContent}`)
}
})


const div = document.createElement("div")
div.className = "old-div"
console.log("div.outerHTML")

const h1 = document.createElement("h1");
h1.textContent = "THis is Class-list";

div.appendChild(h1);

document.body.appendChild(div);

div.classList.remove("old-div")
div.classList.add("new-div")
div.classList.replace("new-div","completed")
console.log("div.outerHTML")








