# Vowels

Directions:

Write a function that returns the number of vowels
used in a string. 

Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.


Examples:
```js
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0
```

## Solution 1: iteratrive solution

- create a counter variable.
- iterate through all characters the string.
- if character is a vowel, increment counter.
```js
function vowels(str) {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u']

  for(let char of str.toLowerCase()) {
    // if the char includes 'eaiou'...
    if(checker.includes(char)){
      count++;
    } 
  }
  return count;
}
```

## Solution 2: regex solution
- use the `g` (global) flag to search for all vowels in the string. NOT stop at the first match.
- use the `i` (ignore case) flag to ignore case.

```js
function vowels(str) {
 const matches =  str.match(/[aeiou]/gi);
  // if no matches, matches is null
  // if there are matches, it will return an array of the matches. 

 return matches ? matches.length : 0;
}
```