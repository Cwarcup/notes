# Singly Linked List

### What is a linked list?

- data structure that contains a **head, tail** and **length property**.
- consists of nodes, and each **node** has a **value** and a **painter** to another node or null (if last node).
- but there is no index...
- each element is known as a node.

![linked list](/images/linkedlist.png)

- each node is connected to the next. To get to node 2 you must pass through 4,5,8.

Also see [here](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list) for more:

- each element points to the next.
- each node is composed of data and a reference (in other words, a link) to the next node in the sequence.
- A drawback of linked lists is that access time is linear (and difficult to pipeline). 

![linked list](https://assets.digitalocean.com/articles/alligator/js/linked-lists-implementation/linked-list-insert.gif)

### Comparisons with Arrays
- Lists 
  - Do not have indexes!
  - Connected via nodes with a next pointer
  - Random access is not allowed

- Arrays
  - Indexed in order!
  - Insertion and deletion can be expensive
  - Can quickly be accessed at a specific index

---

### Pushing pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
- Return the linked list

```
Add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n ← node(value)
  if head = ø // no head
    head ← n
    tail ← n
  else
    tail.next ← n
    tail ← n
  end if
end Add
```

---

```
// piece of data = val
// reference to next node = next

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
      const newNode = new Node(value);

      // If there is no head yet let's make new node a head.
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else { // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    
      }
}

var list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push("3")
list.push("4")

// head: Node {val: '1', next: Node}
// length: 4
// tail: Node {val: '4', next: null}
```

## Popping
- removing a node from the end of the Linked List.

### Popping pseudocode

1. If there are no nodes in the list, return undefined
1. Loop through the list until you reach the tail
1. Set the next property of the 2nd to last node to be null
1. Set the tail to be the 2nd to last node
1. Decrement the length of the list by 1
1. Return the value of the node removed

```
// piece of data = val
// reference to next node = next

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
      const newNode = new Node(value);

      // If there is no head yet let's make new node a head.
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else { // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    
      }
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = this.head;
        while(current.next) { // while we have a next value...
            newTail = current; //set the previous item (newTail) to the current value
            current = current.next // set current value to next value
        }
        this.tail = newTail; // now we can set our new tail.
        this.tail.next = null; // set the last item to null, severing the connection.
        this.length--;
        if(this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return current;
    }
}

var list = new SinglyLinkedList()

list.push("1")
list.push("2")
list.push("3")
list.push("4")

list.pop() // Node {val: '4', next: null} removes the 4

list //head: Node {val: '1', next: Node}
     //length: 3
     //tail: Node {val: '3', next: null}
```
