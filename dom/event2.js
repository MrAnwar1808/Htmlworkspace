// Event handling for button click and form submit
const btn = document.getElementById("btn");
btn.addEventListener('click', function() {
    console.log('Button clicked');
});

btn.addEventListener('dblclick', function() {
    console.log('Button double-clicked');
});

// Form submit event to prevent default and log user input
const form = document.getElementById('forms');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
    
    const firstname = document.getElementById('firstname').value;
    console.log(`First Name: ${firstname}`);
    
    const lastname = document.getElementById('lastname').value;
    console.log(`Last Name: ${lastname}`);
    
    const email = document.getElementById('email').value;
    console.log(`Email: ${email}`);
    
    const number = document.getElementById('number').value;
    console.log(`Mobile Number: ${number}`);
});

// Dynamic paragraph and list item creation
const container = document.getElementById("container");
const Btn = document.getElementById("Btn");

Btn.addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph node.";
    container.appendChild(newElement);

    const newTextNode = document.createTextNode("Added this after the paragraph");
    const newParagraph = document.createElement("p");
    newParagraph.appendChild(newTextNode);
    container.appendChild(newParagraph);

    console.log("New element node added:", newElement);
    console.log("New text node added:", newTextNode);
});

// Mouse events on header
const header = document.getElementById("header");
header.addEventListener('mouseover', function() {
    console.log("Mouse moved over header");
});

header.addEventListener('mouseleave', function() {
    console.log('Mouse left the header');
});

// Color picker to change the background color
const bgcSelect = document.getElementById("bgc");
bgcSelect.addEventListener('change', function() {
    const selectedColor = bgcSelect.value;
    document.body.style.backgroundColor = selectedColor;
});

// Event listener for input focus and blur
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        console.log(`${input.id} field is focused`);
        input.style.backgroundColor = "pink";
    });

    input.addEventListener('blur', function() {
        console.log(`${input.id} field is not focused`);
        input.style.backgroundColor = 'gray';
    });
});

// Mouse events on the ordered list
const orderedList = document.getElementById('ordered-list');
orderedList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(`You clicked on: ${event.target.textContent}`);
    }
});
