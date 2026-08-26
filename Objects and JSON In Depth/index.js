const user = { name: "Rahim", age: 25 };

const packed = JSON.stringify(user);
console.log("Packed Data:", packed);

const unpacked = JSON.parse(packed);
console.log("Unpacked Age:", unpacked.age);
