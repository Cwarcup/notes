// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative solution
// function fib(n) {
//   let fib = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fib.push((fib[i] = fib[i - 1] + fib[i - 2]));
//   }
//   return fib[n];
// }
// console.log(fib(40));

//recursive solution
// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(slowFib(40));

//memoized

function memoize(fn) {
  // object to store all our calls
  const cache = {};

  return function (...args) {
    // if we have called the function with these arguments...
    if (cache[args]) {
      return cache[args];
    }

    //if we have NOT called the function before...
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
fib = memoize(fib);
console.log(fib(5));

module.exports = fib;
