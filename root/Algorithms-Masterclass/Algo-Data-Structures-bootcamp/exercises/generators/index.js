class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printValues() {
    yield this.value;
    for(let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);

// I want to iterate over the tree and print the values.
// expect to see 1, 2, 4, 3

const values = [];
for(let value of tree.printValues()) {
  values.push(value);
}
values

///////////////////////////////////////

// function* numbers() {
//   yield 1;
//   yield 2;
//   yield* moreNumbers();
//   yield 6;
//   yield 7;
// }

// function* moreNumbers() {
//   yield 3;
//   yield 4;
//   yield 5;
// }

// const generator = numbers();

// const values = [];

// for(let value of generator) {
//   values.push(value);
// }

// values
