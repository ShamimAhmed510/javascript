class BankAccount {
    balance ;
    amount ;

    constructor(balance, amount) {
        this.balance =balance;
        this.amount = amount;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

b1 = new BankAccount(1000);
b1.deposit(500);
console.log(b1.getBalance()); // 1500   
b1.withdraw(200);
console.log(b1.getBalance()); // 1300   
