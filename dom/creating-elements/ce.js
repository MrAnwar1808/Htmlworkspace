
const div = document.createElement("div")
document.body.appendChild(div)
div.style.margin= "10px"
div.style.padding = "10px"
div.style.textAlign = "center"

document.body.style.backgroundColor = "pink"
const p = document.createElement("p")
p.textContent = "Creating new elements"
div.appendChild(p)
p.style.fontSize = "24px"
p.style.color = "blue"

const btn = document.createElement("button")
btn.textContent = "Display Button"
div.appendChild(btn)
btn.style.padding= "10px"
btn.style.margin= "10px"
btn.style.backgroundColor = "yellow"

btn.addEventListener('click', function(){
    p.textContent = "Created New <div> & <p> elements"
    p.style.backgroundColor = "green"
    p.style.color = "black"

})

const input = document.createElement("input")
input.placeholder = "Enter your opinion"
document.body.appendChild(input)
input.addEventListener('focus', function(){
    // console.log("Input has been focused")
    input.style.backgroundColor = "orange"

})


const div1 = document.createElement("div")
document.body.appendChild(div1)
div1.style.fontSize = "18px"

div1.textContent = "Key Pressed Now: ";
input.addEventListener('keypress', function(event){

    div1.textContent = "Key Pressed Now: "+ event.key
     console.log(`Key Pressed Now:${event.key}`)
  
})

const div2 = document.createElement("div")
const ul = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")
li1.textContent = "Hyderbad"
li2.textContent = "Bangalore"
li3.textContent = "Chennai"

li1.style.padding = "10px";
li2.style.padding = "10px";
li3.style.padding = "10px";
li1.style.backgroundColor = "blue";
li2.style.backgroundColor = "white";
li3.style.backgroundColor = "lightgreen";
li1.style.marginBottom = "5px";
li2.style.marginBottom = "5px";
li3.style.marginBottom = "5px";
li1.style.borderRadius = "5px";
li2.style.borderRadius = "5px";
li3.style.borderRadius = "5px";

document.body.appendChild(div2)
div2.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)



ul.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        if(event.target.textContent === "clicked!"){

            if(event.target === li1){
                event.target.textContent = "Hyderabad"
            }
            else if(event.target === li2){
                event.target.textContent = "Bangalore"
            }
            else if(event.target === li3){
                event.target.textContent = "Chennai"
            }    
        }else{
            event.target.textContent = "clicked!"
        }

    }
    
})






