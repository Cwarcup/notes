# Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted.
Instead of finding the largest element at a time, it takes each element and places in the sorted portion of the array.

![inserted sort](/images/inserted-sort.png)

![insertion](https://miro.medium.com/max/600/1*bmfRxyIQZEK0Iu5T6YV1sw.gif)

## Insertion Sort Pseudocode

1. Start by picking the **second** element in the array
2. Now compare the second element with the **one** before it and **swap** if **necessary**.
3. Continue to the next element and if it is in the **incorrect** order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
4. Repeat until the array is sorted.

## Insertion Sort Implementation

So if `i = 4`, then `j=76`.

```
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for( let j = i-1; j >= 0; j--) {
            ...
        }
    }
    return arr;
}

insertionSort([2,1,9,76,4])
```

```
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]; // saves your current variable in currentVal
        for( var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
          arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
        console.log(arr)
    }
    return arr;
}

insertionSort([2,1,9,76,4])
```

A Different Method:
