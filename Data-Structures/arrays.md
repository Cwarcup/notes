# Arrays

Sometimes called lists and orders data sequentially. If you need to iterate over some data, one by one, arrays are the best choice.
![Arrays](/images/arrays.png)

```
const string = ['a', 'b', 'c', 'd'];
//4*4 = 16 bytes of storage.
```

We are basically storing 'a', 'b', 'c', 'd' sequentially in ram.

```
//push
strings.push('e');
console.log(strings) //[ 'a', 'b', 'c', 'd', 'e' ]

//pop
strings.pop();
console.log(strings)
```

Both `pop` and `push` are `O(1)` operations because we are not looping through anything. Just adding one thing to the end.

What if we wanted to add something at the begining of the array?

```
//unshift
strings.unshift('x');
console.log(strings) // [ 'x', 'a', 'b', 'c', 'd' ]
```

What will happen to the time complexity of this operation?
This operation will be slower than the previous. Remember, strings are stored using indexes. When we use unshift, we are changing the index of all the numbers. You have to itterate or loop through all the indexes.
This makes the operation **O(n)**.

What about adding something in the middle of the array? `splice()`

```
//splice()
strings.splice(2, 0, 'Alien')
console.log(strings) // [ 'a', 'b', 'Alien', 'c', 'd' ]
```

Basically tells go to index of 2, do not delete anything, and insert `'alien'`. We have shifted `c` and `d`. Therefore, our BigO is O(n).

Now this is why loopup() and push() are fast for arrays, and why insert() and delete() are slower. Therefore, it may not be best to use arrays if you need to insert or delete all the time.

## Static vs Dynamic Arrays

**Static** arrays limitations:

- are fixed in size. Meaning, you need to specificy the number of elements your array will hold ahead of time.

**Dynamic** Arrays

- allow you to copy and rebuild an array at a new location. Therefore, if we need to add another item to our array, we copy the array, allocate more memory, paste the new item + the new item.

In JavaScript we do not need to deal with static arrays. By default JS uses dynamic.

## Implementing an Array

How do we actually build an array? In JavaScript, arrays are just objects with integer based keys.

```
class MyArray {
  constructor() { // initially run
    this.length = 0;
    this.data = {};
  }
  get(index) { // is a method. Could be named anything.
    return this.data[index] //this.data refers to the data we created in the constrcutor.
  }
}

const newArray = new MyArray();

console.log(newArray) // MyArray { length: 0, data: {} }
console.log(newArray.get(0)) // undefined. Because we have no items in the object.
```

Lets add a `push()` method: add an item to the end of the array.

```
class MyArray {
  constructor() { // initially run
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index] //this.data refers to the data we created in the constrcutor.
  }
  push(item) {
    this.data[this.length] = item;
    //adding item to data, at index of this.length
    this.length++ //increasing the number of indexes.
    return this.length;
  }
}

const newArray = new MyArray();
newArray.push('hi')
console.log(newArray) // MyArray { length: 1, data: { '0': 'hi' } }
```

We have added an item `'hi'` with index of 0 to our array.

Lets add the `pop()` method: delete the last item in the array.

```
  pop() {
    const lastItem = this.data[this.length-1]; //we want the last item in the data
    delete this.data[this.length-1];
    this.length--; //shorten the array
    return lastItem;
  }

const newArray = new MyArray();

newArray.push('hi')
newArray.push('you');
newArray.push('!');
console.log(newArray) // MyArray { length: 3, data: { '0': 'hi', '1': 'you', '2': '!' } }

newArray.pop();
console.log(newArray) // MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }
```
