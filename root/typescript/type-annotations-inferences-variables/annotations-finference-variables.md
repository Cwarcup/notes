# Type Annotations + Type Inference

Type annotations, what is that a type annotation is some tiny bit of code that you and I are going to write to tell typescript what type of value a variable refers to.

Type inference: typescript guesses the type. To attempt to automatically figure out what type of value a variable refers to.

## Type Annotations

```typescript
const apples: number = 5;
```
the colon and the word right after it is our **type annotation**. Its trying to tell typescript we will only be assigning a number to apples. 

If changed `const` to `let` then you can do `apples = 10`, reassigning it. 

```typescript
let apples: number = 5;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null; 
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();
// saying we have a variable called now and we can ONLY assign it the value Date

```

## Object Literal Annotations

### Arrays
`let colors: string[]` tells ts that we are going to assign an **array** that contains nothing but **strings** inside of it. This is **NOT** creating an array. 

`let colors: string[] = ['red', 'green', 'blue']` this does create an array containing some colors.
```typescript
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];
``` 

### Classes
Traditionally make classes with a capital. Whenever we have a lowercase, we are referring to an instance. 
```typescript
class Car {

}

let car: Car = new Car();
```
### Object literal
How do you add in a type annotation?
```typescript
let point = {
  x: 10,
  y: 20,
};
```
Like this: 
use {} and place in the properties with the type. Adding the type annotation `{x: number, y: number}`
```typescript
let point: {x: number, y: number} = {
  x: 10,
  y: 20,
};
```

### Functions
Need to tell ts what type of arguments the function will take.

```typescript
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};
```
`: (i: number) => void` is the annotation. `void` indicates nothing will be returned. 
It may look like a function, but its a **description of a function**.

---

Now if we took the previous `let apples: number = 5;` and deleted `number` to get `let apples = 5;`, if you hover over apples TS will still suggest that apples is a number. HOW!?

None of these type annotations was required...If you hover over a given variable you still get told what the expected value is. 

This is due to **type inference**. 

## Type Inference

```typescript
let apples = 5;
```

| declaration	| initialization |
| ------------- | ------------- |
| const color	= | 'red'	|

if the **declaration** and **initialization** annotations **are on the same line**, TS will figure out the type of 'color' for us. 

```typescript
let apples;
apples = 5;
```
Type inference will NOT work here because the declaration and initialization is **NOT** on the same line. 

### When to use type annotations or inference
**Type Inference**: Rely on type inference **always**. Rely on this as much as possible.

**Type Annotation**:
- When we declare a variable on one line, then **initialize it later.**
- when we want a variable to have a **type** that can NOT be inferred. 
- When a function returns the **'any' type** and we need to clarify the value.


#### 'any' type
```typescript
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }
```
If you mouse over `parse` you get type `any`. This means the JSON.parse returns the **any type**.

What is the **any type**?
- TS has no idea what is returned. In this example, JSON.parse can accept any string, and spit out a boolean, a number, an object. It depends what is in the string. 
- Therefore, **any** is a type, just like `string` or `beelean` are a type. 
- Means TS has no idea what this is. It can't check for correct property references. 
- **AVOID variables with `any` at all costs!**

> Fixing the 'any' type. Need to add a type annotation.

```typescript
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates); // { x: 10, y: 20 }
```
Now if you type in `coordinates.asdfsdfsd` you get "asdfsdfsd is an unknown word".

#### Delayed Initialization
- remember, type inference only works when the variable is declared and initialized on the same line.
- Delayed Initialization = declare variable on one line, then initialize it late. 

```typescript
let words = ['red', 'green', 'blue']
let foundWords; //declared

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWords = true; //initialized
  }
}
```
If we mouse over `foundWords` we get a warning saying type if **any**. 

To make this warning go away we need to add a type annotation. 
```typescript
let words = ['red', 'green', 'blue']
let foundWords: boolean; //declared with annotation

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWords = true; //initialized
  }
}
```

## When Inference Doesn't Work

- ***variable whose type cannot be inferred directly**
```typescript
let numbers = [-10, -1, 12];
let numberAboveZero = false; //assigned to boolean
 for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]; //error: Type 'number' is not assignable to type 'boolean'.
  } 
 }
```

Can fix this by adding in a ` | ` Think of this as an **or** statement. 
```typescript
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  } 
}
```


