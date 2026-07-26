

const originalItems = [
  { id: 1, details: { name: "Laptop", price: 1000 } },
  { id: 2, details: { name: "Phone", price: 500 } }
];

console.log("--- 1. Shallow Copy Trap ---");

const shallowCopy = [...originalItems]; 

// Mutating nested property in shallow copy
shallowCopy[0].details.price = 1200;

console.log("Shallow Copy Price:", shallowCopy[0].details.price); // 1200
console.log("Original Price (MUTATED!):", originalItems[0].details.price); // 1200
console.log("Same reference?", shallowCopy[0].details === originalItems[0].details); // true

console.log("\n-----------------------------------\n");

// Reset original data
originalItems[0].details.price = 1000;

console.log(originalItems[0].details.price);
console.log("Shallow Copy Price:", shallowCopy[0].details.price); // 1000


console.log("--- 2. Fix with structuredClone ---");
// Deep copy
const deepCopy = structuredClone(originalItems);

// Mutating nested property in deep copy
deepCopy[0].details.price = 1500;

console.log("Deep Copy Price:", deepCopy[0].details.price); // 1500
console.log("Original Price (SAFE!):", originalItems[0].details.price); // 1000
console.log("Same reference?", deepCopy[0].details === originalItems[0].details); // false