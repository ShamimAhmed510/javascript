const account = {
  name: "Sadia",
  balance: 5000,
  deposit(amount) {
    this.balance += amount;
    return `new balance : ${this.balance} Taka`;
  },
};

console.log(account.deposit(1500));
