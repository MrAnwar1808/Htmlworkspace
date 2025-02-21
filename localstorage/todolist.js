
document.getElementById('btn').addEventListener('click', function(){
    let input = document.getElementById('input').value;

    if (input === '') {
        alert('Please enter a task!');
        return;
    }
        
    

    let li = document.createElement('li');
    let btn1 = document.createElement('button');
    //let btn2 = document.createElement('button');
    let btn3 = document.createElement('button');
    let checkbox = document.createElement('input'); 
    
    checkbox.type = 'checkbox';

    
    btn1.innerText = "Edit";
    //btn2.innerText = "Complete";
    btn3.innerText = "Delete";
    

    let taskDescription = document.createElement('span');
    taskDescription.innerText = input;

    let ul = document.querySelector('ul');

    li.appendChild(checkbox);
    li.appendChild(taskDescription);
    li.appendChild(btn1);
   // li.appendChild(btn2);
    li.appendChild(btn3);
    ul.appendChild(li);

    
    btn1.style.border = 'none';
    btn1.style.marginLeft = "3%";
    btn1.style.borderRadius = "10px";
    btn1.style.backgroundColor = "#f44336";
    btn1.style.padding = "10px";

    // btn2.style.border = 'none';
    // btn2.style.marginLeft = "3%";
    // btn2.style.borderRadius = "10px";
    // btn2.style.backgroundColor = "#f44336";
    // btn2.style.padding = "10px";

    btn3.style.border = 'none';
    btn3.style.marginLeft = "3%";
    btn3.style.borderRadius = "10px";
    btn3.style.backgroundColor = "#f44336";
    btn3.style.padding = "10px";



   
    btn1.addEventListener('click', function() {

        // if (li.contentEditable === "true") {
           
        //     taskDescription.textContent = taskDescription.textContent.trim();
        //     input.style.backgroundColor= "green"
        //     li.contentEditable = false; 
        // } else {
         
        //     li.contentEditable = true;
        //     taskDescription.focus();
        // }


        if (btn1.innerText === "Save") {
            taskDescription.textContent = taskDescription.textContent.trim(); 
            btn1.innerText = "Edit";
            li.contentEditable = false;
            saveTasksToLocalStorage();
        } else {
            btn1.innerText = "Save";
            li.contentEditable = true;
            taskDescription.focus(); 
        }


     });


   
    
  
    // btn2.addEventListener('click', function() {

    //     if (btn2.innerText === "Complete") {
            
    //         li.style.backgroundColor = "#1969b4"; 
    //         li.style.color = "white"; 
    //         btn2.innerText = "Completed"; 
    //         li.contentEditable = false
    //     } else {
            
    //         li.style.backgroundColor = ""; 
    //         li.style.color = "black"; 
    //         btn2.innerText = "Complete"; 
    //         li.contentEditable = true;
    //     }
    // });

  
    btn3.addEventListener('click', function() {
        li.remove();
        saveTasksToLocalStorage()
    });

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.style.backgroundColor = "#18aa8b"; 
            //btn2.innerText = "Completed"; 
            li.contentEditable = false;
            saveTasksToLocalStorage();

        } else {
            li.style.backgroundColor = ""; 
            //btn2.innerText = "Complete"; 
            li.contentEditable = true
        }
    });

    
    document.getElementById('input').value = "";
    saveTasksToLocalStorage();

    
});


document.getElementById('clear-btn').addEventListener('click', function() {
    let ul = document.querySelector('ul');
    ul.innerHTML = ''; 
});


btn.addEventListener('click', function  saveTasksToLocalStorage(){
    let input = document.getElementById('input')

    if(input){
        localStorage.setItem('name',taskDescription.innerText)
        alert('saved to localStorage')
    }else{
        alert('please enter a value')
    }
})


// document.getElementById('saveNameButton').addEventListener('click', function() {
//     const name = document.getElementById('nameInput').value;
//     if (name) {
//         localStorage.setItem('name', name);
//         alert('Name saved to localStorage!');
//     } else {
//         alert('Please enter a name!');
//     }
// });

// // Load name from localStorage
// document.getElementById('loadNameButton').addEventListener('click', function() {
//     const name = localStorage.getItem('name');
//     if (name) {
//         document.getElementById('nameOutput').textContent = 'Saved Name: ' + name;
//     } else {
//         document.getElementById('nameOutput').textContent = 'No name found in localStorage.';
//     }
// });



















































