const student = { name: "Alice" }; // Sample object

const { name, cgpa: gpa = 3.0 } = student;

console.log(name, gpa); // "Alice", 0.0