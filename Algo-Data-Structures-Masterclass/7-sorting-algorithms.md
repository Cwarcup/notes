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

## Bubble Sort

Generally isn't very efficient, but is a god problem to learn.

Goal here is to have largest valuest at the end, bubble to the top.

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
  }
  return arr;
}

bubbleSort([37,45,29,8]);


[37, 45, 29, 8] 37 45
[37, 45, 29, 8] 45 29
[37, 29, 45, 8] 45 8
[37, 29, 8, 45] 37 29
[29, 37, 8, 45] 37 8
[29, 8, 37, 45] 29 8
[8, 29, 37, 45]
```

## Bubble Sort Implementation

## Bubble Sort Optimization
