// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    //option 1:
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return this;
    } else if (data < this.data && this.left) {
      // data is smaller than node data, and we have a left node
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      // data larger than current node value as we have a right node
      return this.right.contains(data);
    } else {
      // if the data is not found in the tree
      return null;
    }
  }

  validate(node, min = null, max = null) {
    // case in which we move to the left
    if (max !== null && node.data > max) {
      return false;
    }
  
    if (min !== null && node.data < min) {
      return false;
    }
    
    if (node.left && !validate(node.left, min, node.data)) {
      return false;
    }
    if (node.right && !validate(node.right, node.data, max)) {
      return false;
    }
    return true;
  }
}

const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);
console.log(node.contains(20));
console.log(node.validate(10));

module.exports = Node;
