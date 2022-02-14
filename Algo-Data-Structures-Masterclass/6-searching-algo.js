// Searching Algorithms

// Linear Seach Pseudocode:

// - This function accepts an array and a value
// - Loop through the array and check if the current array - element is equal to the value
// - If it is, return the index at which the element is found If the value is never found, return -1

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);

// Binary Search

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

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);

// Naive String Search

function searchString(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) break; 
      if(j === pattern.length -1) count++;
    }
  }
  return count;
}

console.log(searchString('lorie loled', 'lol')); // 1
searchString('lorie loled', 'l');

