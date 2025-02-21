
const container = document.getElementById("container")


const Btn = document.getElementById("Btn")
Btn.addEventListener("click", function() {
   
    const newElement = document.createElement("p")
    newElement.textContent = "This is a new paragraph node."

    container.appendChild(newElement);

    const newTextNode = document.createTextNode("Added this after the paragraph");

    const newParagraph = document.createElement("p");
    newParagraph.appendChild(newTextNode);

    container.appendChild(newParagraph);

    console.log("New element node added:", newElement);
    console.log("New text node added:", newTextNode);
});


function Click() {
    console.log('Button clicked');
}
function DoubleClick() {
    console.log('button failed');
}


const bgcSelect = document.getElementById("bgc");

bgcSelect.addEventListener('change', function() {
    const selectedColor = bgcSelect.value; 
    document.body.style.backgroundColor = selectedColor; 
});





