const  a = {count: 1};
const b = a;
b.count = 2;
console.log(a.count); // 2
console.log(b.count); // 2

console.log({x:1} === {x:1}); // false  
console.log(a==b); // true