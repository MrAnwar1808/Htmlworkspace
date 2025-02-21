

const loadUsersButton = document.getElementById('loadUsersButton');
const userList = document.getElementById('users');
const loadingMessage = document.getElementById('loadingMessage');
const errorMessage = document.getElementById('errorMessage');
const userListDiv = document.getElementById('userList');
const API_URL = 'https://jsonplaceholder.typicode.com/users';
 

function clearUserList() {
    userList.innerHTML = ''; 
    errorMessage.style.display = 'none';
    userListDiv.style.display = 'none';
    loadingMessage.style.display = 'block';
}
 

function displayUsers(users) {
    userList.innerHTML = ''; 
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
    });
    loadingMessage.style.display = 'none';
    userListDiv.style.display = 'block';
}
 

function handleError() {
    loadingMessage.style.display = 'none';
    errorMessage.style.display = 'block';
    userListDiv.style.display = 'none';
}
 

async function fetchUsersWithFetch() {
    try {
        clearUserList();
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        handleError();
    }
}
 

async function fetchUsersWithAxios() {
    try {
        clearUserList();
        const response = await axios.get(API_URL);
        displayUsers(response.data);
    } catch (error) {
        handleError();
    }
}
 

loadUsersButton.addEventListener('click', () => {
    
    // fetchUsersWithFetch();              // Using fetch API
    fetchUsersWithAxios();            // Using Axios
});