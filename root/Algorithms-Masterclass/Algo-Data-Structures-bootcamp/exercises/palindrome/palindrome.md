# Palindrome

Directions:
Given a string, return true if the string is a palindrome or false if it is not.  

Palindromes are strings that form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.

Examples:
- palindrome("abba") === true
- palindrome("abcdefg") === false

You are being asked, True or false, if the word is a palindrome.

---

Doing a direct comparison between the string and its return value. 
```js
function palindrome(str) {
  let newStr = str.split('').reverse().join('');
  return str === newStr;
}
```

---

Can use the `every` method to check if every element in the array is true.
```js
every((element, index, array) => { /* ... */ } )
```

The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
```js

const array = [1, 30, 39, 29, 10, 13];

array.every(value => value < 40);  // true, because all values in the array are less than 40.

```
You could use `every()` to check if every element in the array is true. However, the downside if you are doing a lot of extra comparisons. You only NEED to compare until you get halfway through the array.
```js
function palindrome(str) {     // option 2: use every() method
  return str.split('').every((character, index) => {
    return character === str[str.length -index -1]
  })
}

```

root/Algorithms-Masterclass/Algo-Data-Structures-bootcamp/exercises/palindrome/palindrome.md