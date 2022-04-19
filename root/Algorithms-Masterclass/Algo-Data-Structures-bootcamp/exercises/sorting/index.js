// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      // if found element with lesser value
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      // swap
      let lesser = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  // base case
  if(arr.length === 1) {
    return arr;
  }

  // divide array into two equal halves
  const center = Math.floor(arr.length / 2);     // returns center index

  const left = arr.slice(0, center)
  const right = arr.slice(center)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

// console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
// console.log(selectionSort([100, -40, 500, -124, 0, 21, 7]));
// console.log(merge([-30, 22], [0, 97]));
console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]));


// module.exports = { bubbleSort, selectionSort, mergeSort, merge };
