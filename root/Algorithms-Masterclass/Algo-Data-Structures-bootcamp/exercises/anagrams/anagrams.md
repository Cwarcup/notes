# Anagrams

Anagrams are words that contain the same letters, but in a different order. For example, the word "anagram" can be rearranged to make another word, "nag a ram".

Directions:

Check to see if two provided strings are anagrams of each other.

One string is an anagram of another if it uses the **same characters** in the same **quantity**. Only consider characters, **not spaces or punctuation**. Consider capital letters to be the same as lower case.


Examples:
```js
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
```

Tips for dealing with considering only characters, spaces and punctuation:
- use [regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) to remove all non-alphanumeric characters. The `/w` character class matches any alphanumeric character. Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%" and "É" in "Émanuel".

```js
const word = 'HI there!!!';
 
let newWord = word.replace(/[^\w]/g, "").toLowerCase()

console.log(newWord); // hithere
```

Can compare keys of objects to see if they are equal.
```js
const obj = {
  a: 1,
  b: 1,
  c: 1,
}

console.log(Object.keys(obj).length);
```
- want to create a character map using an object to compare the two strings.
- count the number of keys in our object and compare it to the number of keys in the other object. OR compare length of both strings. 

```js
function anagrams(stringA, stringB) {
  // use helper to create object of each string
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  // return false if they number of keys do not match
  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for(let char in aCharMap) {
    if(aCharMap[char] !== bCharMap[char]) {
      return false;
    }

  }
  return true // if both strings pass the tests
}

// helper function to create character map
function buildCharMap(str) {
  const charMap = {};
  
  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

console.log(anagrams('rail safety', 'fairy tales'));
```

# Option 2

Can use the `sort()` method to sort the characters in a string.

```js
const numbers = [ 10, 30, 5, -90];
console.log(numbers.sort()); // [-90, 5, 10, 30]
```

1. Clean up both strings using regex to remove all non-alphanumeric characters.
2. use `toLowerCase()` to make both strings lowercase.
3. sort both strings using `sort()`
4. If the two strings are identical, they are anagrams.

```js
// option 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
```