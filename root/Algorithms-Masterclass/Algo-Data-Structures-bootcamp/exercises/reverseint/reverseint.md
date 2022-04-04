# Reverse Integer

Directions:
Given an integer, return an integer that is the **reverse
ordering of numbers**.

Examples:
```  
  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9
  ```

Tricks:
- use `parseInt()` to convert any string to an integer.
- use `Math.sign()` to determine the sign of the number. Returns either -1 or 1. 
- use `toString()` to convert a number into a string.

```js
function reverseInt(n) {
  let newNum = parseInt(n.toString().split('').reverse().join(''))
  return Math.sign(n) * newNum
}
```