'use strict';

const arrayLike = {
  length: 3,
  0: 'uno',
  1: 'due',
  2: 'tre',
};

// Usage

{
  for (let i = 0; i < arrayLike.length; i++) {
    const element = arrayLike[i];
    console.dir({ element });
  }
}

/*{
  for (const element of arrayLike) {
    console.dir({ element });
  }
}*/

{
  const array = Array.from(arrayLike);
  console.dir({ array });
}

/*{
  const array = [...arrayLike];
  console.dir({ array });
}*/
