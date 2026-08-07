// function makecard({name, id, dept="CSE"})
// {
//     return `Name: ${name}, ID: ${id}, Dept: ${dept}`;
// }

// console.log(makecard({name:"Shamim", id:214}));

function makecard({name, city = "Dhaka", age}){
    return `Name: ${name}, City: ${city}, Age: ${age}`;
}

console.log(makecard({name:"Shamim"}));
console.log(makecard({age: 550}));
