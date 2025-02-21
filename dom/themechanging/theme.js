
const div = document.createElement("div")
div.innerHTML = `<p>Theme changing task </p>`
div.style.fontSize = "24px"
div.style.padding = "20px"
div.style.margin = "20px";
div.style.backgroundColor = "yellow";
div.style.textAlign = "center";



document.body.appendChild(div)

const btn = document.createElement("button")
btn.textContent = "Click here to change body theme"
btn.style.padding= "10px"
btn.style.margin = "10px"
// btn.style.color = "red"
btn.style.fontSize = "18px"

div.appendChild(btn)

let light_theme = true

btn.addEventListener("click", function(){


    if(light_theme){
        document.body.style.backgroundColor = "white"
        document.body.style.color= "red"
        btn.style.backgroundColor= "gray"
        light_theme = false

    }else{
        document.body.style.backgroundColor = "black"
        document.body.style.color= "blue"
        btn.style.backgroundColor= "aqua"
        light_theme = true

    }
        // document.body.classList.toggle("dark-theme")
})