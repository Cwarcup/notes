// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// const Stack = require('./stack');
// class Stack {
//   constructor() {
//     this.data = [];
//   }
//   push(record) {
//     this.data.push(record);
//   }
//   pop() {
//     return this.data.pop();
//   }
//   peek() {
//     return this.data[this.data.length - 1];
//   }
// }

// class Queue {
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }

//   add(record) {
//     this.first.push(record);
//   }

//   remove() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//       // remove record from first stack, and push it to second stack
//       // do this while first stack has a record. This is why we use peek()
//     }
//     const record = this.second.pop();
//     // want to keep this value so we can move all the records from second stack back to first stack.
//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//       // returns us back to original state
//     }
//     return record;
//   }

//   peek() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }
//     const peekedRec = this.second.peek(); // provides reference to the record

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }
//     return peekedRec;
//   }
// }
class Stack {
  constructor() {
    this.data = [];
  }

  push(data) {
    // add data to end
    this.data.push(data);
  }

  pop() {
    // remove data from end of array
    return this.data.pop();
  }

  peek() {
    // see last data point
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(item) {
    this.first.push(item);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let removed = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return removed;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    let removed = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return removed;
  }
}

module.exports = Queue;
