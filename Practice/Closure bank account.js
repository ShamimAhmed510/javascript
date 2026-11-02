// const CreateBankAccount = (initialBalance) => {
//   let balance = initialBalance;
//   return {
//     deposit: (amount) => {
//       balance += amount;
//     },
//     getBalance: () => balance,
//     withDraw:(amount) =>{
//         if(amount > balance){
//             return `Insufficient funds`;
//         } else {
//             balance -= amount;
//             return balance;
//         }
//     }
//   };
// };

// const acc = CreateBankAccount(100);
// acc.deposit(50);
// console.log(acc.getBalance()); // Output: 150
// console.log(acc.withDraw(200)); // Output: Insufficient funds
// console.log(acc.withDraw(110)); // Output: 40
// console.log(acc.getBalance()); // Output: 40

// const list = [1, 2, 3];
// list.push(4);
//  list = [7, 8];
// console.log(list);

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// let removed = fruits.splice(1, 2);

// console.log(fruits);
// console.log(removed);
// fruits.splice(0, 0, "Banana");
// console.log(fruits);

// console.log([1, 2].map((n) => { return n * 2 }));

const original = [1, 2, 3];
const alias = original;
alias.push(4);
console.log(original.length, original === alias);