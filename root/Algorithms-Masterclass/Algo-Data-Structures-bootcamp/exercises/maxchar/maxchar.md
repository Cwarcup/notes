# Max Character

Directions: Given a string, return the character that is most commonly used in the string.

Examples:
```js
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"
```

# Common String Questions
- What is the most common character in the string?
- Does string A have the same characters as string B? (is it an anagram?)
- Does the given string have any repeated characters in it?

If you see anything like this (counting or comparing chars in a string) you should do the following:

Convert the string into an **object**.
- keys are the characters from the string
- values are the number of times the character appears in the string

Steps:
- create new string
- create empty object
- add each char to the object. Could use `for of loop`. 
- determine the max value in the object. Can use a `for in loop`.

```js
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

  return maxChar;
}
```