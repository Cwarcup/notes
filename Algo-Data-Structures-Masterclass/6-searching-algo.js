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
  return -1
}

linearSearch([34,51,1,2,3,45,56,687], 100)

// Binary Search 

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

// Binary Search BIG O

// Naive String Search