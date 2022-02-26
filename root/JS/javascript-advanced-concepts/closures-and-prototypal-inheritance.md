## Create Your Own Prototypes

```
var human = {mortal: true}
var socrates = Object.create(human);

console.log(socrates.mortal)
// returns true
```

Because you have inherited from human.

`__proto__` allows you to use functions created in other objects.
The sing() function is not in the lizard object, however, by using **proto** you can access this function.

```
let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}
// Don't do this, bad performance. Show with bind.
lizard.__proto__ = dragon;
console.log(lizard.sing())
```

## Closure

Without closure:

```
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 3000)
}

returns
I am at index 4
I am at index 4
I am at index 4
I am at index 4
```

With closure:

```
const array = [1,2,3,4];
for(var i=0; i < array.length; i++) {
  (function(closureI) { // wrap the setTimeout in a function, pass it the i variable
      setTimeout(function(){
        console.log('I am at index ' + array[closureI])
      }, 3000)
  }) (i)
}
```

OR

```
const array = [1,2,3,4];
for(let i=0; i < array.length; i++) { //change var into let
  setTimeout(function(){
    console.log('I am at index ' + array[i])
  }, 3000)
}
```

**let** allows for closure

Without closure - can run `initialize()` numerous times.

```
let view;
function initialize() {
      view = '🏔';
      console.log('view has been set!')
}

initialize(); //view has been set!
initialize();//view has been set!
initialize();//view has been set!

console.log(view)
```

With closure so `initialize()` only runs once.

```
let view;
function initialize() {
  let called = 0; //create variable to keep track of how many times called
  return function() {
    if(called > 0) {
      return console.log('Idiot')
    } else {
      view = '🏔';
      called++;
      console.log('view has been set!')
    }
  }
}

const startOnce = initialize();
startOnce(); //view has been set!
startOnce(); //Idiot
startOnce(); //Idiot
```

Closure allows you to decide what information is accessible.
`ohno.launch()` will not run. Error: ohno.launch is not a function

```
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'Boom';
    }
    setInterval(passTime, 1000);
    return {
 //have removed the launch function
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
```

# why is closure important?

- Memory efficient
- Encapsulation

Closures are also called **lexical scoping**:

- lexical = where its written
- scoping = where we have access to it

## Higher Order Functions

- either accepts a function as a parameter, or returns a function.

```
const giveAccessTo = (name) =>
  'Access Granted to ' + name;

function authenticate(verify) {
    let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return true;
}

function letPerson(person, fn) { //my HOF
  if (person.level === 'admin') {
    fn(50000)
  } else if (person.level === 'user') {
    fn (10000)
  }
  return giveAccessTo(person.name)
}

letPerson({level: 'user', name: 'Tim'}, authenticate)
```

Now our function takes in a **parameter** (person), and takes in a **function** (authenticate).

Need to be careful initializing functions inside loops:

```
for (let i = 0; i < 5; i++) {
  function a() {

  }
  a()
}
```

This will initialize the function 5 times, every time the loop is run.

Want to do this instead:

```
function a() {
}

for (let i = 0; i < 5; i++) {
  a()
}
```

Will only initialize the function once.

## First Class Citizens

Functions are first class citizens in JS:

Can be assigned to variables.

- `var stuff = function(){}`

Can pass functions as parameter to a function.

```
function a(fn) {
  fn()
}

a(function() {console.log('Hi there')})
```

Can return functions as values for another function

```
function b() {
  return function c() {
    console.log('bye')
  }
}

b() //[function: c]
b() () //'bye'
```

Functions as a method - function inside an object

```
const obj = {
two: function() {
return 2;
}
}
obj.two //will run the function

```
