



const form = document.getElementById("forms")
form.addEventListener('submit', function(event){
event.preventDefault()

const email= document.getElementById("email").value
console.log(`Enter email: ${email}`)
const pwd = document.getElementById("pwd").value
console.log(`Enter password: ${pwd}`)
console.log("form submitted")


// form.addEventListener('click', function(b){
//     console.log("Button clicked")
// })

const div = document.createElement("div")

// const userdata = {
//     Email: document.getElementById("email"),
//     Password: document.getElementById("pwd")
// }
// console.log(userdata)
// document.body.appendChild(div)
// div.appendChild(userdata.Email)
// div.appendChild(userdata.Password)
div.innerHTML =
                `<p>User Email & Password you can able to see here</p>
                <p>Email: ${email}</p>
                <p>Password: ${pwd}</p>`

     
  document.body.appendChild(div)
  
//   const btn = document.createElement("button")
//   btn.textContent = "Submit" 
//   btn.addEventListener('click',function(){
//     console.log("click me")
//   })
//   div.appendChild(btn)

})
