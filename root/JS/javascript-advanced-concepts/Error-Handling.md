# Error Handling

Remember, we have a native Error constructor function.

```
Error
// ƒ Error() { [native code] }
```

`throw` keyword: stops your script that is currently running.

```
function a() {
  const b =  new Error('what?')
  return b
}

a() //run the function

//Error: what?
//    at a (<anonymous>:2:14)
//    at <anonymous>:1:1
```

You return what is actually happening on the call stack. Can also access this by using the `.stack` keyword `a().stack`.
Shows you where the error occured.

## Try catch

### Try Catch Block

The `try` statement allows you to define a block of code to be tested for errors while it is being executed.

The `catch` statement allows you to define a block of code to be executed, if an error occurs in the try block. [W3](https://www.w3schools.com/js/js_errors.asp)

```
function fail() {
  try {
    // basically says run anything in this block. If any errors..
  } catch (error) {
    // handle the erros here.
    // can also accept an error parameter.
  }
}
```

Can also have a `finally` statement which will run after the `catch` block has been executed. The `finally` statement lets you execute code, after try and catch, regardless of the result:

```
try {
  Block of code to try
} catch(err) {
  Block of code to handle errors
} finally {
  Block of code to be executed regardless of the try / catch result
}
```

Try catch block can be used to capture any synchronous code.

```
try {
  setTimeout(function() {
    fakevariable;
  }, 1000)
} catch (error) {
  console.log("error found: ", error)
}
```

No error will be detected because `setTimeout` is asynchronous.

## Async Error Handling

# Promises

`Promise.resolve()` returns a `Promise {}`

```
Promise.resolve('asyncfail')
    .then(response => {
        console.log(response)
    })
// asyncfail
// Promise {<fulfilled>: undefined}
```

```
Promise.resolve('asyncfail')
    .then(response => {
      throw new Error('#1 failed')
        return response
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
```

### Async Await

Can use try/catch blocks.

```
(async function() {
  try {
    await Promise.reject('oopsie')
  } catch (err) {
    console.log(err)
  }
  console.log('is this still good?')
})()

//oopsie
// is this still good?
// Promise {<fulfilled>: undefined}
```

Get `oppsie` as an error, which gets caught by `catch`. Then `console.log('is this still good?')` runs beacuse it is after the `try catch` block.

So now we can handle asynchronous code.

## Extending Erros

We know the `Error` constructor is just an object that we can extend from (`Error.name` , `Error.captureStackTrace`).

```
class AuthenticationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'authenticationError'
    this.favouriteSnack = 'grapes'
  }
}

throw new AuthenticationError('oopsie')
 //Uncaught authenticationError: oopsie
```

Can access the properties of authenticationError.

```
class AuthenticationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'authenticationError'
    this.favouriteSnack = 'grapes'
  }
}

const a = new authenticationError('oopsie')

a.favouriteSnack
// 'grapes'
```

Can use this to customize the errors that occur.

```
class DatabaseError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DatabaseError'
    this.favouriteSnack = 'grapes'
  }
}
```

But this way we are extending our error constructor.
