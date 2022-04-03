// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
}

module.exports = reverse;

// A string can be converted to an array with the split() method
// call reverse on the new array
// join the array back into a string
