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
//   let fib = [0, 1]
//   for(let i = 2; i <= n; i++) {
//     fib.push(fib[i] = fib[i-1] + fib[i-2])
//   }
//   return fib[n]
// }

//recursive solution
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));

module.exports = fib;
