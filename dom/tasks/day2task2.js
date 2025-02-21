
const books = [
{title: "Devara", author: "Koratala shiva"},
{title : "RRR", author:"ss"},
{title:"Dragon", author:"Prashanth Neel"}
];

const bookList= document.getElementById("unordered-list")
for(let i=0; i<books.length; i++){
    const listitem = document.createElement('li')
    listitem.textContent = `${books[i].title} by ${books[i].author}`

    listitem.style.color= i%2 ===0 ? "blue" : "green"
    listitem.style.fontSize = "18px"
    listitem.style.width = "300px"
    listitem.style.padding = "10px"
    listitem.style.margin = "5px"
    listitem.style.border = "1px solid red"
    listitem.style.backgroundColor = "pink"
    listitem.style.marginBottom = "10px"
    listitem.style.display = "inline flex"



    bookList.appendChild(listitem)
}
    