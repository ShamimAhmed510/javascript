
const AppleTwice =(fn,value) => fn(fn(value));
const Double =(num) => num * 2;

console.log(AppleTwice(Double, 5)); // Output: 20   