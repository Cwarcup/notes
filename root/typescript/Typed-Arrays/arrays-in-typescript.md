# Arrays in Typescript

- Arrays were each element is some consistent type of value. 
  - for example, if you have an element that contains string, then you can only put strings in there. 
  - if you tried to put a number in this element, you'll get an error.
- Still using all the same methods

```typescript
const carMakers = ['ford', 'toyota', 'chevy'];
```
If you hover over `carMakers` TS tells you `const carMakers: string[]`. This is an example of type inference. 

If you had an **empty array** you may want to add the **annotation** because TS would not have any idea what will be in this array.
```typescript
const emptyArray: string[] = [];
```


**Two Dimensional** Arrays
```typescript
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]
```
If you wanted to add annotations if would look like `const carsByMake: string[][]`
Again, if you had no contents in the array you would need to write out the annotations:
```typescript
const carsByMake: string[][] = [];
```

## Why typed arrays?
- TS can do type inference whenever we are extracting a value from an array. 
  - TS knows that `car` and `myCar` are instances of strings because we used annotations in `carMakers`.
```typescript
const car = carMakers[0];
const myCar = carMakers.pop();
```
- TS can help prevent us from adding **incompatible** values into the array.
  - get an error under `100`: "Argument of type 'number' is not assignable to parameter of type 'string'."
```typescript
//prevent incompatible values
carMakers.push(100);
```
- anytime we declare an array, we get help with **'map', 'forEach', 'reduce' functions** whenever we are iterating over a collection of elements. 
```typescript
// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
```
- **felxible** - arrays can still contain multiple different types. 
  - some can be date objects, some can be strings. 
  - if you hover over `importantDates` you see `const importantDates: (string | Date)[]`. 
    - the ` | ` **pipe** **operator** acts as an **or**, indicating you'll see elements as a string OR as a Date object.
```typescript
const importantDates = [new Date(), '2030-10-10']

// manually adding type annotation
const importantDates: (Date | string)[] = [new Date()]
```

## Where do we use typed arrays?

- anytime we want to represent a **collection of different records** with some **arbitrary sort orders**. 