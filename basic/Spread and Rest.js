// // Spread: copy and extend an object without touching the original
const user = {
  them: "Dark",
  color: "Red",
};

console.log("Before Spreed");
console.log(user);

console.log("After Spreed");
const user2 = { ...user, them: "Light" };
console.log(user2);

//// Rest: gather remaining arguments into an array

const sumall = (...nums) =>
  nums.reduce((sum, item) =>
    sum + item , 0);

console.log(sumall(1, 2, 3));
