'use strict';

const { EventEmitter } = require('events');

class Account extends EventEmitter {
  constructor(name, value) {
    super();
    this.name = name;
    this.balance = value;
  }

  withdraw(amount) {
    this.balance -= amount;
    this.emit('withdraw', amount, this.balance);
  }
}

class UserAccount extends Account {
  constructor(name, value) {
    super(name, value);
  }

  withdraw(amount) {
    super.withdraw(amount);
    if (this.balance < 0) this.emit('debt', this.balance);
  }
}

// Usage

const account = new UserAccount('Marcus', 100);

account.on('debt', (debt) => {
  console.log({ debt });
});

account.on('withdraw', (withdraw, balance) => {
  console.log({ withdraw, balance });
});

account.withdraw(50);
account.withdraw(70);
account.withdraw(-10);
