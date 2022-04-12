# Creating Queue from Stacks

Recall that a **queue** is a data structure that follows the **FIFO (first in, first out)** principle. 

And a **stack** is a data structure that follows the **LIFO (last in, first out)** principle.

Create your stack:
```js
class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}
```

Create the queue using the stack:
```js
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
      // remove record from first stack, and push it to second stack
      // do this while first stack has a record. This is why we use peek()
    }
    const record = this.second.pop();
    // want to keep this value so we can move all the records from second stack back to first stack.
    while (this.second.peek()) {
      this.first.push(this.second.pop());
      // returns us back to original state
    }
    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const peekedRec = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return peekedRec;
  }
}
```
