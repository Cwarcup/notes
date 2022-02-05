# Asynchronous JavaScript

## How JavaScript Works

JS engine has a memory heap and stack. We have limited memory. The more variables, the more memory we take up. Memory leaks happen when we have unused memory. This is why global variables can be bad. The callstack reads and executes our code.

```
const one = () => {
  const two = () => {
    console.log('4');
  }
  two();
}

console.log('4') // will run this, then remove it.
two() // will run this, then remove it.
one() // will run this, then remove it.
//CALL STACK
```

call stack is first in last out.

**Single Threaded:** refers to having only one call stack.
**Non-blocking:** refers
**Synchronous programming** refers to each line being executed at a time. If you have one function that takes up a lot of time, you'll have to wait a long time. No other functions can be run until the previous function finishes.

**Asynchronous programming:** allows you to have functions running at the same time. Certain functions can be sent to the Web API and be completed there. When the Web API is done with the function, it gets sent to the callback queue. THe event loop keeps checking if the callstack is empty. When it is, then the callback queue can send the callback function.
![JS Run-time environment](/.../images/js-runtime-environment.png)

## Promises

Is an object that may produce a single value in the future. It can have three states. Fullfilled, rejected or pending.

Before promises, we had callbacks which would only execute a function once another function has finished. Results in a callback pyramid which is horrible. You'll nested functions.

How to create a promise:

```
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('stuff worked');
  } else {
    reject('error, it broke')
  }
})

promise
  .then(result => result + '!')
  .then(result2 => {
    console.log(result2)
  })

// returns stuff worked!
```

But what is we have an error? We can use `.catch()`

```
promise
  .then(result => result + '!')
  .then(result2 => {
    throw Error
    console.log(result2)
  })
  .catch(() => console.log('got an error!'))

  //returns got an error!
```

`.catch()` will catch any errors that occurs between the chains `then`. The `.catch()` statement will only check for errors before it. If the error occurs after the .catch(), it wont run.

```
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('stuff worked');
  } else {
    reject('error, it broke')
  }
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hi')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'WTF')
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    console.log(values)
  })
```

Here, we only have console.log(values) run after all the promises were resolved, even though they had timeouts set at different times.

When we run this in console, we get the data from users, posts and albums. Now if we had an issue with any of the links, console will display 'error'.

```
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
}).catch(() => console.log('error'))
```

## ES8 - Asynch Await

## ES9 and Async

## Job Queue

## Parallel, Sequence and Race

## ES2020: allSettled()

## ES2021: any()

## Threads, Concurrency and Parallelism

```

```

```

```

```

```

```

```
