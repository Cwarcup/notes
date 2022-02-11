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

