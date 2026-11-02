const CreateBankAccount = (initialBalance) => {
  let balance = initialBalance;
  return {
    deposit: (amount) => {
      balance += amount;
    },
    getBalance: () => balance,
    withDraw:(amount) =>{
        if(amount > balance){
            return `Insufficient funds`;
        } else {
            balance -= amount;
            return balance;
        }
    }
  };
};

const acc = CreateBankAccount(100);
acc.deposit(50);
console.log(acc.getBalance()); // Output: 150
console.log(acc.withDraw(200)); // Output: Insufficient funds
console.log(acc.withDraw(110)); // Output: 40
console.log(acc.getBalance()); // Output: 40