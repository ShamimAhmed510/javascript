//// 6.3 Useful Everyday Methods 

const nums = [10 , 20, 30 , 40];
console.log(nums.includes(20));
console.log(nums.indexOf(10));
console.log(nums.slice(0,3));
console.log(nums.join(" + "));
const merged = [...nums , 100];
console.log(merged);