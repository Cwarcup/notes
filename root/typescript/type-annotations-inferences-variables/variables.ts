let apples = 5;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null; 
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();
// saying we have a variable called now and we can ONLY assign it the value Date

// object literals

//array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

//classes 
class Car {

}

let car: Car = new Car();

// object literal
let point: {x: number, y: number} = {
  x: 10,
  y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};

// when to use annotation
// 1) function that returns the 'any' type
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json);
// console.log(coordinates);

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates.sdfgdfsg); // { x: 10, y: 20 }

// 2) when we declare a variable on one line,
// then initialize it on another

let words = ['red', 'green', 'blue']
let foundWords: boolean; //declared with annotation

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'green') {
    foundWords = true; //initialized
  }
}

// 3) variable whose type cannot be inferred directly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
 for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  } 
 }

