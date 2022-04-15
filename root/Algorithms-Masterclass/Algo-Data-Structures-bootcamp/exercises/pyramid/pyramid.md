# Pyramid

Directions:

Write a function that accepts a positive number N. The function should console log a pyramid shape with N levels using the # character. 

Make sure the pyramid has **spaces** on both the left *and* right hand sides.

Examples:
```js
  pyramid(1)
      '#'
  pyramid(2)
      ' # '
      '###'
  pyramid(3)
      '  #  '
      ' ### '
      '#####'
```

<img src="pyramid.png" alt="drawing" style="width:500px;"/>

Solution 1: iterative solution

- calculate the **midpoint** of the number of columns. Get the index here. 
- need to determine relationship between the number of rows and the number of columns. Can be done with `n * 2 - 1`.
- need to create a **range** where we want to add `#` characters.
```js
const colums = [ 0,1,2,3, 4]
const row = 0;
// need to produce a '#' at index 2 from row of 0

const colums = [ 0,1,2,3, 4]
const row = 1;
// need to produce a '#' at index 1,2,3 from row of 1, and spaces at index 0, 4
```
- If you determine the midpoint (center index), you can take the 'row' number and add it to the midpoint on either side.


```js
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2); // midpoint of our row

  for (let row = 0; row < n; row++) {
    let level = '';
    // need to determine correct number of columns
    for (let col = 0; col < n * 2 - 1; col++) {
      // if we are in the middle of the row, add a '#'
      // add a space to the left and right, depending on the row we are on.
      if (midpoint - row <= col && midpoint + row >= col) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}
pyramid(4);
```

---

Solution 2: recursive solution

```js
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  // when we reach the end of a level.
  // max number of columns is  2 * n - 1
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  // get midpoint index
  const midpoint = Math.floor((2 * n - 1) / 2); 

  // contains the character we are adding to our level string
  let add; 

  // if looking at the right and left side of the midpoint
  // we determine which column we are on by looking at the level string length
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}
```