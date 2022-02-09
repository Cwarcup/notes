// Problem Solving Patterns

// Frequency Counter Pattern

//Example: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

// Naive Solution

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  for(let i = 0; i < arr1.length; i++){
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if(correctIndex === -1) {
         return false;
      }
      console.log(arr2);
      arr2.splice(correctIndex,1)
  }
  return true;
}

same([1,2,3,2], [9,1,4,4]) // should return true.

// Refactored Frequency Counter

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

same([1,2,3,2,5], [9,1,4,4,11]) // false
same([1,2,3,2], [9,1,4,4]) // true

// Frequency Counter: Anagram Challenge
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true



// Multiple Pointers Pattern

// Multiple Pointers: Count Unique Values Challenge

// Sliding Window Pattern

// Divide and Conquer Pattern