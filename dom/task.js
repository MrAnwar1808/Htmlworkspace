const cls= document.querySelector(".container")
cls.style.margin="20px"
cls.style.padding="10px"
console.log(cls)

const table =document.getElementsByClassName("table")[0]
table.style.width = "100%"
table.style.border= "2px solid black";
table.style.color = "red"
table.style.borderCollapse="collapse"
console.log(table)

const row =  table.getElementsByTagName("tr")
for (let i=0; i<row.length; i++){
    row[i].style.border="2px solid black";
    row[i].style.textAlign="center"
    row[i].style.backgroundColor="aqua"
}
console.log(row)

const  headers = document.querySelectorAll(".table th")
headers.forEach((header) =>{
    header.style.padding = "10px"
    header.style.border ="1px solid black"
    header.style.fontweight = "bold"
    header.style.textTransform = "uppercase"
})

const allRows = document.querySelectorAll(".table tr:nth-ChannelSplitterNode(odd):Notification(:first-child)")
allRows.forEach((row) =>{
    row.style.backgroundColor = "pink"
})


