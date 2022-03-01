//Simple version
// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// recursive solution
// function fib(n, memo = [undefined, 1, 1]) {
//   if (memo[n] !== undefined) return memo[n];
//   var res = fib(n - 1, memo) + fib(n - 2, memo);
//   memo[n] = res;
//   console.log(memo);
//   return res;
// }

// tabulated version
function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1]; // table to store data
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  console.log(fibNums);
  return fibNums[n];
}
console.log(fib(6));
