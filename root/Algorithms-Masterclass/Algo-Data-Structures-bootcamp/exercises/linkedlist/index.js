// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // there are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // the chain is empty
      this.head = new Node(data);
    }
  }

  insertLast(val) {
    let node = this.head;

    if (!node) {
      this.head = new Node(val);
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(val);
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
    }
    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
  // method without suing getAt() method
  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index - 1) {
        node.next = new Node(data, node.next);
        return;
      }
      node = node.next;
      counter++;
    }
  }

  insertAt(val, index) {
    if (!this.head) {
      this.head = new Node(val);
      return;
    }
    if (index === 0) {
      this.head = new Node(val, this.head);
      return;
    }
    let previous = this.getAt(index - 1) || this.getLast();
    let node = new Node(val, previous.next);
    previous.next = node;
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

// const list = new LinkedList();
// list.insertFirst('a');
// list.insertFirst('b');
// list.insertFirst('c');
// list.insertLast('fuck');
// console.log(list.getAt(3));

const list = new LinkedList();

list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);

for (let node of list) {
  node.data += 10;
}

console.log(list.getAt(0));

module.exports = { Node, LinkedList };
