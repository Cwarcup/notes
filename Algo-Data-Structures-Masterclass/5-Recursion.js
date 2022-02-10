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
