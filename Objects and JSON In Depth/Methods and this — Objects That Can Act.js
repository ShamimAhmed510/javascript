const account = {
  name: "Shamim Ahmed",
  balance: 123456789,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
  summaruy() {
    return `Account holder: ${this.name}, Balance: ${this.balance}`;
  },
};

account.deposit(5000);
console.log(account.summaruy());