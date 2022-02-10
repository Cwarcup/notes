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

**Base Case**
The condition when the recursion **ends**.
This is the most important concept to understand.

## Writting Factorial Iteratively

## Writting Factorial Recursively

## Common Recursion Putfalls

## Helper Method Recursion

## Pure Recursion
