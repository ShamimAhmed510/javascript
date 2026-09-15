const TAX_RATE = 0.10;
const MINIMUM_QUALIFYING_PRICE = 50;

// Function 1: Filters items and calculates subtotal
function calculateQualifyingSubtotal(cartItems) {
  return cartItems
    .filter(item => item.price >= MINIMUM_QUALIFYING_PRICE)
    .reduce((subtotal, item) => subtotal + item.price, 0);
}

// Function 2: Handles overall tax calculation and response formatting
function generateCartSummary(cartItems) {
  const subtotal = calculateQualifyingSubtotal(cartItems);
  const totalWithTax = subtotal + (subtotal * TAX_RATE);
  
  return `Total is $${totalWithTax.toFixed(2)}`;
}

// Example Usage:
const cart = [{ price: 20 }, { price: 60 }, { price: 100 }];
console.log(generateCartSummary(cart)); // Output: Total is $176.00