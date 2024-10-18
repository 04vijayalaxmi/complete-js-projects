// Get elements
const form = document.getElementById('grocery-form');
const itemNameInput = document.getElementById('item-name');
const itemPriceInput = document.getElementById('item-price');
const groceryList = document.getElementById('grocery-list');
const totalPriceEl = document.getElementById('total-price');

let totalPrice = 0;

// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const itemName = itemNameInput.value;
    const itemPrice = parseFloat(itemPriceInput.value).toFixed(2);

    if (!itemName || itemPrice <= 0) {
        alert("Please enter valid item name and price.");
        return;
    }

    // Add item to the list
    addItemToList(itemName, itemPrice);

    // Clear input fields
    itemNameInput.value = '';
    itemPriceInput.value = '';

    // Update total price
    updateTotalPrice(itemPrice);
});

// Function to add item to the grocery list
function addItemToList(itemName, itemPrice) {
    const li = document.createElement('li');
    li.innerHTML = `${itemName} - $${itemPrice} <button class="delete-btn">Remove</button>`;
    
    groceryList.appendChild(li);

    // Remove item when delete button is clicked
    li.querySelector('.delete-btn').addEventListener('click', function () {
        li.remove();
        updateTotalPrice(-itemPrice);
    });
}

// Function to update the total price
function updateTotalPrice(price) {
    totalPrice = (parseFloat(totalPrice) + parseFloat(price)).toFixed(2);
    totalPriceEl.textContent = totalPrice;
}
