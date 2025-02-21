
//alert("hello boss")
// const header = document.getElementById("title")
// header.innerText="welcome to new topic Dom"
// header.style.color="pink"
// //header.style.fontFamily= 

// const header = document.getElementsByTagName("h1");
// header[0].innerText = "Welcome to Dom topic";
// header[0].style.color = "green";
// header[0].style.textAlign = "center"


const header = document.getElementById("title");
header.classList.add("highlight");    // Add a css class
//header.classList.remove("highlight");    // Remove a css class

//header.classList.toggle("highlight");   // Toggle a class
console.log(header);

const adiv = document.getElementsByClassName("container")
for(let i = 0; i< adiv.length; i++){
adiv[i].style.backgroundColor="green"}
console.log(adiv)


const tag = document.getElementsByTagName("p")
for(let i = 0; i< tag.length; i++){
tag[i].style.color="red";
}
console.log(tag)

// const tag1 = document.getElementsByTagName("tr")
// for(let m = 0; m< tag1.length; m++){
//     tag1[m].style.padding="10px"
// }
// console.log(tag1)



const button = document.getElementById("button");
button.innerText = "Click here";
//button.setAttribute("class", "btn-primary");     // Add a new class
//button.setAttribute("id", "newButton");      // Change the ID
button.addEventListener("click", () => {
    alert("Button clicked!");
});



const items = document.getElementById("items");
items.style.backgroundColor = "lightblue";
items.style.padding = "10px";



const ul = document.getElementById("items");
const newItem = document.createElement("li");       // Create a new <li> element
newItem.innerText = "New Item 1";

ul.innerHTML = ` <li>New Item 1</li>
                 <li>New Item 2</li>
                 <li>New Item 3</li>`;
ul.appendChild(newItem);     // Append the new item to the list



const firstItem = document.querySelector("#items li");
firstItem.style.color = "red";



// const li = document.querySelectorAll("#items li");
// li[0].remove();                  // Removeing "Item 2"


const div = document.createElement("div");
div.innerText = "welcome to new div tag";
div.style.backgroundColor = "yellow";
div.style.padding = "10px";
document.body.appendChild(div); // Add the div to the <body>

