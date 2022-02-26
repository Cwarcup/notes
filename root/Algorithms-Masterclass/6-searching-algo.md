# Searching Algorithms

Could be searching for a string within a string, or if a username is taken duriong the signup process.

## Linear Search

![linear search gif](https://www.tutorialspoint.com/data_structures_algorithms/images/linear_search.gif)

Have many different seach methods on arrays in JavaScript:

- indexOf()
- includes()
- find()
- findIndex()

But how do these functions work? They are checking every element **one at a time**.

Linear seach is moving at a **set interval** checking every element, **one at a time**.

Linear Seach Pseudocode:

- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found If the value is never found, return -1

```
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1
}
```

## Big O = O(n). As the number of values in the array, the more values you need to check.

### Linear Search BIG O

| O(1) | O(n)    | O(n)  |
| ---- | ------- | ----- |
| best | average | Worst |

---

## Binary Search

- Much faster
- You can eliminate **half** of the remaining elements at a time.
- only works on **sorted arrays**

## ![Binary Search](https://blog.penjee.com/wp-content/uploads/2015/04/binary-and-linear-search-animations.gif)

## **Divide and Conquer**

![binary1](/images/binary1.png)
![binary2](/images/binary2.png)
![binary3](/images/binary3.png)

### Binary Search PseudoCode

- This function accepts a **sorted array** and a **value**
- Create a left pointer at the **start of the array**, and a right pointer at the **end of the array** `arr.length-1`
- **Condition**: While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
- If you never find the value, return -1

```
function searchBinary(arr,n) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)
}

binarySearch([2,5,6,9,13,15,28,30], 15)
// [2,5,6,9,13,15,28,30]
//  S     M           E
```

```
function binarySearch(arr,n) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)

    while(arr[middle] !== n) {
        console.log(start, middle, end)
        if (n < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        // now need to recalcualte middle value
        middle = Math.floor((start + end) / 2)
    }
    console.log(start, middle, end)
    return middle;
}

binarySearch([2,5,6,9,13,15,28,30], 15)
// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M               E
// [2, 5, 6, 9, 13, 15, 28, 30]
//               S   M       E
```

Issue: if out desired value `n` is not in our array, it will go on infinitly.

```
function binarySearch(arr, val) {
    // index of each position
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2)
            console.log(start, middle, end)

    while (arr[middle] !== val && start <= end) {
        if(arr[middle] < val) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    } else {
        return -1;
    }

}

binarySearch([2,5,6,9,13,15,28,30], 150) // -1
```

---

### Binary Search BIG O

| O(1) | O(log n) | O(log n) |
| ---- | -------- | -------- |
| best | average  | Worst    |

![Big O Graph](https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg)

---

## Naive String Search

Most basic solution.

- Suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involves checking pairs of characters individually

### PseudoCode String Search

- define a function that takes a string and a pattern you're looking for
- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment - the count of matches
- Return the count

```
function searchString(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(pattern[j], str[i]);
      if (pattern[j] !== str[i + j]) {
        break; //anytime there is not a match, break.
      }
        if(j === pattern.length -1) {
            console.log('found one!')
            count++;
        }
    }
  }
    return count;
}

searchString('lorie loled', 'lol'); // 1
searchString('lorie loled', 'l');
```

cleaned up:

```

```
