Let's spend a couple minutes analyzing the things we do all the time in JS: working with Arrays, Objects, and built-in methods.

# Big O of Objects

Unordered, key value pairs.

```
let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
```

#### When to use objects

- When you don't need order
- When you need fast access / insertion and removal

Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(1)

When you don't need any **ordering**, objects are an excellent choice!

Searching refers to checking if a given object has a certain value somewhere.
Accessing refers to finding the key, which is much faster.

#### Big O of Object Methods

- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty - O(1)

`console.log(Object.keys(instructor)); // [ 'firstName', 'isInstructor', 'favoriteNumbers' ]`
This is O(n) time because we have to add another key to the array for every key we have.
Same thing occurs with Object.values

`instructor.hasOwnProperty("firstName")` == true
Much faster.

---

# Arrays

- ordered lists.

```
let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];
```

#### TO USE ARRAYS

- When you need order
- When you need fast access / insertion and removal (sort of....)

### Big O of Arrays

Insertion - It depends....

- adding to the end is **O(1)**. Very easy.
- adding at the begining is **O(n)**. It requires us the reindex every element in the array.

Removal - It depends....

- adding to the end is **O(1)**. Very easy.
- adding at the begining is **O(n)**. It requires us the reindex every element in the array.

Searching - O(n) Using the value to find the index.

Access - O(1)

- If you have an index, you jump immediately to the data. Very fast.

### Big O of Array Operations

- push - O(1), constant. No reindex
- pop - O(1)
- shift - O(N)
- shift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N \* log N). Is larger than just O(n).
- forEach/map/filter/reduce/etc. - O(N)
