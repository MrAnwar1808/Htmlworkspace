

const dataForm = document.getElementById('dataForm');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const priceInput = document.getElementById('price');
const brandInput = document.getElementById('brand');
const modelInput = document.getElementById('model');
const colorInput = document.getElementById('color');
const dimensionsInput = document.getElementById('dimensions');
const quantityInput = document.getElementById('quantity');
const dataTableBody = document.querySelector('#dataTable tbody');

let data = JSON.parse(localStorage.getItem('data')) || [];
let editIndex = null;

function renderTable() {
    dataTableBody.innerHTML = '';
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.price}</td>
            <td>${item.brand}</td>
            <td>${item.model}</td>
            <td>${item.color}</td>
            <td>${item.dimensions}</td>
            <td>${item.quantity}</td>
            <td>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;
        dataTableBody.appendChild(row);
    });
}

function addOrEditRow() {
    const name = nameInput.value.trim();
    const description = descriptionInput.value.trim();
    const price = parseFloat(priceInput.value.trim());
    const brand = brandInput.value.trim();
    const model = modelInput.value.trim();
    const color = colorInput.value.trim();
    const dimensions = dimensionsInput.value.trim();
    const quantity = parseInt(quantityInput.value.trim(), 10);

    if (!name || !description || isNaN(price) || !brand || !model || !color || !dimensions || isNaN(quantity)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    if (editIndex !== null) {
        data[editIndex] = { name, description, price, brand, model, color, dimensions, quantity };
        editIndex = null;
    } else {
        data.push({ name, description, price, brand, model, color, dimensions, quantity });
    }

    localStorage.setItem('data', JSON.stringify(data));
    renderTable();
    resetForm();
}

function resetForm() {
    nameInput.value = '';
    descriptionInput.value = '';
    priceInput.value = '';
    brandInput.value = '';
    modelInput.value = '';
    colorInput.value = '';
    dimensionsInput.value = '';
    quantityInput.value = '';
}

dataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addOrEditRow();
});

dataTableBody.addEventListener('click', (e) => {
    const index = e.target.dataset.index;

    if (e.target.classList.contains('edit-btn')) {
        const item = data[index];
        nameInput.value = item.name;
        descriptionInput.value = item.description;
        priceInput.value = item.price;
        brandInput.value = item.brand;
        modelInput.value = item.model;
        colorInput.value = item.color;
        dimensionsInput.value = item.dimensions;
        quantityInput.value = item.quantity;
        editIndex = index;
    } else if (e.target.classList.contains('delete-btn')) {
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        renderTable();
    }
});

renderTable();
