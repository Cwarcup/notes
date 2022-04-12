# Generators

Are not talked about very much in ES2015 courses. 

Good resource is at Babel: [here](https://babeljs.io/docs/en/learn#generators)

## Defining a Generator
- Has a `*` to the left of the function name `function *numbers()` **OR** right of the function keyword `function*`.

```js
function *numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}
const generator = numbers()
console.log(generator.next()); // { value: 2, done: false }
```

When we define a generator, we call `.next()` on it which runs the code inside the function until it hits a `yield` statement.

When a `yield` statement is found, the generator is paused and the value of the `yield` is returned.

You can call `.next()` multiple times:

```js
function *numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}
const generator = numbers()
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: NaN, done: true }
```

> But if you call `.next()` with a value this time, you can think of the value replacing the entire `yield` statement.

```js
function *numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}
const generator = numbers()
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next(10)); // { value: 30, done: true }
```

This can be useful if you implement multiple `yield` statements in a function.
```js
function *list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = list();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: 4, done: false }
console.log(generator.next()); // { value: 5, done: false }
console.log(generator.next()); // { value: undefined, done: true }
```
## Why are they useful? 

Can be used like so to **iterate over a list**:

```js
function *list() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator = list();

const numbers = [];
for(let value of generator) {
  numbers.push(value);
}
numbers; // [1, 2, 3, 4, 5]
```

### Nested Generators

```js
function* numbers() {
  yield 1;
  yield 2;
  yield* moreNumbers(); 
  yield 6;
  yield 7;
}

function* moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

const generator = numbers();

const values = [];

for(let value of generator) {
  values.push(value);
}

values // [1, 2, 3, 4, 5, 6, 7]
```

> `yield*` is a special syntax that allows you to call another generator function.

Real example - walking through a tree:
```js
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

values // [1, 2, 4, 3]
```
```