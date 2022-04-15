// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node); // push the new node containing the data into the child array
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
      // used not equal to.
      // we want to return true on every element that is NOT equal to `data`
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root]; // put root node in array
    while (arr.length) {
      const node = arr.shift(); // takes put the first element of an array
      arr.push(...node.children); // spread. Take every element out of the array and push them into `arr`.
      //or could use...does the same
      // for(let child of node.children) {
      //   arr.push(child)
      // }
      fn(node); //then call the function with the current node to start the process over
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
