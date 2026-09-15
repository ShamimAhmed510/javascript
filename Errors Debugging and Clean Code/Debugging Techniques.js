// 1. -> Console.log
// Concept: Print variable values at various stages of your code to verify that calculations and flow match your expectations

// Scenario: You want to calculate total price including tax, but the result is incorrect.

function calculateTotal(price, taxRate) {
  console.log("1. Price received:", price); // Check input

  let total = price + price * taxRate;
  console.log("2. Calculated total:", total); // Check intermediate result

  return total;
}

calculateTotal(100, "0.1"); // Passing a string instead of a number by mistake

// 2 -->  console.table()

// Concept: Visualizes complex data like arrays of objects in a formatted table, making properties easier to compare line by line.
// Scenario: Inspecting a list of users.

const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" },
  { id: 3, name: "Charlie", role: "User" },
];

console.table(users);

// 3. Browser DevTools Breakpoints
// Concept: Pause code execution directly on a specific line inside the browser to inspect live state, call stacks, and variable scopes without modifying source code.

// Scenario: A function crashes midway during execution.

// How to use:

// Open Browser DevTools (F12 or Ctrl+Shift+I / Cmd+Option+I).

// Go to the Sources tab and open your JavaScript file.

// Click on the line number where you suspect an issue (e.g., line 12).

// Trigger the function in the UI.

// The browser pauses right at line 12, allowing you to hover over variables or use the Scope panel to see their exact current values before continuing.



// 4. Rubber-Duck Debugging
// Concept: Verbally explain your code's logic line-by-line out loud to an inanimate object (or colleague). The act of translating thoughts into spoken words forces your brain to process logic more deliberately, often exposing hidden assumptions.

// Scenario: A for loop skips the last item in an array, but you cannot spot the syntax error while reading silently.

// Example Verbal Explanation:

// "Okay, so this function iterates over items. i starts at 0. As long as i is strictly less than items.length - 1, we process the item... Wait, if it's strictly less than length minus one, it will stop before reaching the last index!"

// Resolution: You catch the logical flaw mid-explanation and update the condition to i < items.length.