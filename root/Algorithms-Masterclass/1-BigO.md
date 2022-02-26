# Big O

Big O is a way of talking formally about how the runtime of an alorithm grows as the input size grows.

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

The exact number of operations doesnt matter. But its important to see the general trends, if **n increases with the nuber of operations**.

### Big O Definition

We say that an alorithm is **O(f(n))** if the number of somple operations the computer has to do is eventually **less** than a constant times **f(n)**, as **n** increases.

f(n) could be linear (f(n) = n): as the number of opperations scales, so does the runtime.
f(n) could be quadratic (f(n) = n )
f(n) could be constant (f(n) = 1): runtime is not impacted by an increase in operations.
f(n) could be something entirely different!

Always has 3 operations
**O(1)**

```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

Number of operations is (eventually) bounded by a multiple of n (say, 10n)
**O(n)**

```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

#### Example:

```
function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}

countUpAndDown(5)
```

We have a loop, therefore **O(n)**. As n grows, so does the loop.

Nested Loop:

```
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

Have two loops.
![Big O9n2](/images/On2.png)

The runtime is proportional to n squared.

---

# Simplifying Big O Expressions

Rule of thumb:

- Constants don't matter:
  O(2n) --> simplifies --> O(n)
  O(500) --> simplifies --> O(1)
  O(13n^2) --> simplifies --> O(n^2)
- Smaller Terms Don't Matter:
  O(n + 10) --> simplifies --> O(n)
  O(1000n + 50) --> simplifies --> O(n)
  O(n^2 + 5n + 8) --> simplifies --> O(n^2)

1. Arithmetic operations are constant
1. Variable assignment is constant
1. **Accessing** elements in an array (by index) or object (by key) is constant
1. In a **loop**, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

---

More Examples:

```
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
logAtLeast5(1)
```

O(n) because this is a loop. As n increases, the number of loops increases.

```
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
```

O(1)
![BigO](/images/bignnotation.png)

---

## Space Complexity

We can also use big O notation to analyze **space complexity**: how much additional **memory** do we need to allocate in order to run the code in our algorithm?

Rules of Thumb:

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

Example 1:

```
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

So what are the things that take up space?

- we have a variable called total.
- have let i = 0, therefore another number.
  therefore, **O(1)**
  The amount of space will always be the same, regardless of the number of inputs.
  ![Space Example 1](/images/spaceEx1.png)

Example 2:

```
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

console.log(double([1,2,3])); //[ 2, 4, 6 ]
```

- makes a new array
- loops over the first array
- multiplies
- then pushes to the array. But a new array is created each time.
  Therefore, O(n) space!

---

# Logarithms

We've encountered some of the most common complexities: O(1), O(n), O(n ^2)

Sometimes big O expressions involve more complex mathematical expressions.

What is a log?

2, to what power, equals 8?
![log](/images/whatIsALog.png)

Rule of Thumb:
The logarithm of a number roughly measures the number of times you can divide that number by **2 before you get a value that's less than or equal to one**.

Log Example 1:
![Log Example 1](/images/logEx1.png)
Remember:
![BigO](/images/bignnotation.png)

Why is this important?

- Certain **searching** algorithms have logarithmic **time** complexity.

- Efficient **sorting** algorithms involve logarithms.

- **Recursion** sometimes involves logarithmic **space** complexity.
