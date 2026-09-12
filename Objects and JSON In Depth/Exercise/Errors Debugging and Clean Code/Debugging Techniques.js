// 1. -> Console.log 
// Concept: Print variable values at various stages of your code to verify that calculations and flow match your expectations

// Scenario: You want to calculate total price including tax, but the result is incorrect.

function calculateTotal(price, taxRate) {
    console.log('1. Price received:', price); // Check input

    let total = price + (price * taxRate);
    console.log('2. Calculated total:', total); // Check intermediate result

    return total;
}

calculateTotal(100, "0.1"); // Passing a string instead of a number by mistake

// 2 -->  console.table()

// Concept: Visualizes complex data like arrays of objects in a formatted table, making properties easier to compare line by line.
// Scenario: Inspecting a list of users. 

const users = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'User' }
];

console.table(users); 