
function firstTask(callback) {
    setTimeout(() => {
        console.log('First task completed.');
        callback();
    }, 2000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log('Second task completed.');
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log('Third task completed.');
        callback();
    }, 1000);
}

firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log('All tasks completed.');
        });
    });
});


//promise

// function firstTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('First task done');
//             resolve(); // Resolving the promise after the task is done
//         }, 1000);
//     });
// }

// function secondTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Second task done');
//             resolve(); // Resolving the promise after the task is done
//         }, 1000);
//     });
// }

// function thirdTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Third task done');
//             resolve(); // Resolving the promise after the task is done
//         }, 1000);
//     });
// }

// firstTask()
//     .then(() => secondTask())
//     .then(() => thirdTask())
//     .then(() => {
//         console.log('All tasks completed');
//     })
//     .catch((error) => {
//         console.error('Error occurred:', error);
//     });
