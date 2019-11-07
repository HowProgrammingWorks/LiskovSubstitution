'use strict';

const list = document.querySelectorAll('div');

// Usage

{
  const array = Array.from(list);
  console.dir({ array });
}

{
  const array = [...list];
  console.dir({ array });
}
