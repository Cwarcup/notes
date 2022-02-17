# Quick Sort

- Similar to merge sort, this exploits the fact that arrays of **0 or 1 element are always sorted**
- Works by selecting one element (called the **"pivot"**) and finding the **index** where the pivot should end up in the sorted array.
- Once the pivot is position appropriately, quick sort can be applied on either side of the pivot.

### How does it work?

Say we have an array `[5, 2, 1, 8, 4, 7, 6, 3]`
We pick the **pivot**. Let's use `5` as an example.
We are then going to move all number that are **less than the pivot (5)** to the **left** of it, and all numbers that are **greater** to the **right**.

`[5, 2, 1, 8, 4, 7, 6, 3]` if `5` is the pivot, then **2,1,4,3** need to move **left**

![quick sort 1](/images/quicksort1.png)

Move 5 to the correct spot. We needed to move it UP 4 indexes because we had 4 numbers that are les than 5.

Now we recursively repeat the process on the left and right side.

`[3, 2, 1, 4, 5, 7, 6, 8]` so now the pivot is 3. 3 needs to move up 2 indexes because 2 and 1 are less than 3.

![quick sort 2](/images/quickSort2.png)

Now 3 is in the correct spot. 3 will have an index of 2, 5 has an index of 4.

`[2, 1, 3, 4, 5, 7, 6, 8]` Now 2 is the pivot. The only number smaller than it is 1, therefore 2 moves up 1 index.

Now we are done with the left side because our remaining array only has 1 item.

Now we need to do the right side `[7, 6, 8]`

![quick sort 3](/images/quickSort3.png)

Pick our new pivot, 7. Since 7 is larger than 6, we need to move 7 up one index.

Array is now sorted.

---

1. **pick pivot**. 5 in this case. Compare it to the next next index.
   ![quick sort 4](/images/quickSort4.png)
2. Keep note of the number of elements **smaller** than the **pivot**. Store this in variable called `storedIndex`
3. When **smaller** element found, swap the smaller element (index of i) with **`storedIndex`**
   ![quick sort 5](/images/quickSort5.png)
   ![quick sort 6](/images/quickSort6.png)
4. 3 <= 5 (pivot) is true. Swapping index 7 (value = 3) with element at storeIndex 4 (value = 8). (Value of storeIndex is now = 5).
   ![quick sort 7](/images/quickSort7.png)
5. Swap pivot and last storedIndex-1
   ![quick sort 8](/images/quickSort8.png)
6. Swapping pivot (index = 0, value = 5) with element at storeIndex - 1 (index = 4, value = 3).
   ![quick sort 9](/images/quickSort9.png)
7. Pivot is now at its sorted position.
8. Working on partition [3,2,1,4] (index 0 to 3). Selecting 3 as pivot. (storeIndex = 1).
9. Checking if 2 < 3 (pivot)
   ![quick sort 10](/images/quickSort10.png)
   2 <= 3 (pivot) is true. Swapping index 1 (value = 2) with element at storeIndex 1 (value = 2). (Value of storeIndex is now = 2).
10. and so on for right side.
11. Now work on the left side
    ![quick sort 11](/images/quickSort11.png)
12. list is sorted.

## Pivot Helper

- In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter!
- The helper should do this in place, that is, it should not create a new array
- When complete, the helper should return the index of the pivot

## Picking a Pivot

- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
- For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)

![quick sort pivot](/images/pivotHelper.png)

---

## Pivot Pseudocode

1. It will help to accept three arguments: an **array**, a **start index**, and an **end index** (these can default to 0 and the array length minus 1, respectively)
1. Grab the **pivot** from the **start** of the array
1. **Store** the current pivot index in a variable (**this will keep track of where the pivot should end up**)
1. Loop through the array from the start until the end
1. If the pivot is **greater** than the **current element**, **increment** the **pivot index variabl**e and then swap the **current element** with the **element at the pivot index**
1. Swap the starting element (i.e. the **pivot**) with the **pivot index**
1. Return the pivot index

---

Pivot Helper Function:

```
function pivot(arr, start=0, end=arr.length+1) {

    //swap function
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    var pivot = arr[start]
    var swapIndex = start;

    for(var i = start; i < arr.length; i++) {
        if(pivot > arr[i]){
            swapIndex++; // something is bigger than our pivot
            // need to swap 2 with 8
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex) //swap start with swapIndex after loop completes
    // remember: start is the index of pivot.

    return swapIndex;
}

pivot([4,8,2,1,5,7,6,3]) // 3
```

final array is [3, 2, 1, 4, 5, 7, 6, 8]. Initial pivot has moved to index 3.

## Quicksort Pseudocode

1. Call the pivot helper on the array (see above function)
1. When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
1. Your base case occurs when you consider a subarray with less than 2 elements

```
function quickSort(arr, left=0, right=arr.length-1) {

    if(left < right) {          // base case
      let pivotIndex = pivot(arr, left, right) //3 (moved 4 to index 3)
      quickSort(arr, left=0, pivotIndex-1);
          //left
      quickSort(arr, pivotIndex+1, right);
          //right
    }
    return arr;
}

quickSort([4,6,9,1,2,5,3]) // [1, 2, 3, 4, 5, 6, 9]
```

Base case:

```
L            R
[3,2,1,4,6,9,5]
L          R
[3,2,1,4,6,9,5]
L        R
[3,2,1,4,6,9,5]
L      R
[3,2,1,4,6,9,5]
L    R
[3,2,1,4,6,9,5]
L  R
[3,2,1,4,6,9,5]
L=R
[3,2,1,4,6,9,5]
L < R //break
[3,2,1,4,6,9,5]
```

[3,2,1,4,6,9,5] // after let pivotIndex = pivot(arr, left, right)

now we only want to look at the array that is RIGHT of the pivot index.

use `quickSort(arr, left=0, pivotIndex-1)`
returns [3,2,1]

now for the left array `quickSort(arr, pivotIndex+1, right);`

## Big O

O(n log (n))

# Comparison Big O

- worse
- Bubble Sort - O(n^2)
- Insertion Sort - O(n^2)
- Selection Sort - O(n^2)
- Quick Sort - O(n log (n))
- Merge Sort - O(n log (n))
- better
