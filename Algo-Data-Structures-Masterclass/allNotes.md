# Big O

How do we know which way of implementing a function is best?

Example: "write a function that calculates the sum of all numbers from 1 up to some number n"

Option 1: slow

```
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total+= i;
  }
  return total;
}
```

Option 2: Faster

```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

Built in timing methods: can run for each option

```
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
```

The problem with time:

1. different machines will record different times
1. same machine records different times
1. measurements may not be precise enough

Rather than counting seconds, you can count **number of simple operations** the computer has to run.

Option 2: Faster
This has 3 operations. 1 multiplcation, 1 addition, 1 division. Regardless of the size of n.

Option 1: Slower
Since we are using a loop, the loop will run `n` number of times. And thus, perform addition `n` number of times.
![slower](/images/countingop.png)

The exact number of operations doesnt matter. But its important to see the general trends, if n increases with the nuber of operations.
