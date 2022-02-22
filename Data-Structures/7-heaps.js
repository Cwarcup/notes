class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1; // keeps track of where the newly added element is.
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMax() {
    const max = this.values[0]; //gives you first element
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end; // last element to root
      // sink down
      this.sinkDown();
    }
    return max;
  }
  //  0   1   2   3   4   5
  // [33, 39, 41, 18, 27, 12]
  sinkDown() {
    let index = 0; // starts at beginning
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1; // 1
      let rightChildIndex = 2 * index + 2; // 2
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]; // 39
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]; //41
        if (
          (swap === null && rightChild > element) || // swap never set to left child
          (swap !== null && rightChild > leftChild) //
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap]; // swapping with either the left or right child.
      this.values[swap] = element;
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

// console.log(heap);

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1; // keeps track of where the newly added element is.
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  dequeue() {
    //removes root element, returns it, and rearranges heap using priority.
    const min = this.values[0]; //gives you first element
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end; // last element to root
      // sink down
      this.sinkDown();
    }
    return min;
  }
  //  0   1   2   3   4   5
  // [33, 39, 41, 18, 27, 12]
  sinkDown() {
    let index = 0; // starts at beginning
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1; // 1
      let rightChildIndex = 2 * index + 2; // 2
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]; // 39
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex]; //41
        if (
          (swap === null && rightChild.priority < element.priority) || // swap never set to left child
          (swap !== null && rightChild.priority < leftChild.priority) //
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap]; // swapping with either the left or right child.
      this.values[swap] = element;
      index = swap;
    }
  }
}

let ER = new PriorityQueue();

ER.enqueue('common cold', 5);
ER.enqueue('gun shot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

console.log(ER);
ER.dequeue();
console.log(ER);
