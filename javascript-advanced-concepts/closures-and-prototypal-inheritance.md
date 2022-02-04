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
