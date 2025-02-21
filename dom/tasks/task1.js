
const orderedList = document.querySelector('#ordered-list')
const unorderedList = document.querySelector("#unordered-list")

const orderedItems = document.querySelectorAll("#ordered-list li")
const unorderedItems = document.querySelectorAll("#unordered-list li")

orderedItems.forEach(item => {
    item.style.padding = "20px"
    item.style.margin = "5px"
    item.style.border = "1px solid black"
    item.style.backgroundColor = "aqua"; 
})

unorderedItems.forEach(item => {
    item.style.padding = "20px"
    item.style.margin = "5px"
    item.style.border = "1px solid black"
    item.style.backgroundColor ="pink"
    item.style.width = "200px"
    item.style.textAlign = "center"
    item.style.display = "inline flex"
})