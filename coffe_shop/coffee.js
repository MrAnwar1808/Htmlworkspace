

// // Cart functionality
// let cart = [];

// function addToCart(name, price) {
//     cart.push({ name, price });
//     updateCart();
// }

// function updateCart() {
//     const cartItems = document.getElementById("cart-items");
//     const cartTotal = document.getElementById("cart-total");

//     const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
//     cartItems.textContent = `Items: ${cart.length}`;
//     cartTotal.textContent = `Total: $${totalPrice}`;
// }

// // Form validation
// const form = document.getElementById("contact-form");
// const errorMessage = document.getElementById("form-error");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("message").value;

//     if (!name || !email || !message) {
//         errorMessage.style.display = "block";
//     } else {
//         errorMessage.style.display = "none";
//         // Here you can handle form submission
//         alert("Form submitted successfully!");
//         form.reset();
//     }
// });







let cart = [];


function addToCart(name, price) {
  
    const existingItem = cart.find(item => item.name === name);

   
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCart();
}


function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartContent = document.getElementById("cart-content");

    
    const { totalItems, totalPrice } = cart.reduce((totals, item) => {
        totals.totalItems += item.quantity;
        totals.totalPrice += item.price * item.quantity;
        return totals;
    }, { totalItems: 0, totalPrice: 0 });

    
    cartItems.textContent = `Items: ${totalItems}`;
    cartTotal.textContent = `Total: ₹${totalPrice.toFixed(2)}`;

    
    cartContent.innerHTML = cart.map(item => `
        <div class="cart-item">
            <p>Item Name : ${item.name} <br>
               Quantity  : ${item.quantity} <br>
               price     :₹${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    `).join(''); 
}


document.querySelectorAll(".btn").forEach((button) => {

    button.addEventListener("click", function() {
        
        const item = button.closest(".item");
        const name = item.querySelector("h1").textContent; 
        const price = parseFloat(item.querySelector("p").textContent.replace('₹', '')); 

        addToCart(name, price); 
    });
});


const checkoutButton = document.querySelector(".checkout-btn");
checkoutButton.addEventListener("click", function() {
    
    alert("Your order is placed successfully. Please visit again!");
    
});






const form = document.querySelector("form");
const error = document.getElementById("error");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        error.style.display = "block"; 
    } else {
        error.style.display = "none"; 
        alert("Thanks for contacting Leo Coffee"); 
        form.reset();
    }
});
