# Level Width

Directions
Given the **root node of a tree**, return an array where each element is the width of the tree at each level. 

Example:
```
Given:
    0
  / |  \
1   2   3
|       |
4       5

Answer: [1, 3, 2]
```

> The first level of the tree (root) has 1 node in it. Therefore, the first element of the array is 1. The second level has 3 nodes, so the second element of the array is 3. The third level has 2 nodes, so the third element of the array is 2.
> This is how we return the array: [1, 3, 2].

Here we are only working with the **node class**. The tree class is not needed. The question states we are given a NODE of a tree. `root` is a node.

As soon as you see the words **width**, we know we are going to be using a **breadth-first traversal**.

## Solution

1. Will maintain two separate arrays:
   -  Counters [] will keep track of the number of nodes at each level. Will eventually return in our function.
   -  Array will serve as a queue as we iterate through the tree.
2. Add the root node to the queue (array), and add some character to keep track of this node. Will use a string of `s` to keep track of this node. 
3. initialize the counters array with a value of 1.
4. Create a loop:
   - While the queue array is longer than 1...
      1. Add the children of the first element to the queue.
      2. pop the first element off the queue.
      3. Increment the `counters` array at the index of the popped element.
      4. Pop out the next value in the queue `array`. This will be your `s` character. When you meet this character, that means we know we have hit the end of some level in the tree.
          -  We need to take this `s` and push it onto the end of our queue `array`. 
      5. Add on a new value of `0` to our `counters` array. Purpose of this is to signify we are moving to a new level.
          - We pop out the next value in the queue. 
          - Check to see if this value has any children. If it does, we add the children to the end of the queue.
          - increment the **last element** in the `counter` array.
   - When we reach a length of 1, we know we have reached the end of the tree.
5. Return the `counters` array.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
};

function levelWidth(root) {
  let arr = [root, 's'];
  let counters = [0];

  while (arr.length > 1) {
    // pull off the first element in the arr
    const node = arr.shift();

    // two conditions: we return the value `s` or we return an actual node
    if (node === 's') {
      counters.push(0); // add a new element to our counter with a value of 0
      arr.push('s'); // puts the 's' back at the end of the array
    } else {
      // if we return an actual node
      arr.push(...node.children); // add the nodes children to the end of the arr.
      counters[counters.length - 1]++; // last element in our counter represents the current level of our tree
    }
  }
  return counters;
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
console.log(levelWidth(root)); // [1, 3, 2]
```

Solution with no comments
```js
function levelWidth(root) {
  let arr = [root, 's'];
  let counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s'); 
    } else {
      arr.push(...node.children); 
      counters[counters.length - 1]++; 
    }
  }
  return counters;
}
```