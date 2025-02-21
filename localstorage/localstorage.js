// Save name to localStorage
document.getElementById('saveNameButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        localStorage.setItem('name', name);
        alert('Name saved to localStorage!');
    } else {
        alert('Please enter a name!');
    }
});

// Load name from localStorage
document.getElementById('loadNameButton').addEventListener('click', function() {
    const name = localStorage.getItem('name');
    if (name) {
        document.getElementById('nameOutput').textContent = 'Saved Name: ' + name;
    } else {
        document.getElementById('nameOutput').textContent = 'No name found in localStorage.';
    }
});

// Clear name from localStorage
document.getElementById('clearNameButton').addEventListener('click', function() {
    localStorage.removeItem('name');
    alert('Name cleared from localStorage!');
});
