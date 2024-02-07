/*Cart*/
window.addEventListener('load', function () {
  // Event listener for clicking cart icon
  document.getElementById('cart-icon').addEventListener('click', function () {
    let cartPopup = document.getElementById('cart-popup');
    // Toggle display of cart pop-up
    cartPopup.style.display = (cartPopup.style.display === 'block') ? 'none' : 'block';
  });

  // Event listener for clicking checkout button
  document.getElementById('checkout-button').addEventListener('click', function () {
    let totalSpan = document.getElementById('total-price');
    let totalPrice = parseFloat(totalSpan.textContent);

    // Validation message for whether cart is empty
    if (totalPrice === 0) {
      displayErrorMessage("Purchase Failed. Your Cart is Empty.");
    } else {
      let message = `Thank You For Your Purchase! Payment Instructions Sent to Email.`;
      displayPurchaseMessage(message);
      clearShoppingCart();
    }
  });

  document.querySelector('.clear-cart').addEventListener('click', function () {
    clearShoppingCart();
    // Remove cart data from local storage
    localStorage.removeItem('cart');
  });
  
  // Function to display purchase success message
  function displayPurchaseMessage(message) {
    let purchaseMessage = document.getElementById('product-purchase-message');
    purchaseMessage.textContent = message;
    purchaseMessage.style.display = 'block';

    // Message to disappear after 2s delay
    setTimeout(function () {
      purchaseMessage.style.display = 'none';
    }, 2000);
  }

  // Function to display purchase fail message
  function displayErrorMessage(message) {
    let errorMessage = document.getElementById('fail-purchase-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';

    // Message to disappear after 2s delay
    setTimeout(function () {
      errorMessage.style.display = 'none';
    }, 2000);
  }

  // Get elements with the class 'add-to-cart-button'
  let addToCartButtons = document.getElementsByClassName('add-to-cart-button');

  // Iterate through each 'Add to Cart' button and add an event listener
  Array.from(addToCartButtons).forEach(function (button) {
    button.addEventListener('click', function () {
      let itemName = button.getAttribute('data-ball-name');
      let itemPrice = parseFloat(button.getAttribute('data-ball-price'));

      // Add the item to the cart
      addToCart(itemName, 1, itemPrice);

      // Change button text temporarily to 'Item Added to Cart'
      button.textContent = 'Item Added to Cart';

      // Reset button text after 1.5s
      setTimeout(function () {
        button.textContent = 'Add to Cart';
      }, 1500);
    });
  });

  // Function to add items to cart and local storage
  function addToCart(itemName, quantity, price) {
    let cartItems = document.getElementById('cart-items');
    let totalSpan = document.getElementById('total-price');

    // Check if item already in cart
    let existingItem = Array.from(cartItems.children).find(function (item) {
      return item.dataset.name === itemName;
    });

    if (existingItem) {
      let currentQuantity = parseInt(existingItem.dataset.quantity);
      let newQuantity = currentQuantity + quantity;

      // If item already in cart, only increase quantity count and price accordingly
      existingItem.dataset.quantity = newQuantity;
      existingItem.cells[1].textContent = newQuantity;
      existingItem.cells[2].textContent = '$' + (newQuantity * price).toFixed(2);
    } else {
      // If item not in cart, create a new row in the table
      let newRow = cartItems.insertRow();
      newRow.dataset.name = itemName;
      newRow.dataset.quantity = quantity;

      // Add item details (name,quantity,price) to each cell in the row
      let cell1 = newRow.insertCell(0);
      cell1.textContent = itemName;

      let cell2 = newRow.insertCell(1);
      cell2.textContent = quantity;

      let cell3 = newRow.insertCell(2);
      cell3.textContent = '$' + (quantity * price).toFixed(2);
    }

    // Update the total price
    let currentTotal = parseFloat(totalSpan.textContent);
    totalSpan.textContent = (currentTotal + price).toFixed(2);

    // Store cart items in local storage
    updateLocalStorage();
  }

  // Function to update local storage with current cart items
  function updateLocalStorage() {
    let cartItems = document.getElementById('cart-items');
    let cartData = [];
  
    Array.from(cartItems.children).forEach(function (item) {
      cartData.push({
        name: item.dataset.name,
        quantity: parseInt(item.dataset.quantity),
        price: parseFloat(item.cells[2].textContent.replace('$', '')) / parseInt(item.dataset.quantity) // Fix here
      });
    });
  
    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  // Function to clear shopping cart and local storage
  function clearShoppingCart() {
    let cartItems = document.getElementById('cart-items');
    let totalSpan = document.getElementById('total-price');

    cartItems.innerHTML = '';
    totalSpan.textContent = '0.00';

    // Clear local storage
    localStorage.removeItem('cart');
  }

  // On page load, check if any items in local storage and add them back to the cart
  let storedCart = localStorage.getItem('cart');
  if (storedCart) {
    let cartData = JSON.parse(storedCart);
    cartData.forEach(function (item) {
      addToCart(item.name, item.quantity, item.price);
    });
  }
});

/*Close Cart*/
document.addEventListener('DOMContentLoaded', function () {
    //Event listener for clicking close cart button//
    document.getElementById('close-cart').addEventListener('click', function () {
      //Hide the cart when press close//
      document.getElementById('cart-popup').style.display = 'none';
    });
});