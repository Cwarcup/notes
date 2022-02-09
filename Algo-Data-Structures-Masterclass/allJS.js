// write a function that calculates the sum of all numbers from 1 up to some number n

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total+= i; 
  }
  return total;
}
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

function addUpTo(n) {
  return n * (n + 1) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
