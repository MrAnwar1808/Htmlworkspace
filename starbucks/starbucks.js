

let currentIndex = 0;

function moveSlide(direction) {
    const cardContainer = document.querySelector('.card-container');
    const totalCards = document.querySelectorAll('.card').length;

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalCards - 1;
    if (currentIndex >= totalCards) currentIndex = 0;

    cardContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}



let cart = [];


function addToCart(productName, productPrice) {
    
    let productInCart = cart.find(item => item.name === productName);

    if (productInCart) {
        
        productInCart.quantity++;
    } else {
  
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }


    updateCart();
}


function updateCart() {
    let cartItemsList = document.getElementById("cart-items-list");
    let totalPrice = 0;
    let totalQuantity = 0;

    
    cartItemsList.innerHTML = '';

   
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        totalQuantity += item.quantity;

        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItemsList.appendChild(cartItem);
    });

    
    document.getElementById("total-price").innerText = `Total: ₹${totalPrice.toFixed(2)}`;
    document.getElementById("total-quantity").innerText = `Items: ${totalQuantity}`;

  
    if (totalQuantity > 0) {
        document.getElementById("checkout-btn").style.display = "block";
        document.getElementById("thank-you").style.display = "none";
    } else {
        document.getElementById("checkout-btn").style.display = "none";
    }
}


document.getElementById("checkout-btn").addEventListener("click", function() {
    alert("Thank you for your purchase!");
    

    cart = [];


    updateCart();


    document.getElementById("thank-you").style.display = "block";
});
