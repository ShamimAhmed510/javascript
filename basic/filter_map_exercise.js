/* 5. Combine filter + map: from an array of students with cgpa, produce an array of names of students
with cgpa ≥ 3.5 */

const students = [
    { name: "Shamim", cg: 3.5},
    { name: "tarek", cg: 3.8},
    { name: "sakib", cg: 3.0},
    { name: "mijan", cg: 3.4},

];

const std = students
.filter((p) => p.cg >= 3.5)
.map((p) => `name : ${p.name} cgpa : ${p.cg}`);

console.log(std);