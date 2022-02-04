## Create Your Own Prototypes

```
var human = {mortal: true}
var socrates = Object.create(human);

console.log(socrates.mortal)
// returns true
```

Because you have inherited from human.

**proto** allows you to use functions created in other objects.
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
