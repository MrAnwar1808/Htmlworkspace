
const table = document.getElementById('data-table')
//table.style.borderCollapse = 'collapse'
table.style.width = '80%'
table.style.margin = 'auto'
//table.style.padding = '20px'

const tablehead = document.getElementsByTagName('th')
for(let th of tablehead){
th.style.padding = '20px'
}

const cells = table.getElementsByTagName('td')
for(let cell of cells){
    cell.style.border = '1px solid black'
    cell.style.padding = '20px'
    cell.style.textAlign = 'center'
}

const headerRow = document.querySelector('#data-table tr')
headerRow.style.backgroundColor = "green"
headerRow.style.color = "black"
headerRow.style.textAlign = "center"
//headerRow.style.padding = "20px"

const rows = table.getElementsByTagName("tr")
for(let i=1;i <rows.length; i++){
    if(i%2 == 0){
        rows[i].style.backgroundColor = "pink"
        rows[i].style.color = "black"
    }else{
        rows[i].style.backgroundColor ="red"
        rows[i].style.color ="white"
    }
}

const allRows = document.querySelectorAll("#data-table tr")
allRows.forEach(row =>{
    row.style.border = "1px solid black"
})