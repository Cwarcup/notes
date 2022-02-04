## Idempotence

- A function always does or returns what we expect it to do.
- It makes code **predictable**.

`console.log(5)` will always return 5.

Seen in API's such as requests. You expect that API call to return the same results, given the parameters are the same.

## Imperative vs Declarative

- Imperative code tells the machine **what** to do and **how** to do it.
- Declerative code tells it **what** to do and **what should happen**. Not how to do it.

```
for (let i = 0; i < 1000; i++) {
  console.log('hi')
```

This is very imperative. Has a lot of instruction.
Can make this more declative:
`[1,2,3].forEach(item => console.log(item))`
Don't tell it to increment.

Functional programming helps us be more declative.

## Immutability

- not changing the state of the data.

```
const obj = {name: 'Andrei'}

function clone(obj) {
  return {...obj}; // this is pure
}

function updateName(obj) {
  const obj2 = clone
  (obj);
  obj2.name = 'Nana'
  return obj2
}

const updatedObj = updateName(obj)
console.log(obj, updatedObj) // returns { name: 'Andrei' } { name: 'Nana' }
```

We have a separate function to mutate the object. This keeps our original object intact.

## Currying

- Is a technique of translating the evaluation of a function that takes multiple arguments into evaluation a sequence of functions, each with a single argument.
  Example. We have a function that takes in multiple parameters:
  ` const multiply = (a, b) => a * b`

Now lets change it so it takes in one parameter at a time.

```
const curriedMultiply = (a) => (b) => a * b // this takes one parameter at a time

curriedMultiply(5)(20) // returns 100. Can create multiple utility functions out of this.

const multiplyBy5 = curriedMultiply(5); // here we basically set the first parameter (a) to 5.
multiplyBy5(20) // returns 100
```

Here we have access to `curriedMultiply` which takes in two parameters. But we also have access to `multiplyBy5` function. And we can run these whenever we want.

## Partial Application

- the process of producing a function with a smaller number of parameters.
- it takes a function, applies some arguments into it so it remembers those parameters. Then uses closures to later on be called with the rest of the argumnents.

```
const multiply = (a, b, c) => a*b*c

const partialMultiplyBy5 = multiply.bind(null, 5)

partialMultiplyBy5(4,10)
//200
```

We have used `multiply.bind(null, 5)` to bind `5` to `a`.
We can use `partialMultiplyBy5(b, c)` and just apply the rest of the parameters.

## Caching

- storing values so you can use them later.

# Memoization

- is a specific form of caching.

```
function addTo80(n) {
  console.log('long time')
  return n + 80;
}
addTo80(5)
addTo80(5)
addTo80(5)
```

Everytime we run `addTo80` we run the `long time`. But we can use caching to optimize this by holding it in an **empty object**.

```
let cache = {};

function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    cache[n] = n + 80;
    return cache[n]
  }
}

console.log('1:', memoizeAddTo80(5)) // long time 1: 85
console.log('2:', memoizeAddTo80(5)) // 85
console.log('3:', memoizeAddTo80(10)) // long time 3: 90
```

First time around we call `long time` and then return 85. Second time around we only returned 85. Third time around we have a new parameter which has not be cached. Therefore, it calls `long time`.

Idealy, we dont want to fill the cache in the global scope (living outside a function). Want to keep it in the function. We can use closures for this.
Let's make that better with no global scope. This is closure in javascript so.

```
function memoizeAddTo80() {
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  }
}
const memoized = memoizeAddTo80();

console.log(1, memoized(5)) // long time 1: 85
console.log(2, memoized(5)) // 2: 85
console.log('3:', memoized(50)) // long time 3: 130
```

## Compose

I want a compose function that takes a number, multiplies it by 3, then takes the absolute value.
`const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)`

```
const compose = (multiplyBy3, makePositive) => (data) => multiplyBy3(makePositive(data))

const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50) // 150
```

Using compose we have composed different functions together. It is a system design principle that deals with relationships between componenets (multiplyBy3 and makePositive).

## Pipe

Is essentially the same thing, but goes from left to right.

```
fn1(fn2(fn3(50)));
// compose(fn1, fn2, fn3(50))
// pipe(fn3, fn2, fn1(50))
```

The outcome will be the same, but pipe grabs fn3, then fn2, then fn1. Left to right.

# Arity

- the number of arguments a function takes.
- `const compose = (multiplyBy3, makePositive)` has an arity of 2.

Amazon Shopping Cart example:

`Object.assign(target, ...sources)` is a method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

1. Will need to create a function for each feature.

```
function purchaseItem() {}
function addItemToCart() {}
function applyTaxToItems() {}
function buyItem() {}
function emptyCart() {}
```

2. we want to use compose to go through each function

```
const compose = (f,g) => (...args) => f(g(...args));

function purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItem,
  addItemToCart
) {}
```

3. create our addItemToCart function

```
function addItemToCart(user, item) {
  const updatedCart = user.cart.concat([item])
  return Object.assign({}, user, { cart: updatedCart})
}
```

`Object.assign()` takes our source (an empty object), applies the properties from user, then updates the cart property to use our updatedCart.

Lets test this:

```
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));

function purchaseItem(...fns) {
  return fns.reduce(compose)
}

function addItemToCart(user, item) {
  const updatedCart = user.cart.concat([item])
  return Object.assign({}, user, { cart: updatedCart})
}


function applyTaxToItems(user) {
  return user
}

function buyItem(user) {
  return user
}

function emptyCart(user) {
  return user
}

//running
purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, {name: 'laptop', price: 344})
//returns
{
  name: 'Kim',
  active: true,
  cart: [ { name: 'laptop', price: 344 } ],
  purchases: []
}
```

3. Create the applyTaxToItem function

```
function applyTaxToItems(user) {
  const taxRate = 1.3; //30% tax
  const updatedCart = user.cart.map(item => {
    return {
      name: item.name,
      price: item.price*taxRate
    }
  })
  return Object.assign({}, user, {cart: updatedCart})
}
```

Now the item in our cart will include the tax.

4. create the buyItem function. Want to move our cart item to our purchases.

```
function buyItem(user) {
  return Object.assign({}, user, {purchases: user.cart})
}
```

```
console.log(purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, {name: 'laptop', price: 344}))

//returns
{
  name: 'Kim',
  active: true,
  cart: [ { name: 'laptop', price: 447.2 } ],
  purchases: [ { name: 'laptop', price: 447.2 } ]
}
```

5. create emptyCart function

```
function emptyCart(user) {
  return Object.assign({}, user, {cart: []})
}
```

All together:

```
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

const compose = (f,g) => (...args) => f(g(...args));

function purchaseItem(...fns) {
  return fns.reduce(compose)
}

function addItemToCart(user, item) {
  const updatedCart = user.cart.concat([item])
  return Object.assign({}, user, { cart: updatedCart})
}

function applyTaxToItems(user) {
  const taxRate = 1.3; //30% tax
  const updatedCart = user.cart.map(item => {
    return {
      name: item.name,
      price: item.price*taxRate
    }
  })
  return Object.assign({}, user, {cart: updatedCart})
}

function buyItem(user) {
  return Object.assign({}, user, {purchases: user.cart})
}

function emptyCart(user) {
  return Object.assign({}, user, {cart: []})
}

console.log(purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, {name: 'laptop', price: 344}))

//returns
{
  name: 'Kim',
  active: true,
  cart: [],
  purchases: [ { name: 'laptop', price: 447.2 } ]
}
```
