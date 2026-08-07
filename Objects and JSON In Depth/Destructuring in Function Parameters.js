function makecard({name, id, dept="CSE"})
{
    return `Name: ${name}, ID: ${id}, Dept: ${dept}`;
}

console.log(makecard({name:"Shamim", id:214}));