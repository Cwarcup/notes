# Trees

Properties of trees:
- each node has...
    - contains `data`.
    - contains reference to **children[]**.


<img src="tree.png" alt="drawing" style="width:500px;"/>

**Iterating** through a tree is known as **traversing**. 

# Tree Nodes

Implementing nodes in a tree:

Create a node class:
- The constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children. 

### Constructor() Node for a Tree

```js
class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }
}
```
> Constructor has two arguments: `data` and `children`.

The node class should have methods '**add**' and '**remove**':
- `add` should accept a node and add it to the current node's 'children' array.

### Add() method - Node for a Tree
```js
  add(data) {
    const node = new Node(data);
    this.children.push(node); 
    // push the new node containing the data into the child array
  }
```

### Remove() method - Node for a Tree
```js
  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data; 
      // used not equal to.
      // we want to return true on every element that is NOT equal to `data`
    })
  }
```
> Given some data, look at each child in the current node and remove any node with data that matches the given data.

Remember to use the '**filter**' method to remove the node with the matching data. `filter` returns a new array with all the elements that pass the test. If the 'child' fails the test (returns false) then it is removed. [More on filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

### Complete class Node for a Tree
```js
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
```

# Tree Implementation

## Constructor() for class Tree

The tree constructor should initialize a `root` property to `null`. 

```js
class Tree {
  constructor() {
    this.root = null;
  }
}
```

## Breadth-first traversal (BFS)

It starts at the tree root and explores the neighbor nodes first, before moving to the next level neighbors.

<img src="https://camo.githubusercontent.com/73761db9068bf4c9de4a23209da587a29e8cc672558534d4ff40ac0480854047/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f352f35642f427265616474682d46697273742d5365617263682d416c676f726974686d2e676966" alt="drawing" style="width:500px;"/>

For example, what if you wanted to take every node on a tree and increment it by 10?
```js
tree.traverseBF((node) => {
  node.data += 10;
});
```

1. create an empty array, take the root node and push it into the array.
2. iterate through the array...`while` there is something in the array, take out the first element and push it's children into the array.
3. call the callback function on each node.

```js
  traverseBF(fn) {
    const arr = [this.root] // put root node in array
    while(arr.length) {
      const node = arr.shift() // takes put the first element of an array
      arr.push(...node.children) // spread. Take every element out of the array and push them into `arr`.
      //or could use...does the same
      // for(let child of node.children) {
      //   arr.push(child)
      // }
      fn(node) //then call the function with the current node to start the process over
    }
  }
```

No comments:
```js
class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root]
    while(arr.length) {
      const node = arr.shift()
      arr.push(...node.children) 
      fn(node) 
    }
  }
}
```

## Depth First Traversal (DFS)

One starts at the root and explores as far as possible along each branch before backtracking.

You go from the very top, to the very bottom of the tree. You span the DEPTH of the tree. 

<img src="https://camo.githubusercontent.com/307023a33368ed02198844a9b3d9b8b7b470f67bbcc0e88574da939b76775c89/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966" alt="drawing" style="width:500px;"/>

1. Create an empty array, take the root node and push it into the array.
2. while the array is not empty, take the first element of the array and push it's children into the array.
3. Pass the first node to the iterator function...
4. take the next node and `unshift` it's children into the array. Want to get the children at the beginning of the array.

```js
  traverseDF(fn) {
    const arr = [this.root]
    while(arr.length) {
      const node = arr.shift()
      fn(node)
      arr.unshift(...node.children)
    }
  }
```

The difference between in breadth-first and depth-first is that...
- Breadth-first adds elements to the end of the array using `push()`.
- Depth-first adds elements to the beginning of the array using `unshift()`.

```js
class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift(); 
      arr.push(...node.children); 
      fn(node);
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
```