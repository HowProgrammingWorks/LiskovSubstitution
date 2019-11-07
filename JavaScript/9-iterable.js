'use strict';

const iterable = {
  [Symbol.iterator]() {
    let i = 0;
    const iterator = {
      next() {
        return {
          value: i++,
          done: i > 3
        };
      }
    };
    return iterator;
  }
};

// Usage

/*{
  for (let i = 0; i < iterable.length; i++) {
    const element = iterable[i];
    console.dir({ element });
  }
}*/

{
  for (const element of iterable) {
    console.dir({ element });
  }
}

{
  const array = Array.from(iterable);
  console.dir({ array });
}

{
  const array = [...iterable];
  console.dir({ array });
}
