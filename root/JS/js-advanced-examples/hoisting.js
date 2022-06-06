// console.log('1-----');
// let teddy = 'bear';

// console.log(sing());

// function sing() {
//   console.log('lalalala');
// }

// const sing2 = function () {
//   console.log('oh oh oh');
// };

// console.log(sing2());

// a();

// function a() {
//   console.log('a');
// }

// function a() {
//   console.log('b');
// }

// var favoriteFood = 'pizza';

// const foodThoughts = function () {
//   console.log(`I love ${favoriteFood}`);
//   var favoriteFood = 'sushi';
//   console.log(`New fav food I love ${favoriteFood}`);
// };

// foodThoughts();

// function marry(person1, person2) {
//   console.log('args', arguments);
//   console.log(Array.from(arguments));
//   return `${person1} is now married to ${person2}`;
// }

// marry('Tim', 'Sue');

// function marry2(...args) {
//   console.log('args', args);
//   console.log(Array.from(arguments));
//   return `${args[0]} is now married to ${args[1]}`;
// }

// marry2('Curtis', 'Hana');

// function two() {
//   let isValid;
//   console.log(isValid);
// }

// function one() {
//   let isValid = true;
//   console.log(isValid);
//   two();
//   return isValid;
// }
// let isValid = false;

// console.log(one());

// // two() -- undefined
// // one() -- true
// // global -- false

// const x = 'x';

// function findName() {
//   const b = 'b';
//   return printName();
// }

// function printName() {
//   const c = 'c';
//   return 'Curtis W';
// }

// function sayMyName() {
//   const a = 'a';
//   console.log(x);
//   return findName();
// }

// console.log(sayMyName());

// function sayMyName() {
//   const a = 'a';
//   return function findName() {
//     const b = 'b';
//     return function printName() {
//       const c = 'c';
//       return 'Curtis W';
//     };
//   };
// }

// console.log(sayMyName()()());

// if(5 > 4) {
//   let secret = '123'
// }

// console.log(secret);

function loop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('after loop', i);
}

console.log(loop());