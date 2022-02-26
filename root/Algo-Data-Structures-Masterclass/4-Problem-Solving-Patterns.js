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

function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  let count1 = {};
  let count2 = {};
  for (const val of str1) {
    count1[val] = (count1[val] || 0) + 1;
  }
  for (const val of str2) {
    count2[val] = (count2[val] || 0) + 1;
  }
  console.log(count1)
  console.log(count2)
  for (const letter in count1) {
    if (count1.hasOwnProperty(letter)) {
      if(count1[letter] !== count2[letter]) {
        return false;
      }
    }
  }
  for (const letter in count2) {
    if (count2.hasOwnProperty(letter)) {
      if(count2[letter] !== count1[letter]) {
        return false;
      }
    }
  }
  return true;
}

validAnagram('anagram', 'nagaram')

// Multiple Pointers Pattern

// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

// naive solution
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]];
          }
      }
  }
}
sumZero([-3,-2,-1,0,1,2,3]) // [-3, 3]

//Refectored Multiple Pointer Patter

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10])) 


// Multiple Pointers: Count Unique Values Challenge

//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i+1]) {
      count++;
    }
  }
  return count;
}

//another way:
function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i +1;
}
countUniqueValues([1,2,2,5,7,7,99]) // 5

// Sliding Window Pattern

// Example: Write a function called **maxSubarraySum** which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null

//naive solution

function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//refactored 

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// Divide and Conquer Pattern

// Example: Given a **sorted** array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1


// Naive Solution:

function search(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i;
    }
  }
  return -1;
}

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1


// Refactored

function search(array, val) {
 
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      let currentElement = array[middle];

      if (array[middle] < val) {
          min = middle + 1;
      }
      else if (array[middle] > val) {
          max = middle - 1;
      }
      else {
          return middle;
      }
  }

  return -1;
}


// Optional Challanges

// Frequency Counter - sameFrequancy
// Given two postitive integers, find out if the two numbers have the same frequency of digits. 

function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}


// Frequency Counter - areThereDuplicates

function areThereDuplicates() {
  let obj = {};

    for(let i = 0; i < arguments.length; i++) {
        let value = arguments[i];
        if(obj[value]) {
            return true
        } else {
            obj[value] = 1;
        }
    }
    console.log(obj)
    return false;
}

areThereDuplicates(1,2,4,5,6,7,8,9, 9)


//Multiple Pointers - averagePair

function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;

    while (start < end) {
        let avg = (arr[start]+arr[end]) / 2;
        if(avg === target) return true;
        else if (avg < target) {
            start++;
        } else {
            end--
        }
    }
    return false;
    
    
}

averagePair([1,3,3,5,6,7,10,12,19],8)

// Multiple Pointers - isSubsequence

// Sliding Window - maxSubArraySum

// Sliding Window - minSubArraySum

// Sliding Window - findLongestSubstring

