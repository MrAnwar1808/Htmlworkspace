


let entries = [];
const entryForm = document.getElementById('entry-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const entriesList = document.getElementById('entries-list');
const totalBalanceElement = document.getElementById('total-balance');
const categoryFilter = document.getElementById('category-filter');
const sortAscendingBtn = document.getElementById('sort-ascending');
const sortDescendingBtn = document.getElementById('sort-descending');


entryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;

    if (description && amount && !isNaN(amount)) {
        const entry = {
            id: Date.now(),
            description,
            amount,
            category,
            date: new Date(),
        };

        entries.push(entry);
        descriptionInput.value = '';
        amountInput.value = '';
        updateUI();
    }
});


function deleteEntry(id) {
    entries = entries.filter(entry => entry.id !== id);
    updateUI();
}


function updateUI() {
    renderEntries();
    updateBalance();
}


function renderEntries() {
    const filteredEntries = getFilteredEntries();
    entriesList.innerHTML = '';

    filteredEntries.forEach(entry => {
        const entryItem = document.createElement('li');
        entryItem.classList.add('entry-item');

        const descriptionElement = document.createElement('span');
        descriptionElement.classList.add('entry-description');
        descriptionElement.textContent = entry.description;

        const amountElement = document.createElement('span');
        amountElement.classList.add('entry-amount');
        amountElement.classList.add(entry.category === 'expense' ? 'entry-expense' : 'entry-income');
        amountElement.textContent = `$${entry.amount.toFixed(2)}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteEntry(entry.id));

        entryItem.appendChild(descriptionElement);
        entryItem.appendChild(amountElement);
        entryItem.appendChild(deleteButton);
        entriesList.appendChild(entryItem);
    });
}


function getFilteredEntries() {
    const filterCategory = categoryFilter.value;
    let filteredEntries = [...entries];

    if (filterCategory !== 'all') {
        filteredEntries = filteredEntries.filter(entry => entry.category === filterCategory);
    }

    return filteredEntries;
}


function updateBalance() {
    const totalIncome = entries.filter(entry => entry.category === 'income').reduce((sum, entry) => sum + entry.amount, 0);
    const totalExpense = entries.filter(entry => entry.category === 'expense').reduce((sum, entry) => sum + entry.amount, 0);
    const totalBalance = totalIncome - totalExpense;

    totalBalanceElement.textContent = `$${totalBalance.toFixed(2)}`;
}


sortAscendingBtn.addEventListener('click', () => {
    entries.sort((a, b) => a.date - b.date);
    updateUI();
});


sortDescendingBtn.addEventListener('click', () => {
    entries.sort((a, b) => b.date - a.date);
    updateUI();
});


updateUI();
