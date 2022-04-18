// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

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
console.log(levelWidth(root));

module.exports = levelWidth;
