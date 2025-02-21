
const tasks = [
    { taskName: "Task 1", duration: 2 },
    { taskName: "Task 2", duration: 4 },
    { taskName: "Task 3", duration: 8 },

    // { taskName: "Task 1", duration: 8 },
    // { taskName: "Task 2", duration: 4 },
    // { taskName: "Task 3", duration: 2 }
];


let taskCompletionStatus = tasks.map(task => ({
    taskName: task.taskName,
    duration: task.duration,
    isCompleted: false
}));


function updateTaskStatus() {
    taskCompletionStatus.forEach((task, index) => {
        const taskElement = document.getElementById('task' + (index + 1)); 
        taskElement.textContent = task.isCompleted ? `${task.taskName}: Completed!` : `${task.taskName}: Pending...`;
    });
}


let intervalId = setInterval(() => {
    let allCompleted = true;

    taskCompletionStatus.forEach((task, index) => {
        if (!task.isCompleted) {
            // task.duration += 2; 
             task.duration -= 2; 

          
            if (task.duration <= 0) {
                task.isCompleted = true;
                console.log(`${task.taskName} is completed!`);
            }
        }

        if (!task.isCompleted) {
            allCompleted = false; 
        }
    });

    updateTaskStatus();

    
    if (allCompleted) {
        clearInterval(intervalId);
        console.log("All tasks are completed. Stopping progress tracking.");
    }
}, 2000);  


window.onload = () => {
    updateTaskStatus(); 
};
