# Linked List

Seen **very** commonly in interviews.

Is an ordered collection of data. The collection contains a number of different **nodes**. 

Each node has a **data** and a **reference** property to the *next node* in the list.

- **Head node** is the first node in the list. 

- **Tail node** is the last node in the list. It does not have a reference to the next node.


<img src="linked.png" alt="drawing" style="width:500px;"/>

## Node Class API

| Function         | Arguments    | Return | Description |
| ---------------- | ------------ | ------ | ----------- |
| Node.constructor | (Data, Node) | Node   |             |

## LinkedList Class API

| Function      | Arguments | Return     | Description                                                                                                                                                                                                                                                                  |
| ------------- | --------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| constructor   | -         | LinkedList | Create a class to represent a linked list. When created, a linked list should have *no* head node associated with it. The LinkedList instance will have one property, 'head', which is a reference to the first node of the linked list. By default 'head' should be 'null'. |
| insertFirst   | data      | -          | Creates a new Node from argument 'data' and assigns the resulting node to the 'head' property. Make sure to handle the case in which the linked list already has a node assigned to the 'head' property.                                                                     |
| size          | -         | number     | returns the number of nodes in the list                                                                                                                                                                                                                                      |
| getFirst      | -         | Node       | returns the first node in the list                                                                                                                                                                                                                                           |
| getLast       | -         | Node       | returns the last node in the list                                                                                                                                                                                                                                            |
| clear         | -         | -          | removes all nodes from the list                                                                                                                                                                                                                                              |
| removeFirst   | -         | Node       | Removes only the first node of the linked list. The list's head should now be the second element.                                                                                                                                                                            |
| removeLast    | -         | Node       | removes the last node from the list                                                                                                                                                                                                                                          |
| insertLast    | data      | -          | Inserts a new node with provided data at the end of the chain                                                                                                                                                                                                                |
| getAt         | index     | Node       | returns the node at the specified index                                                                                                                                                                                                                                      |
| removeAt      | index     | Node       | removes the node at the specified index                                                                                                                                                                                                                                      |
| insertAt      | index     | data       | Creates and inserts a new node at provided index. If index is out of bounds, add the node to the end of the list.                                                                                                                                                            |
| forEach       | callback  | -          | calls the callback function for each node in the list                                                                                                                                                                                                                        |
| for...of loop | -         | -          | iterates over the list and calls the callback function for each node in the list. Linked list should be compatible as the subject of a 'for...of' loop.                                                                                                                      |

## Creating Node Class

```js
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
```
> `next` has the default value of `null` because it is optional. It may not have a next node. 

## Linked List Class - Constructor

Will only have one property assigned to it, 'head', which is a reference to the first node in the list.

```js
class LinkedList {
  constructor() {
    this.head = null;
  }
}

const list = new LinkedList();
console.log(list) // null
list.head = '10';
console.log(list); // LinkedList { head: '10' }
```

## Linked List Class - insertFirst

```js
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
```

Example:
```js
const list = new LinkedList();
list.insertFirst('Hi There'); // List has one node
```

## Linked List Class - size

```js
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
```
> `node` is assigned to the head property of the list. If a node exists, the counter is incremented and the next node is assigned to `node`.

Example:
```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
list.size(); // returns 3
```

## Linked List Class - getFirst

```js
  getFirst() {
    return this.head;
  }
```

Example:
```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.getFirst(); // returns Node instance with data 'a'
```

## Linked List Class - getLast

```js
getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
```

Example:
```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.getLast(); // returns node with data 'a'
```

## Linked List Class - clear

Empties the linked list of any nodes.

```js
  clear() {
    this.head = null;
  }
```

Example:
```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.clear();
list.size(); // returns 0
```

## Linked List Class - removeFirst

Removes only the first node of the linked list. The list's head should now be the second element.

```js
  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }
```

Example:
```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.removeFirst();
list.getFirst(); // returns node with data 'a'
```

## Linked List Class - removeLast

Removes the last node of the chain.

One way to approach problem is to create two variables to keep track of the previous node and the current node. Iterate through the linked list and as soon as we find a next value of null, this means we are at the end of our chain. Therefore, we set the previous nodes next property to null. 

```js
removeLast() {
  //if the list is empty
  if (!this.head) {
    return null;
  }
  //if there is only one node
  if (!this.head.next) {
    this.head = null;
    return;
  }
  let previous = this.head;
  let node = this.head.next;
  while (node.next) {
    previous = node;
    node = node.next;
  }
  previous.next = null;
}
```

Example:
```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.removeLast();
list.size(); // returns 1
list.getLast(); // returns node with data of 'b'
```

## Linked List Class - insertLast

Inserts a new node with provided data at the end of the chain.

Need to set the current last node's next property to the new node.

```js
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
      //...
insertLast(data) {
    const last = this.getLast();

    if (last) {
      // there are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // the chain is empty
      this.head = new Node(data);
    }
  }
```

Example:
```js
const list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertLast('c');
list.getLast(); // returns node with data 'C'
```

## Linked List Class - getAt

Returns the node at the provided index.

- create a temp variable to keep track of the current node.
- create a counter variable to keep track of the index.
- set up the while loop to iterate through the linked list until the counter is equal to the index.

```js
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
```

## Linked List Class - removeAt

  Removes the node at the provided index.

```js
  removeAt(index) {
    if (!this.head) {
      return null;
    }
    // if the index is 0, remove the head
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    // set up the temp variable to keep track of the previous node
    const previous = this.getAt(index - 1);
    // the index is outside of the chain
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
```