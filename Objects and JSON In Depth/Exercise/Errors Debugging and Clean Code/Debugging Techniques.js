// Console.log 
// Concept: Print variable values at various stages of your code to verify that calculations and flow match your expectations

// Scenario: You want to calculate total price including tax, but the result is incorrect.

function calculateTotal(price, taxRate) {
    console.log('1. Price received:', price); // Check input

    let total = price + (price * taxRate);
    console.log('2. Calculated total:', total); // Check intermediate result

    return total;
}

calculateTotal(100, "0.1"); // Passing a string instead of a number by mistake