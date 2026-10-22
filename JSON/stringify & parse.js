const person = {
    name: "Shamim",
    age: 25,
    city: "Sylhet",
};
console.log(person, typeof person);

// object ke string a convert kore notation 

const a =JSON.stringify(person);
console.log(a, typeof a);

// shei convert howa string ke abr object a convert kre 

const b = JSON.parse(a);
console.log(b, typeof b);

