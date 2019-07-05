'use strict';

class Account {
  constructor(name, value) {
    this.name = name;
    this.balance = value;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class UserAccount extends Account {
  constructor(name, value) {
    super(name, value);
  }

  withdraw(amount) {
    if (amount > 0) super.withdraw(amount);
  }
}

// Usage

const account = new UserAccount('Marcus', 100);

account.withdraw(50);
console.log({ account });

account.withdraw(70);
console.log({ account });

account.withdraw(-10);
console.log({ account });
