# Recursion

**A process (a function in our case) that calls itself**

## Why recursion

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- Very common with more complex algorithms
- It's sometimes a cleaner alternative to iteration

---

## The Call Stack

It's a **stack** data structures.
Any time a function is invoked it is placed (**pushed**) on the top of the call stack.
When JS seens the **return** keyword or when the function ends, the compiler will remove (_pop_).

Call stack example:

```
function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()
```

You're used to functions being pushed on the call stack and popped off when they are done. hen we write recursive functions, we keep pushing new functions onto the call stack.

#### How recursive functions work

Invoke the **same** function with a different input until you reach your **base case**!

**Two Essential Parts**

**Base Case**
The condition when the recursion **ends**.
This is the most important concept to understand.

**Different Input**
Want to send a different piece of data back into the function, until you hit the base case.

---

Example:

You could write this itteratively with a loop.

```
function countDownIterative(num){
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done itterative count down")
}

countDownIterative(5)
```

Now itteratively:

```
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3) // 3,2,1, All Done!
```

- Here `if(num <= 0)` num = 3, so it moves on.
- It logs `num` &#8594; 3
- Then decrement `num`
- then run `countDown(num)` again, but with `num = 2`
- basecase is `countDown(0)`
- if you didn't the return value it would keep going

---

Example 2:

```
function sumRange(num){
   if(num === 1) return 1;
   return num + sumRange(num-1);
}

sumRange(3) //6
```

What is the basecase? **`return 1`**
What is the 'different input'? `sumRange(num-1)`
What would happen if we didnt return?

Breakdown

```
return 3 + sumRange(2)
            return 2 + sumRange(1)
                            return 1 + sumRange(0)
                                            return 1

```

![someRange Call stack](/images/someRangeCallStack.png)

### Writting Factorial Iteratively

```
function factorial(num){
  let total = 1;
  for(let i = num; i > 1; i--){
      total *= i
  }
  return total;
}
```

### Writting Factorial Recursively

```
function factorial(num) {
  return num * factorial(num -1)
}
```

Not good because it will go forever, into the negatives.
We need an **end point**.

## Common Recursion Putfalls

- no **base case**. You'll eventually hit the call stack limit.
- forgetting to **return** or returning the wrong thing.
- stack overflow

## Helper Method Recursion

Design pattern often used with recursive functions.

Basic Template:

```
function outer(input){

    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable;

}
```

Example 1:

```
function collectOddValues(arr){

    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;

}

collectOddValues([1,2,3,4,5,6,7,8,15]) //[1, 3, 5, 7, 15]
```

Here we collect values in an empty array `result`, then we call our helper function.

```
if(helperInput[0] % 2 !== 0){
    result.push(helperInput[0])
}
```

This looks at the first number in the array, and if it's odd, it adds it to `result` array.

Then `helper(helperInput.slice(1))` is used to remove the first number in the array ([2,3,4,5,6,7,8,15])

## Pure Recursion

Is another strategy. Doesn't have nested functions.

Example:

```
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5]) // [1,3,5]
```

explained:

```
collectOddValues([1,2,3,4,5])

[1].concat(collectOddValues([2,3,4,5]))
                [].concat(collectOddValues([3,4,5])) //empty because value is even
                                [3].concat(collectOddValues([4,5]))
                                                [].concat(collectOddValues([5])) //empty because value is even
                                                                [5].concat(collectOddValues([]))
```

### Pure Recursion Tips

- For **arrays**, use methods like **slice**, the **spread** operator, and **concat** that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like **slice**, **substr**, or **substring** to make **copies** of strings
- To make copies of **objects** use **Object.assign**, or the **spread** operator
