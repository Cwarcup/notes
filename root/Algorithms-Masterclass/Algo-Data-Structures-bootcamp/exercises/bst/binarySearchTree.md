# Binary Search Tree

## Restrictions on a BST
- Every Node can have at most **two children**; left and right child.
- The **left child** must be **less** than the parent
- the **right child** must be **greater** than the parent.

>Basic structure of a binary search tree.
<img src="bst.png" alt="drawing" style="width:500px;"/>

> Represents a single node. Data is often referred to as a key or value.
<img src="bstNode.png" alt="drawing" style="width:500px;"/>

Very common interview question is top determine how to **add a new value to a binary search tree**.

# Implementation of BST

Directions:
1. Implement the Node class to create a binary search tree.  The constructor should initialize values 'data', 'left', and 'right'.
2. Implement the 'insert' method for the Node class.  Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.
3. Implement the 'contains' method for the Node class.  Contains should accept a 'data' argument and return the Node in the tree with the same value.

## Node class of BST

```js
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
```

## Insert() method for Node class

Often uses recursion. 

```js
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
```