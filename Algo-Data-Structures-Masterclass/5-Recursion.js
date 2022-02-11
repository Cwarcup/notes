// callstack

function takeShower(){
  return "Showering!"
}

function eatBreakfast(){
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood(){
  let items = ["Oatmeal", "Eggs", "Protein Shake"]
  return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
  takeShower()
  eatBreakfast()
  console.log("Ok ready to go to work!")
}

wakeUp()

//How recursive functions work
// Recursive Version
function countDown(num){
  if(num <= 0) {
      console.log("All done!");
      return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
  for(var i = num; i > 0; i--){
      console.log(i);
  }
  console.log("All done!")
}

//recursive example 2
function sumRange(num){
  if(num === 1) return 1; 
  return num + sumRange(num-1);
}

//factorial iteratively
function factorial(num){
  let total = 1;
  for(let i = num; i > 1; i--){
      total *= i
  }
  return total;
}

console.log(factorial(5))

// Writting Factorial Recursively

function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num -1)
}

console.log(factorial(3))


// Helper Method Recursion

function collectOddValues(arr){
    
  let result = []

  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }
      
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      
      helper(helperInput.slice(1))
  }
  
  helper(arr)

  return result;
}
collectOddValues([1,2,3,4,5,6,7,8,15])



//Pure recursion

function collectOddValues(arr){
  let newArr = [];

  if(arr.length === 0) {
      return newArr;
  }

  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5,6,7,8,15])

// Recursion Problems

// Write a function called power() which accepts a base and an exponeent. The function should return the power of the base to the exponenet. This function should minic the functionality of Math.pow().

function power(base, exp) {
  if(exp === 0) return 1;
  return base * power(base, exp - 1)
}

power(2,4)

//Factorial

function factorial(num) {
  if (num === 0) return 1
  return num * factorial(num - 1)
}

factorial(7)


// function takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  console.log('arr', arr)
  if (arr.length === 0){
    return 1;
  }
  console.log(arr[0])
  return arr[0] * productOfArray(arr.slice(1))
}

productOfArray([1,2,3])

//recursiveRange: accepts a number and adds up all the numbers from 0 to the number passed in the function.
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num) {
  if(num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1)
  
}

console.log(recursiveRange(10))

// Write a function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 ... which starts with 1 and 1, and every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
  if (num <= 2) return 1;
  console.log(num)
  return fib(num - 1) + fib(num - 2)
}

fib(5)