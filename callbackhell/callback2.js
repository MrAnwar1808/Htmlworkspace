
function firstTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('First task completed.');
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Second task completed.');
            resolve();
        }, 1000);
    });
}

function thirdTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Third task completed.');
            resolve();
        }, 1000);
    });
}

firstTask()
    .then(() => secondTask())
    .then(() => thirdTask())
    .then(() => {
        console.log('All tasks completed.');
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
