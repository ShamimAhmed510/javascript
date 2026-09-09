// Syntax console.error();

console.log("Hello  // This is a test message to demonstrate error handling in JavaScript. 

console.log("Hello World"); // right code 


// ReferenceError 
let userName = "Rahim";
console.log(userame); // 'userName' এর বদলে বানানে ভুল করে 'userame' লেখা হয়েছে

//Right code 
let userName = "Rahim";
console.log(userName);

// . TypeError

let age = 25;
age(); // 25 একটি সংখ্যা, এটি কোনো ফানকশন নয় তাই একে age() দিয়ে কল করা যাবে না

function showAge() {
  console.log(25);
}
showAge(); // ফানকশনকে কল করা হয়েছে