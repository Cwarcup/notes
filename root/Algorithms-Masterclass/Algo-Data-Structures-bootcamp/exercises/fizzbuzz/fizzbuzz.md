# Fizzbuzz

Classic interview question.

Directions: Write a program that console logs the numbers from 1 to n. But for multiples of three print “fizz” instead of the number and for the multiples of five print “buzz”. For numbers which are multiples of both three and five print “fizzbuzz”.

Example:
```js
  fizzBuzz(5);
  1
  2
  fizz
  4
  buzz
```

```js
function fizzBuzz(n) {

  for(let i = 1; i <= n; i++) {
    // is n multiple 3 and 5?
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("FizzBuzz")
    // is n a multiple of 3?
    }else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0 ) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
```