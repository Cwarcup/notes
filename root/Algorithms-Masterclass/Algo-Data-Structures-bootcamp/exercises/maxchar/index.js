// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) { // create the object with keys being characters, and values being freq.
    if(!obj[char]) { // if key does not exist, create key and value is 1.
      obj[char] = 1;
    } else {
      obj[char]++
    }
  }

  for(let char in obj) { // for in loop to compare the obj values to current 'max' number
    if(obj[char] > max) {
      max = obj[char];
      maxChar = char
    }
  }

  return maxChar
}

console.log(maxChar('apple 1231111'));

module.exports = maxChar;
