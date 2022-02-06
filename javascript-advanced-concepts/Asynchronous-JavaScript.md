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
![JS Run-time environment](/images/js-runtime-environment.png)

## Promises

Is an object that may produce a single value in the future. It can have three states. Fullfilled, rejected or pending.

Before promises, we had callbacks which would only execute a function once another function has finished. Results in a callback pyramid which is horrible. You'll nested functions.

How to **create** a promise:
Alway have a `.then`

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

Is essentially a function that returns a **promise**, but async makes the code easier to read.

```
movePlayer(100, 'left')
  .this(() => movePlayer(400, 'left'))
  .this(() => movePlayer(10, 'right'))

//with ASYNCH AWAIT

async function playerStart() {
  await movePlayer(100, 'left'); //pause
  await movePlayer(400, 'left')); //pause
  await movePlayer(10, 'right')); //pause
}
```

Remember, a promise is like an IOU. I 'promise' to return something to you in the future.

Instead of having `.then` (like in promises), async uses the `async` keyword ahead of the function and uses `await`. First, you need to decalair the function as `async`, so JavaScript knows its an async function. Then you have access to `await` keyword.

`await` keyword says "pause this function until I have something for you". `Await` can be used infront of any function that returns a promise.

You can also store the result of a promise in a variable.

```
async function playerStart() {
  const firstMove = await movePlayer(100, 'left'); //store result in firstMove
  const secondMove = await movePlayer(400, 'left'); // store result in secondMove
  await movePlayer(10, 'right'); //pause
}
```

More realistic example:

```
// here is a promise
fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(console.log)

//convert it into an async function
  async function fetchUsers() { //use the async
    const resp = await fetch('https://jsonplaceholder.typicode.com/users') //use await and assign to variable.
    const data = await resp.json();
    console.log(data);
  }
```

Another example: Here we have a bunch of URLs that return data.

```
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

// promise way
Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
})).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
}).catch(() => console.log('error'))

// asnc method
// can also be written as an expression.
const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url => // have descructured the urls
    fetch(url).then(resp => resp.json())
  ))
  console.log('users ', users)
  console.log('posts ', posts)
  console.log('albums ', albums)
}
```

Can now run `getData()` and will get the same results.

But how do you catch errors with asyc? (add `.catch()`)
Solved by using a **try catch block** which can have a `catch` at the end.

```
const getData = async function() {
  try { // place everything in a try block
    const [ users, posts, albums ] = await Promise.all(urls.map(url => // have descructured the urls
      fetch(url).then(resp => resp.json())
    ))
    console.log('users ', users)
    console.log('posts ', posts)
    console.log('albums ', albums)
  } catch (err){
    console.log(err)
  }
}
```

Now if we had a URL that was misspelled you'll get the error message.
`GET https://jsonplaceholder.typicode.com/lbums 404`

## ES9 and Async

#### Object Spread Operator ...

```
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2
}
//destructure
const { tiger, ...rest } = animals
```

What happens here is we grab `tiger` and store everything else in `rest`

```
tigers // returns 23
rest // returns {lion: 5, monkey: 2}
```

Previously we could do this on arrays. Example:

```
const array = [1,2,3,4,5];
function sum (a,b,c,d,e) {
  return a + b + c + d + e;
}

sum(...array) //returns 15
//same as below, but much easier
sum(1,2,3,4,5)
```

With ES9, we can now use the same functionality on objects.

#### Async

###### finally()

The addition of `finally()`. It allows you to do something after a promise has finished.

```
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp => resp.json())
}))
  .then(array => {
    throw Error; //will result in an error and skip the code below
    console.log(array[0])
    console.log(array[1])
    console.log(array[2])
  })
  .catch(err => console.log('error found: ', err))
  .finally(() => console.log('extra '));

  //returns 'error' and 'extra'. The finally() is run no matter what

```

`finally()` is very useful when you want some code to run no matter what (error or no error) after a promise.

###### for await of

The for...of statement creates a loop iterating over iterable objects.

```
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

Another Example:

```
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const loopThroughUrls = url => {
  for (url of urls) {
    console.log(url)
  }
}

