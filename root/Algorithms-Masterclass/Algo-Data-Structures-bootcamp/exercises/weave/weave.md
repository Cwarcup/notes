# Weave - Queue Questions

Directions
1. Complete the task in weave/queue.js
    - Implement a 'peek' method in this Queue class. Peek should return the last element (the next one to be returned) from the queue *without* removing it.
2. Implement the 'weave' function.
    - Weave receives two queues as arguments and combines the contents of each into new, third queue.
    - The third queue should contain the *alterating* content of the two queues. 
    - The function should handle queues of different lengths without inserting 'undefined' into the new one. 
    - *Do not* access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.

Example:
```js
   const queueOne = new Queue();
   queueOne.add(1);
   queueOne.add(2);
   const queueTwo = new Queue();
   queueTwo.add('Hi');
   queueTwo.add('There');

   const q = weave(queueOne, queueTwo);
   q.remove() // 1
   q.remove() // 'Hi'
   q.remove() // 2
   q.remove() // 'There'
```

# Weave Solution

```js
class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

// create weave function
function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  // as long as our next element is NOT undefined...
  while(sourceOne.peek() || sourceTwo.peek()) {
    if(sourceOne.peek()) {
      q.add(sourceOne.remove())
    }
    if(sourceTwo.peek()) {
      q.add(sourceTwo.remove())
    }
  }
  return q;
}
```

