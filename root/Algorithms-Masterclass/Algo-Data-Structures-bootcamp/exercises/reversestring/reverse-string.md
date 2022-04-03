# Reverse String

## solution 1 using reverse helper

```js
function reverse(str) {
  return str.split('').reverse().join('');
}
```

- A string can be converted to an array with the split() method
- call reverse on the new array
- join the array back into a string

## Solution 2 using `for loop`

Try using the ES2015 `for..of` loop

We are iterating over each character in the str.


```js
function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
```

## Solution 3 with reduce() helper

```js
function reverse(str) {
  return str.split('').reduce((reversed, character) => {
    return (reversed = character + reversed);
  }, '');
}

//or as one line
function reverse(str) {
  return str.split('').reduce((rev, char) => (rev = char + rev), '');
}
```

### For...of loop

[MDN docs:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

- Works on strings and arrays, node like objects (arguments, Nodelist, etc)
```js
for (variable of iterable) {
  statement
}
```

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```