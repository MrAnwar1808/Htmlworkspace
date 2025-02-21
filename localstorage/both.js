
// LocalStorage: Save, load, and clear username
document.getElementById('saveUsernameButton').addEventListener('click', function() {
    const username = document.getElementById('usernameInput').value;
    if (username) {
        localStorage.setItem('username', username);
        alert('Username saved to localStorage!');
    } else {
        alert('Please enter a username!');
    }
});

document.getElementById('loadUsernameButton').addEventListener('click', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('usernameOutput').textContent = 'Saved Username: ' + username;
    } else {
        document.getElementById('usernameOutput').textContent = 'No username found in localStorage.';
    }
});

document.getElementById('clearUsernameButton').addEventListener('click', function() {
    localStorage.removeItem('username');
    alert('Username cleared from localStorage!');
});

// SessionStorage: Save, load, and clear session ID
document.getElementById('saveSessionIDButton').addEventListener('click', function() {
    const sessionID = document.getElementById('sessionIDInput').value;
    if (sessionID) {
        sessionStorage.setItem('sessionID', sessionID);
        alert('Session ID saved to sessionStorage!');
    } else {
        alert('Please enter a session ID!');
    }
});

document.getElementById('loadSessionIDButton').addEventListener('click', function() {
    const sessionID = sessionStorage.getItem('sessionID');
    if (sessionID) {
        document.getElementById('sessionIDOutput').textContent = 'Saved Session ID: ' + sessionID;
    } else {
        document.getElementById('sessionIDOutput').textContent = 'No session ID found in sessionStorage.';
    }
});

document.getElementById('clearSessionIDButton').addEventListener('click', function() {
    sessionStorage.removeItem('sessionID');
    alert('Session ID cleared from sessionStorage!');
});
