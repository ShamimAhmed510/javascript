

function myMap(arr, fn) {
  const result = [];
  let index = 0;

  for (const item of arr) {
    result.push(fn(item, index));
    index++;
  }

  return result;
}

// Test cases
const fruits = ["apple", "banana", "cherry"];

// Passing both value (item) and index
const formattedFruits = myMap(fruits, (item, index) => {
  return `Index ${index}: ${item.toUpperCase()}`;
});

console.log("Original Array:", fruits);
console.log("Mapped Result:", formattedFruits);