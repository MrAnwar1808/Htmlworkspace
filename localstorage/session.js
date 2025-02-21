
document.getElementById('saveSessionButton').addEventListener('click', function() {
    const sessionID = document.getElementById('sessionInput').value;
    if (sessionID) {
        sessionStorage.setItem('sessionID', sessionID);
        alert('Session ID saved to sessionStorage!');
    } else {
        alert('Please enter a session ID!');
    }
});


document.getElementById('loadSessionButton').addEventListener('click', function() {
    const sessionID = sessionStorage.getItem('sessionID');
    if (sessionID) {
        document.getElementById('sessionOutput').textContent = 'Saved Session ID: ' + sessionID;
    } else {
        document.getElementById('sessionOutput').textContent = 'No session ID found in sessionStorage.';
    }
});


document.getElementById('clearSessionButton').addEventListener('click', function() {
    sessionStorage.removeItem('sessionID');
    alert('Session ID cleared from sessionStorage!');
});
