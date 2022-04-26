// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples

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

const s = new Stack();
s.push(1);
s.push(2);
console.log(s.peek()); // returns 2
console.log(s.pop());
console.log(s.pop());
console.log(s.isEmpty()); // returns 1

// class Stack {
//   constructor() {
//     this.data = [];
//   }

//   push(value) {
//     this.data.push(value);
//   }

//   pop() {
//     return this.data.pop();
//   }
//   peek() {
//     return this.data[this.data.length - 1];
//   }
// }

// module.exports = Stack;
