function parseUserData(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return { success: true, data: data };
  } catch (error) {
    return {
      success: false,
      message: "Invalid JSON format. Please check your input and try again."
    };
  }
}

// Example Usage:
console.log(parseUserData('{"name": "Alice"}')); 
// Output: { success: true, data: { name: "Alice" } }

console.log(parseUserData('{"name": "Alice"')); 
// Output: { success: false, message: "Invalid JSON format. Please check your input and try again." }