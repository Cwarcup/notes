# Problem Solving Patterns

There are many types of patterns. All have different approaches, patterns for writting code.

---

## Frequency Counter Pattern

This pattern uses objects or sets to collect values/frequencies of values.
This can often avoid the need for **nested loops** or **O(n^2) operations** with arrays/strings.

Example: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

```
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```

Naive Solution

```
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
```

This checks if the two arrays have the same length.

```
if(arr1.length !== arr2.length){
      return false;
  }
```

This uses the indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
Checks if the index of i^2 is found in the arr2. If it is, returns 1, if its not, returns -1.

```
  for(let i = 0; i < arr1.length; i++){
      let correctIndex = arr2.indexOf(arr1[i] ** 2)
      if(correctIndex === -1) {
         return false;
      }
```

### Refactored

Remember, two separate loops is better than nested loops. In nested loops you get O(n^2).

```
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

same([1,2,3,2,5], [9,1,4,4,11])
```

Time complexity is O(n).

The JavaScript `for in` statement loops through the properties of an Object:

```
for (key in object) {
  // code block to be executed
}
```

Uses the `for in` to check if a key from the object frequencyCounter1 is found in frequencyCounter2 squared.

**Take away for frequency counter patters**

- usually use an **object**
- use the object to **construct** a profile to breakdown the contents of an array or string.
- then you can **compare** the objects.

### Frequency Counter: Anagram Challenge

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

```
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

My Solution

```
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
```

---

## Multiple Pointers Pattern

Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

Very efficient for solving problems with minimal space complexity as well.

`[-4,-3,-2,-1,0,1,2,5]` or `asdfsldgkjldfshg`
We are typically searching for a pair of values.

Example:
Write a function called **sumZero** which accepts a **sorted** array of integers. The function should find the **first** pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

```
sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
```

**Naive Solution**

```
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}
```

Time Complexity: O(N^2) Here we have two loops.
Space Complexity: O(1)

**Refectored Multiple Pointer Patter**

```
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
```

Time Complexity: O(N)
Space Complexity:O(1)

1. `right` if the index of arr[0]. `left` is the index of arr[8] (arr.length - 1).
2. We then check the sum of each. `let sum = arr[left] + arr[right]`

### Multiple Pointers: Count Unique Values Challenge

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```
function countUniqueValues(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i+1]) {
      count++;
    }
  }
  return count;
}
```

Alternative method:

```
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
```

---

## Sliding Window Pattern

This pattern involves creating a **window** which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created).

Very useful for keeping track of a subset of data in an array/string etc.

Example: Write a function called **maxSubarraySum** which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
```

## Divide and Conquer Pattern

```

```
