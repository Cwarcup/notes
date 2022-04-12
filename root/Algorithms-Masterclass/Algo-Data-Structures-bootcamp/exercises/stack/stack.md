# Stacks

Is very similar to a queue. 

Adding a record is done by `push`ing to the top of the stack.
Removing a record is done by `pop`ing from the top of the stack.

**First in, last out.**

Directions:
- Create a stack data structure.
- The stack should be a class with methods 'push', 'pop', and
'peek'. 
Adding an element to the stack should store it until it is removed.

Examples:
```js
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.pop(); // returns 2
  s.pop(); // returns 1
```

# Making a Stack

```js
class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  // removes from the end of the array 
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
```