# Decorators

import [ts-express-decorator](https://www.npmjs.com/package/ts-express-decorators)

Decorators are...
- function that can be used to **modify/change properties/methods in the class.**
- not the same as JavaScript decorators.
- used inside/on classes only.
- understanding the order in which decorators are ran.
- experimental and may change over time.

```typescript
class Boat {
    color: string = 'red'

    get formattedColor(): string {
        return `This color of this boat is ${this.color}`
    }

    @testDecorator
    pilot(): void {
        console.log('swish')
    }
}

function testDecorator(target: any, key: string): void {
    console.log('Target:', target)
    console.log('Key:', key )
}
```
If we run this we get:
```
Target: Boat { formattedColor: [Getter], pilot: [Function] }
Key: pilot
```

A decorator gets called with a few arguments:
1. The **prototype** of the object.
   + in our case, we are talking about the prototype of **class** `Boat`.
   - `target: any` is `Boat` and lists out all the different methods in class `Boat`
2. Second argument is the key of the **property/method/accessor** that we applied our decorator to.
   - in our case, the key is `pilot`.
3. the **property descriptor**.

Decorators are applied when the code for this class is ran (**not when an instance is created**). When we define class Boat, decorators get executed. Again, because this note is important, a decorator only gets executed one single time when we define the class.

Under the hood, this is what it looks like in js (stripped to its barebones):
```javascript
var __decorate = function(decorators, target, key, desc) {
    var desc = Object.getOwnPropertyDescriptor(target, key)

    for (var decorator of decorators) {
        decorator(target, key, desc)
    }
}
```

## Property Descriptor
