// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution 1
// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u']

//   for(let char of str.toLowerCase()) {
//     // if the char includes 'eaiou'...
//     if(checker.includes(char)){
//       count++;
//     } 
//   }
//   return count;
// }

function vowels(str) {
 const matches =  str.match(/[aeiou]/gi);
  // if no matches, matches is null
  // if there are matches, it will return an array of the matches. 

 return matches ? matches.length : 0;
}
console.log(vowels('Hi Thereeeeee!'));

module.exports = vowels;
