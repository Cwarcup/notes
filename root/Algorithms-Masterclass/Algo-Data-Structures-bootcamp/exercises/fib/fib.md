# Fibonacci Sequence 

Directions: Print out the **n-th entry** in the fibonacci series.

The fibonacci series is an ordering of numbers where each number is the sum of the preceding two.

For example, the sequence
 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
forms the first ten entries of the fibonacci series.

Example:
```js
 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  fib(4) === 3
```

Usually solved by generating all the entries in the sequence and then returning the **n-th entry**.

Big trick: the first two entries need to be created manually to start the sequence. 


## Iterative Solution

```js
function fib(n) {
  let fib = [0, 1]
  for(let i = 2; i <= n; i++) {
    fib.push(fib[i] = fib[i-1] + fib[i-2])
  }
  return fib[n]
}
```

BigO Notation: O(n) Linear Time


## Recursive Solution
```js
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
```
Big O Notation: O(2^n) Exponential Time