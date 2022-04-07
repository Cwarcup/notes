// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // option 1:
  // const chunked = [];

  // for (let char of array) {
  //   const last = chunked[chunked.length - 1];

  //   if (!last || last.length === size) {
  //     chunked.push([char]);
  //   } else {
  //     last.push(char);
  //   }
  // }

  // return chunked;

  // option 2 with slice()
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
module.exports = chunk;
