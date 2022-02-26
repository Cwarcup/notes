# Sorting Algorithms

Sorting is the process of **rearranging** the items in a collection (e.g. an array) so that the items are in some kind of order.

Examples

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

---

Why do we need this?

- Incredibly common task, its good to understand how it works
- There are many ways of sorting things, and there are pros and cons of each
- classic interview topic

## Built-in JavaScript Sorting

[Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

But doesn't as you may expected.

This is expected:

```
[ "Steele", "Colt", "Data Structures", "Algorithms" ].sort();
```

`[ "Algorithms", "Colt", "Data Structures", "Steele" ]`

Sorting numbers is not exactly what we expect...

```
[ 6, 4, 15, 10 ].sort();
```

`[ 10, 15, 4, 6 ]`

**compareFn** (Optional)
Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value

- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value

  - If it returns a **negative** number, a should come **before** b
  - If it returns a **positive** number, a should come **after** b,
  - If it returns **0**, a and b are the **same** as far as the sort is concerned

---

Example: comparing numbers

```
  function numberCompare(num1, num2) {
  return num1 - num2;
  }

[ 6, 4, 15, 10 ].sort(numberCompare);
// [ 4, 6, 10, 15 ]

```

---

Example 2: sorting by string length

```
function compareByLength(str1, str2) {
return str1.length - str2.length;
}

['Curtis', 'Gilly', 'Hana'].sort(compareByLength)
// ['Hana', 'Gilly', 'Curtis']
```

This is how we can use the built in `sort()` method for our particular needs.

---

# Bubble Sort

Generally isn't very efficient, but is a good problem to learn.

Goal here is to have **largest valuest at the end**, bubble to the top.

![Bubble](https://www.resultswebdev.com/wp-content/themes/results-website-design/uploads/bubble-sort-animation2.gif)

As we loop through each item, we compase it to the next item.
If the second item is LARGER, you swap.

![bubble swap](/images/bubbleswap.png)

Remember, as you complete one loop, the amount of items you need to sort decreases.

---

### How does swapping work?

Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)

ES5:

```
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

ES2015

```
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```

Both are fine.

---

### BubbleSort Pseudocode

1. With a variable called `i`, start **looping** from the **end** of the array towards the beginning
2. Start an **inner loop** with a variable called `j` from the **beginning** until `i - 1`
3. If `arr[j]` is **greater** than `arr[j+1]`, **swap** those two values!
4. Return the sorted array

---

## Bubble Sort Implementation

```
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
          // SWAP!
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
    console.log("ONE PASS COMPLETE")
  }
  return arr;
}

bubbleSort([37,45,29,8]);

[37, 45, 29, 8] 37 45
[37, 45, 29, 8] 45 29
[37, 29, 45, 8] 45 8
ONE PASS COMPLETE
[37, 29, 8, 45] 37 29
[29, 37, 8, 45] 37 8
ONE PASS COMPLETE
[29, 8, 37, 45] 29 8
ONE PASS COMPLETE
[8, 29, 37, 45]

```

---

ES2015 Version:

```
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
```

---

**Simple Version**

```
function bubbleSort(arr) {

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

            }
        }
    }
    return arr;
}

bubbleSort([2,4,1,15,20])
```

Or

```
function bubbleSort(arr) {

    const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) { //swap
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
```

## Bubble Sort Optimization

If you have an array that is almost sorted, the function will continue and check every value. We can short circuit this by checking if the last time through the array, no swaps were done, then you can just return.

Non-optimized

```
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}


bubbleSort([8,1,2,3,4,5,6,7]);
// array only has ONE number that is not in order.

[8, 1, 2, 3, 4, 5, 6, 7] 8 1
[1, 8, 2, 3, 4, 5, 6, 7] 8 2
[1, 2, 8, 3, 4, 5, 6, 7] 8 3
[1, 2, 3, 8, 4, 5, 6, 7] 8 4
[1, 2, 3, 4, 8, 5, 6, 7] 8 5
[1, 2, 3, 4, 5, 8, 6, 7] 8 6
[1, 2, 3, 4, 5, 6, 8, 7] 8 7
[1, 2, 3, 4, 5, 6, 7, 8] 1 2
[1, 2, 3, 4, 5, 6, 7, 8] 2 3
[1, 2, 3, 4, 5, 6, 7, 8] 3 4
[1, 2, 3, 4, 5, 6, 7, 8] 4 5
[1, 2, 3, 4, 5, 6, 7, 8] 5 6
[1, 2, 3, 4, 5, 6, 7, 8] 6 7
[1, 2, 3, 4, 5, 6, 7, 8] 1 2
[1, 2, 3, 4, 5, 6, 7, 8] 2 3
[1, 2, 3, 4, 5, 6, 7, 8] 3 4
[1, 2, 3, 4, 5, 6, 7, 8] 4 5
[1, 2, 3, 4, 5, 6, 7, 8] 5 6
[1, 2, 3, 4, 5, 6, 7, 8] 1 2
[1, 2, 3, 4, 5, 6, 7, 8] 2 3
[1, 2, 3, 4, 5, 6, 7, 8] 3 4
[1, 2, 3, 4, 5, 6, 7, 8] 4 5
[1, 2, 3, 4, 5, 6, 7, 8] 1 2
[1, 2, 3, 4, 5, 6, 7, 8] 2 3
[1, 2, 3, 4, 5, 6, 7, 8] 3 4
[1, 2, 3, 4, 5, 6, 7, 8] 1 2
[1, 2, 3, 4, 5, 6, 7, 8] 2 3
[1, 2, 3, 4, 5, 6, 7, 8] 1 2
[1, 2, 3, 4, 5, 6, 7, 8]
```

The function still makes every comparison, without making any swap.

**Solution**: Make a variable called `noSwapps`, and if it's true it will break out of the loop.

```
// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps; // create a variable for noSwaps
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
        console.log( arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false; // remain false because swap occured
      }
    }
    if(noSwaps) break; //only break out when no swaps were done.
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]

[8, 1, 2, 3, 4, 5, 6, 7] 8 1
[1, 8, 2, 3, 4, 5, 6, 7] 8 2
[1, 2, 8, 3, 4, 5, 6, 7] 8 3
[1, 2, 3, 8, 4, 5, 6, 7] 8 4
[1, 2, 3, 4, 8, 5, 6, 7] 8 5
[1, 2, 3, 4, 5, 8, 6, 7] 8 6
[1, 2, 3, 4, 5, 6, 8, 7] 8 7
[1, 2, 3, 4, 5, 6, 7, 8] 1 2
[1, 2, 3, 4, 5, 6, 7, 8] 2 3
[1, 2, 3, 4, 5, 6, 7, 8] 3 4
[1, 2, 3, 4, 5, 6, 7, 8] 4 5
[1, 2, 3, 4, 5, 6, 7, 8] 5 6
[1, 2, 3, 4, 5, 6, 7, 8] 6 7
[1, 2, 3, 4, 5, 6, 7, 8]
```
