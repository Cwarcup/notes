// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// class Queue {
//   constructor() {
//     //create new, empty array
//     this.data = [];
//   }

//   add(record) {
//     this.data.unshift(record);
//   }

//   remove() {
//     return this.data.pop();
//   }
// }
class Queue {
  constructor() {
    this.data = [];
  }
  add(item) {
    this.data.push(item);
  }
  remove(item) {
    return this.data.shift();
  }
  peek() {
    return this.data[0];
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

module.exports = Queue;
