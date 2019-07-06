'use strict';

class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

class Square extends Rect {
  constructor(side) {
    super();
    this.side = side;
  }

  get width() {
    return this.side;
  }

  set width(value) {
    this.side = value;
  }

  get height() {
    return this.side;
  }

  set height(value) {
    this.side = value;
  }
}

// Usage

const useRect = rect => {
  rect.width = 10;
  console.log({ rect });
  console.log({ area: rect.area });
};

useRect(new Rect(100, 50));
useRect(new Square(100, 50));
