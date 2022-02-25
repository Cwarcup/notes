# Dynamic Programming

[Slides](https://cs.slides.com/colt_steele/dynamic-programming)

Is a method for solving a complex problem. Breaking the problem down into a collection of simpler subproblems. 
 

## Overlapping Subproblems
- a problem is said to have **overlapping subproblems** if it can be broken down into subproblems which are **reused several times**.


## Optimal Substructure
- a problem is said to have **optimal substructure** if an optimal solutions can be constructed from optimal solutions of its subproblems. 

## Writing Recursive Solutions

**Fibonacci Sequence**

`Fib(n) = Fib(n-1) + Fib(n-2)`
`Fib(2) is 1`
`Fib(1) is 1`

```
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5)); // 5
console.log(fib(10)); // 55
```

## Momoization
- storing the results of expensive function calls and returning the cached results when the same input occurs again. 

```
function fib(n, memo=[]){
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1;
  var res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}

```

or
```
function fib(n, memo = [undefined, 1, 1]) {
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  console.log(memo);
  return res;
}

console.log(fib(5));
//[ undefined, 1, 1, 2, 3, 5 ]
```

## Tabulation 
- bottom up: start at the bottom, then work up.
- start with fib(1), then fib(2)..and so on...
- storing the result of a previous result in a table (usually an array).
- usually done using **iteration**
- better **space complexity** can be achieved using tabulation. 

```
function fib(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1]; // table to store data
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  console.log(fibNums);
  return fibNums[n];
}
console.log(fib(6)); // 8
```
`  console.log(fibNums) = [ 0, 1, 1, 2, 3, 5, 8 ]`

![fib](/images/fib.png)

---

Now if we used the recursive version, and a very large `n`, we will eventually hit a stack overflow. This is because of the number of calls being executed on the stack. 

If we used the **tabulated version** we do not hit this error. 

---

Time complexity is still **O(n)**: linear