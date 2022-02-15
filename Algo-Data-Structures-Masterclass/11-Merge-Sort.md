# Intermediate Sorting Algorithms

The alogorithms we have already learnt do not scale well.

# Merge Sort

- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array. Is divide and conquer approach.

![merge](https://codepumpkin.com/wp-content/uploads/2017/10/MergeSort_Avg_case.gif)

![merge sort photo](https://codepumpkin.com/wp-content/uploads/2017/10/mergeSort.png)

## How to merge arrays

`merge([1,10,50], [2,14,99,100])` -> `[1,2,10,14,50,99,100]`

- useful to **first** implement a function responsible for merging two arrays
- given two arrays which are sorted, this herlper function should create a new array which is also coreted, and consists of all of the elements in the two input arrays.

### Merging Arrays Pseudocode

1. Create an empty array, take a look at the smallest values in each input array
2. While there are still values we haven't looked at...
3. If the value in the first array is **smaller** than the value in the second array, push the **value in the first array into our results** and move on to the next value in the first array
4. If the value in the first array is **larger** than the value in the second array, push the value in the **second array into our results** and move on to the next value in the second array
5. Once we exhaust one array, push in all remaining values from the other array

```
 i          j
[1,10,50]  [2,14,99,100] push smaller, i, i++,
         [1]

   i        j
[1,10,50]  [2,14,99,100]  push smaller, j, j++
       [1, 2]

   i           j
[1,10,50]  [2,14,99,100]  push smaller, i, i++
     [1, 2, 10]

      i        j
[1,10,50]  [2,14,99,100]  push smaller, j, j++
    [1, 2, 10, 14]

      i           j
[1,10,50]  [2,14,99,100]  push smaller, i, i++
   [1, 2, 10, 14, 50]

      i           j
[1,10,50]  [2,14,99,100]  push remaining
[1, 2, 10, 14, 50, 99, 100] final array
```

---

### Implementation

```
function merge(arr1, arr2) {

    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) { //if arr1 smaller
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]); // case for arr2 is smaller
            j++
        }
    }

    return results;
}


merge([1,10,50], [2,14,99,100])

//[1, 2, 10, 14, 50]
```

This is incompletem. Missing the `99, 100` from arr2.
Need to push the remaining.

```
function merge(arr1, arr2) {

    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) { //if arr1 smaller
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]); // case for arr2 is smaller
            j++
        }
    }
    //for when we hit the end of one of the arrays. Push the remaining values in the array.
    //in example, arr1 has hit the end. But arr2 still has values to push to results.
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }

    return results;
}


merge([1,10,50], [2,14,99,100])
//[1, 2, 10, 14, 50, 99, 100]
```
