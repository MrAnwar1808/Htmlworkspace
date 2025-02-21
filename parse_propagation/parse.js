
let a = '123hyd';
let b = 'log88'
let c = '12.34hx'
let d = '10.80log'

console.log("using parse int for (a):",parseInt(a))
console.log("using parse int for (b):",parseInt(b))
console.log("using parse int for (c):",parseInt(c))
console.log("using parse int for (d):",parseInt(d))

console.log("using parse float for (a):", parseFloat(a))
console.log("using parse float for (b):", parseFloat(b))
console.log("using parse float for (c):", parseFloat(c))
console.log("using parse float for (d):", parseFloat(d))

console.log("using number() for (a):", Number(a))
console.log("using number() for (b):", Number(b))
console.log("using number() for (c):", Number(c))
console.log("using number() for (d):", Number(d))
console.log("using number() for :", Number(12.334))
console.log("using number() for :", Number(99))


console.log("number to string:", (33).toString())
console.log("number to string:", (43.88).toString())

console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean('hyd'))
console.log(Boolean(12.33))
console.log(Boolean(33.44))
console.log(Boolean())


console.log(String('123'))
console.log(String('log33'))
console.log(String('true'))

console.log("isNaN means input is not a number isNaN('hyd'):", isNaN('hyd')) //checks if a value is NaN(Not a Number)   
console.log("isNaN means input is not a number isNaN('123'):", isNaN('123'))
console.log("isNaN means input is not a number isNaN('log88'):", isNaN('log88'))
console.log("isNaN means input is not a number isNaN('43.54'):", isNaN('43.54'))

console.log("print the fixed places: ", 12.2345566.toFixed(1))//print the values after decimal
console.log("print the fixed places: ", 12.2345566.toFixed(2))
console.log("print the fixed places: ", 12.2345566.toFixed(3))
console.log("print the fixed places: ", 12.2345566.toFixed(4))


// //Event Delegation
// const div = document.createElement('div')
// document.body.appendChild(div)

// const ul = document.createElement('ul')
// div.appendChild(ul)
// ul.style.backgroundColor = 'brown';
// ul.style.padding = '10px';
// ul.style.margin = '10px';
// ul.style.marginTop = "20px"
// ul.style.borderRadius = "10px"

// let items = ["item-1", "item-2" , "item-3"]
// items.forEach(itemtext => {

//     const li = document.createElement('li')
//     li.textContent = itemtext
//     ul.appendChild(li)

//     li.style.padding = '10px';
//     li.style.margin = '5px';
//     li.style.border = '1px solid black';
//     li.style.backgroundColor = 'orange';  
//     li.style.cursor = 'pointer'
    
// })

// ul.addEventListener('click', function(event){
//     if(event.target && event.target.nodeName === 'LI')
// {
//    console.log(`you have clicked on : ${event.target.textContent}`)
// }
// })



//Event Propagation (Bubbling) 

// const outer = document.querySelector('.outer')
// const middle = document.querySelector('.middle')
// const inner = document.querySelector('.inner')

// outer.addEventListener('click', function(){
//     console.log("you have clicked on margin where bubbling is active")
// })

// middle.addEventListener('click', function(){
//     console.log("you have clicked on border where bubbling is active")
// })

// inner.addEventListener('click', function(){
//     console.log("you have clicked on padding where bubbling is active")
// })

// Event Propagation (Capturing)

// const outer = document.querySelector('.outer')
// const middle = document.querySelector('.middle')
// const inner = document.querySelector('.inner')

// outer.addEventListener('click', function(){
//     console.log("you have clicked on margin") 
// },true)                                                   //true means capturing phase

// middle.addEventListener('click', function(){
//     console.log("you have clicked on border")
// },true)

// inner.addEventListener('click', function(){
//     console.log("you have clicked on padding")// if i click on inner the flow wil be outer to middle to inner
// },true)



// const outer = document.querySelector('.outer')
// const middle = document.querySelector('.middle')
// const inner = document.querySelector('.inner')

// outer.addEventListener('click', function(){
//     console.log("you have clicked on margin")  
// },false)                                                   //false means bubbling phase this by default 

// middle.addEventListener('click', function(){
//     console.log("you have clicked on border")
//     //event.stopPropagation()
// },false)

// inner.addEventListener('click', function(event){
//     console.log("you have clicked on padding") 
//     event.stopPropagation()                    //if i click inner the flow wil be inner to border to outer
// },false)




// const form = document.getElementsByClassName('form')[0]
// form.addEventListener('submit', function(event){
//    event.preventDefault()

//    const username = document.getElementById('username').value
//    const pwd = document.getElementById('password').value

//    console.log(`Enter UserName: ${username}`)
//    console.log(`Enter password: ${pwd}`)


// })