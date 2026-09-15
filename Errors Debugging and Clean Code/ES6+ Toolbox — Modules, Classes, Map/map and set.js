const set = new Set([1,1,2,2,2,3,4,5,]);

console.log(set.size);     // Output: 5
console.log(...set);       // Output: 1 2 3 4 5

const mp = new Map();

mp.set("pen", 120 );
mp.set("pencil", 20 );
mp.set("bag", 0 );

console.log(mp.get("pen"));     // Output: 120

console.log(mp.has("bag")); // Output: true  bag key exist kore  