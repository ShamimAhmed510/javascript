student = [{name: "Alice", cgpa: 3.00}, {name: "Bob", cgpa: 2.00}, {name: "Charlie", cgpa: 4.22}]

student.sort((a,b) => b.cgpa -a.cgpa);
console.log(student); // Output: [{name: "Charlie", cgpa: 4.22}, {name: "Alice", cgpa: 3.00}, {name: "Bob", cgpa: 2.00}]