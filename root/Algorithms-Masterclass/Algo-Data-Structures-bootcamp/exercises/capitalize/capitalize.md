# Capitalize 

Directions:

Write a function that accepts a string.  The function should
capitalize the first letter of **each word** in the string then
return the capitalized string.


Examples:
```js
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'
  ```

Option 1:
- can use the `slice()`  method. `slice(start, end)`

1. make an empty array 'word'.
2. use `split()` on the input string to split the string into an array of words.
3. For each word in the array...
   - use `toUpperCase()` on the first letter of the word.
   - join first letter with rest of the string
   - push results into 'word' array.
4. Join the 'word' array into a string.

```js
function capitalize(str) {
  let words = [];
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}
```

---

Option 2: 

1. Create an empty string called 'result'.
2. For each character in the string...
   - **IF** the character to the left is a **space**
     - use `toUpperCase()` on the character
     - push it into 'result'
   - **ELSE** 
     - push the character into 'result'.
3. Return 'result'.

```js
// option 2:
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
```