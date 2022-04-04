// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1 using reverse helper
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// A string can be converted to an array with the split() method
// call reverse on the new array
// join the array back into a string

//////////////////////////////////////////////////////////////////////

// Solution 2: use a for-loop

// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

//////////////////////////////////////////////////////////////////////

// function reverse(str) {
//   return str.split('').reduce((rev, char) => (rev = char + rev), '');
// }

reverse('apple');

module.exports = reverse;
