

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const clearAllBtn = document.getElementById('clear-all-btn');


document.addEventListener('DOMContentLoaded', loadTasks);


addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
      
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        li.appendChild(completeBtn);
        taskList.appendChild(li);

  
        saveTasksToLocalStorage();

       
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});


taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Edit') {
        const taskItem = e.target.parentElement;
        const span = taskItem.querySelector('span');
        const newText = prompt('Edit task:', span.textContent);
        
        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim();
            saveTasksToLocalStorage(); 
        }
    }
});


taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Delete') {
        e.target.parentElement.remove();
        saveTasksToLocalStorage(); 
    }
});


taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Complete') {
        const taskItem = e.target.parentElement;
        taskItem.querySelector('span').classList.toggle('completed');
        saveTasksToLocalStorage();
    }
});


clearAllBtn.addEventListener('click', function() {
    taskList.innerHTML = ''; 
    localStorage.removeItem('tasks'); 
});


function saveTasksToLocalStorage() {
    const tasks = [];
    const taskItems = taskList.querySelectorAll('li');
    
    taskItems.forEach(function(item) {
        const taskText = item.querySelector('span').textContent;
        const isCompleted = item.querySelector('span').classList.contains('completed');
        tasks.push({ text: taskText, completed: isCompleted });
    });

  
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);

        tasks.forEach(function(task) {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = task.text;
            if (task.completed) {
                span.classList.add('completed');
            }
            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';

            li.appendChild(span);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
            li.appendChild(completeBtn);
            taskList.appendChild(li);
        });
    }
}
