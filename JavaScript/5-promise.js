'use strict';

class Cancelable extends Promise {
  constructor(executor) {
    super((resolve, reject) => {
      executor((val) => {
        if (this.canceled) {
          reject(new Error('Cancelled'));
          return;
        }
        resolve(val);
      }, reject);
    });
    this.canceled = false;
  }

  cancel() {
    this.canceled = true;
  }
}

// Usage

const promise = new Cancelable((resolve) => {
  setTimeout(() => {
    resolve('first');
  }, 10);
});

promise.then(console.log);
