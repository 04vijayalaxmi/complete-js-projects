let cart = [];
let totalPrice = 0;

function addToCart(item) {
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total-price');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });

    totalPrice = cart.length * 20; 
    total.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}
