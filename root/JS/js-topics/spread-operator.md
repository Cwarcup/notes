# Spread Operator 

```js
const numbers = [1, 2, 3];
const addFour = [...numbers, 4]; // (4) [1, 2, 3, 4] new array created and pushed 4 to the end.
console.log(addFour); // [ 1, 2, 3, 4 ]

console.log(numbers); // [1, 2, 3] still have access to old array
```