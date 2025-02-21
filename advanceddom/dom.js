

const fetchUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Fetch data 
const asyncAwaitUrl = 'https://jsonplaceholder.typicode.com/users/1'; // Async/Await data
const axiosUrl = 'https://jsonplaceholder.typicode.com/comments/1'; // Axios data
const promiseUrl = 'https://jsonplaceholder.typicode.com/albums/1'; // Promise data

// Fetch 
document.getElementById('fetchBtn').addEventListener('click', function() {
    fetch(fetchUrl)
        .then(response => response.json()) 
        .then(data => {
            document.getElementById('output').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            document.getElementById('output').innerHTML = `Error: ${error}`;
        });
});

// Async/Await 
document.getElementById('asyncAwaitBtn').addEventListener('click', async function() {
    try {
        let response = await fetch(asyncAwaitUrl);  
        let data = await response.json();    
        document.getElementById('output').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        document.getElementById('output').innerHTML = `Error: ${error}`;
    }
});

// Axios
document.getElementById('axiosBtn').addEventListener('click', function() {
    axios.get(axiosUrl)
        .then(response => {
            document.getElementById('output').innerHTML = `<pre>${JSON.stringify(response.data, null, 2)}</pre>`;
        })
        .catch(error => {
            document.getElementById('output').innerHTML = `Error: ${error}`;
        });
});

// Promise 
document.getElementById('promiseBtn').addEventListener('click', function() {
    new Promise(function(resolve, reject) {
        fetch(promiseUrl)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
    })
    .then(data => {
        document.getElementById('output').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
        document.getElementById('output').innerHTML = `Error: ${error}`;
    });
});