const carMakers = ['ford', 'toyota', 'chevy'];

const emptyArray: string[] = [];

const dates = [new Date(), new Date()];

//2D arrays
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// corner cases
//help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push(100);

// help with map
// carMakers.map((car: string): string => {
//   return car.toUpperCase();
// });

// multiple types of values

const importantDates = [new Date(), '2030-10-10']
importantDates.push('2050-1-1');
console.log(importantDates);