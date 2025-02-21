
// let student = {
//     name: "anwar",
//     role: "software"
// }
// console.log(student.role)

// let array= [1,2,3,0,4,1,1,2,5]
// for(let i=0; i< array.length; i++){
//     console.log(array[i])
// }
// let target = 1
// function reapeated(arr , target){
//     let count=0
//     for(let i=0; i <arr.length; i++){
//         if(arr[i]===target){
//             count++
//     }
// }
// return count
// }
// console.log("No of times repeated:",reapeated(array , target))

// let str = "anwar"
//  let revesed = str.split("").reverse().join("")
//  console.log(revesed)


 const div = document.createElement("div")
 const p = document.createElement("p")
 p.textContent ="this is paragraph"

 document.body.appendChild(div)
 div.appendChild(p)

 const btn = document.createElement("button")
 btn.textContent = "click me"
 btn.addEventListener("click" ,function(){
    alert("button clicked")
 })
 document.body.appendChild(btn)