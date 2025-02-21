
// Own Dummy Data 
const fetchData = { id: 1, title: "Fetch API Example", body: "This is a dummy post fetched with Fetch API." };
const asyncAwaitData = { id: 1, name: "John Doe", username: "johndoe", email: "johndoe@example.com" };
const axiosData = { id: 1, name: "Comment 1", body: "This is a dummy comment fetched with Axios." };
const promiseData = { id: 1, title: "Album Title", userId: 1, body: "This is a dummy album fetched with Promise." };

// Fetch API 
document.getElementById('fetchBtn').addEventListener('click', function() {
    setTimeout(() => {
        document.getElementById('output').innerHTML = JSON.stringify(fetchData, null, 2); 
    }, 1000);
});

// Async/Await 
document.getElementById('asyncAwaitBtn').addEventListener('click', async function() {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        document.getElementById('output').innerHTML = JSON.stringify(asyncAwaitData, null, 2); 
    } catch (error) {
        document.getElementById('output').innerHTML = `Error: ${error}`;
    }
});

// Axios 
document.getElementById('axiosBtn').addEventListener('click', function() {
    axios.get('https://jsonplaceholder.typicode.com/posts/1') 
        .then(response => {
            document.getElementById('output').innerHTML = JSON.stringify(axiosData, null, 2); 
        })
        .catch(error => {
            document.getElementById('output').innerHTML = `Error: ${error}`;
        });
});

// Promise 
document.getElementById('promiseBtn').addEventListener('click', function() {
    new Promise(function(resolve, reject) {
        setTimeout(() => resolve(promiseData), 1000); 
    })
    .then(data => {
        document.getElementById('output').innerHTML = JSON.stringify(data, null, 2); 
    })
    .catch(error => {
        document.getElementById('output').innerHTML = `Error: ${error}`;
    });
});
