/////  Searching and Sorting 
 const students = [
    { name: "shamim" , cg: 3.7},
    { name: "Tarek" , cg: 3.2},
     { name: "Abdullah" , cg: 3.8 },
    { name: "Sakib" , cg: 4.00 },
    { name: "Mijan" , cg: 3.9},

 ];

 const topper = students.find((s) => s.cg >= 3.8);

 console.log(topper)

 const anyFailing = students.some((s) => s.cg < 2.0);
 console.log(anyFailing);

 const allPassing = students.every((s) => s.cg >= 2.0);
 console.log(allPassing);