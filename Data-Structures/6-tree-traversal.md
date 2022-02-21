# Traversing a Tree

- the idea that if we have a tree that is unordered, how do we search every node once?

Two approaches to traversing a tree:

1. Breadth-first Search
![bfs](/images/bfs.png)

Depth-first Search

2. DFS-InOrder
![dfs](/images/dfs.png)

DFS-PostOrder

![traversal](https://leetcode.com/articles/Figures/145_transverse.png)

---

## Breath First Search - BFS

![bfs](https://camo.githubusercontent.com/73761db9068bf4c9de4a23209da587a29e8cc672558534d4ff40ac0480854047/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f352f35642f427265616474682d46697273742d5365617263682d416c676f726974686d2e676966)

We scan through the tree level by level, following the order of height, from top to bottom. The nodes on higher level would be visited before the ones with lower levels.

Steps - Iteratively

- Create a queue (this can be an array) and a variable to store the values of nodes visited 
- Place the root node in the queue 
- Loop as long as there is anything in the queue 
- Dequeue a node from the queue and push the value of the node into the variable that stores the nodes 
- If there is a left property on the node dequeued - add it to the queue 
- If there is a right property on the node dequeued - add it to the queue 
- Return the variable that stores the values 

```
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let queue = [];
    let visited = [];
    let node = this.root;
    queue.push(node); // place root node in queue
    while (queue.length) {
      //as long as something in queue
      node = queue.shift(); //takes from the beginning of the queue
      visited.push(node.value); //adding node to the list we will return
      if (node.left) queue.push(node.left); // check if theres a left value, push it to queue if so.
      if (node.right) queue.push(node.right); // check if theres a right value
    }
    return visited;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());

// [ 10, 6, 15, 3, 8, 20 ]
```

## Depth-first Search Traversal
One starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible along each branch before backtracking.

**DFS - PreOrder**

![dfs](https://camo.githubusercontent.com/307023a33368ed02198844a9b3d9b8b7b470f67bbcc0e88574da939b76775c89/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966)

Steps - Recursively
- Create a variable to store the values of nodes visited 
- Store the root of the BST in a variable called current 
- Write a helper function which accepts a node 
- If the node has a left property, call the helper function with the left property on the node 
- Push the value of the node to the variable that stores the values 
- If the node has a right property, call the helper function with the right property on the node 
- Invoke the helper function with the current variable 
- Return the array of values 

```
  DFSPreOrder() {
    let visited = [];
    function helper(node) {
      visited.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return visited;
  }

  var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFS());

// [ 10, 6, 3, 8, 15, 20 ]
```
--- 

**DFS - PostOrder**