//loopThroughUrls()
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/albums
```

Syntax

```
for (variable of iterable) {
  statement
}
```

**variable**: On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.
**iterable**: Object whose iterable properties are iterated

more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

Now, `for await of` allows you to loop through the **async await calls** if we have multiple.

```
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ))
    console.log('users ', users)
    console.log('posts ', posts)
    console.log('albums ', albums)
  } catch (err){
    console.log(err)
  }
}
//do the same a above, but use the `for await of` feature
const getData2 = async function () {
  const arrayOfPromises = urls.map(url => fetch(url)); //creating an array of each fetch promises.
  //now we can use the `for await of` to loop through the arrayOfPromises
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}
```

The `for await of` allows you to loop through the promises. Takes each item from an array of promises and returns us the responses in the correct order.

## Job Queue

Is basically a queue for promises. Similar to the callback queue, but has a higher priority. The event loop will.

```
//Callback Queue - Task queue
//lower priority
setTimeout(()=>{console.log('1', 'callback queue priority')}, 0)
setTimeout(()=>{console.log('2', 'lowest priority')}, 10)

//2 Job Queue -Mircotask Queue
//higher priority
Promise.resolve('2nd highest priority').then((data)=> console.log('2', data))

//3
//highest priority, logged first because not async
console.log('3', 'highest priority')
```

returns:

```
3 highest priority
2 2nd highest priority
1 callback queue priority
2 lowest priority
```

![Job Queue](/images/job-queue.png)

## Parallel, Sequence and Race

Have Three ways of executing promises:
Parallel - execute all the promises all at the same time
Sequencial - run the first, then second, then third. Depend on each other.
Race - do whichever promise comes back first.

Here we have three promises `a(), b(), c()`, each differing in a delay duration. They all use the setTimeout function to set the delay.

```
const promisify = (item, delay) =>
  new Promise((resolve) =>
    setTimeout(() =>
      resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
```

**Parallel** version:
Create an async function `parallel`, which have promises `[a(), b(), c()]`. It uses `Promise.all()` to run all these promises at the same time.

```
async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`
}

parallel().then(console.log) //prallel is done: a b c
// returned all at once.
```

**Race** version:
Whichever promise returns first will be returned. All the other promises will be ignored. Uses the `.race()` method.

```
async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

race().then(console.log) // race is done: a
```

`promise a` gets returned first because the delay was the lowest, thus the fastest to complete.

**Sequence** version:
Runs `a()`, then `b()`, then `c()`. Need to make sure we have some sort of order. We use `async await` to make sure the promises are run sequentially.

```
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log) //sequence is done a b c
```

Difference here is we run `output1 = await a();` and pause for 100ms, then run `const output2 = await b();` and pause for 5000ms, then run `const output3 = await c();` and pause for 3000ms. Then the return statement is delivered.

How does each compare?

```
sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)
```

```
race is done: a           // first
prallel is done: a b c    // second
sequence is done a b c    // last
```

When you have async code, you need to think about what is the most optimum way to do things.

## ES2020: allSettled()

Previously learnt that `Promise.all()` only resolves if all promises resolve.

```
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000))

const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000))

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data));

// Uncaught (in promise) undefined
```

Get this error because we have `promiseOne` returning a resolve, and `promiseTwo` returning a **reject**. To resolve this, we could use a `catch` statement.

```
Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
  .catch((error) => console.log('something failed', error))

  //something failed undefined
```

Still get this because `Promise.all()` needs each promise to be **resolved**.

But now we have **`Promise.allSettled()`**

```
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000))

const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000))

Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
  .catch((error) => console.log('something failed', error))

//[{ status: 'fulfilled', value: undefined }, { status: 'rejected', reason: undefined }]
```

Now we get one fulfilled, and one rejected. `Promise.allSettled()` runs regardless if a promise is rejected or not.

## ES2021: any()

`Promise.any()` resolves if any of the supplied promises is resolved. Below we have 3 promises, which resolves at random times.

```
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
});
```

Out of `p1`, `p2` and `p3`, whichever resolves first is taken by `Promise.any()`.

```
(async function () {
  const result = await Promise.any([p1, p2, p3]);
  console.log(result); // Prints "A", "B" or "C"
})();
```

If I had only one promise that resolved, `Promise.any()` will always resolve that one. For exmaple.

```
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("B"), Math.floor(Math.random() * 1000));
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("C"), Math.floor(Math.random() * 1000));
});

(async function () {
  const result = await Promise.any([p1, p2, p3]);
  console.log(result);
})();

// always returns A, because it's the only promise that is resolved.
```

## Threads, Concurrency and Parallelism

We have multple **worker threads** working in the background. They can run on a different thread, in parallel to our main thread.
