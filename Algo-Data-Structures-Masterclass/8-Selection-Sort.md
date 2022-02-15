# Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

![selection sort](https://miro.medium.com/max/600/1*bmfRxyIQZEK0Iu5T6YV1sw.gif)

![Another Selection sort](https://miro.medium.com/max/1400/1*5WXRN62ddiM_Gcf4GDdCZg.gif)

Takes the minimum element and swaps it with the first element.

Selection Sort is quite straightforward, but not very efficient. On the first pass, the smallest value is found and moved to index 0. The remainder of the unsorted array is then searched for the new minimum, which is placed at index 1, and so on. For an array of n items, his will require n-passes.

Finds the minimum value, then swaps it to the begining.

![selection](/images/selectionsort.png)

---

## Selection Sort Pseudocode

1. Store the **first** element as the **smallest** value you've seen so far.
2. Compare this item to the **next item** in the array until you find a smaller number.
3. If a smaller number **is found**, designate that smaller number to be the **new "minimum"** and continue until the end of the array.
4. If the "minimum" is not the value (index) you initially began with, swap the two values.
5. Repeat this with the next element until the array is sorted.

---

```
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i // this is the only thing we have seen, first position.
        for (let j = i+1; j < arr.length; j++) {
            console.log(i, j)
        }
    }
    return arr;
}

selectionSort([24,22,10,19,17]);

// just comparing the indexes of each item
0 1
0 2
0 3
0 4
1 2
1 3
1 4
2 3
2 4
3 4
```

---

Now we just need a simple conditional to **compare** the array at lowest, to the current value of j.

```
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i // this is the only thing we have seen, first position.
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        // swap
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp
            console.log(arr)
    }
    return arr;
}

selectionSort([24,22,10,19,17]);

[10, 22, 24, 19, 17]
[10, 17, 24, 19, 22]
[10, 17, 19, 24, 22]
[10, 17, 19, 22, 24]
[10, 17, 19, 22, 24]
[10, 17, 19, 22, 24]
```

Need to implement step 4: If the "minimum" is not the value (index) you initially began with, swap the two values.

```
function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let lowest = i // this is the only thing we have seen, first position.
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            //SWAP
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp
        }

    }
    return arr;
}

selectionSort([24,22,10,19,17]);
```

---

Another way:

```
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                //swap;
                temp = arr[j];
                arr[j] = arr[lowest];
                arr[lowest] = temp;
            }
        }
    }
    return arr;
}

selectionSort([2,4,1,15,20])
```

---

ES2015 Syntax:

```
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);

```
