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

