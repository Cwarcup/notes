# Radix Sort

So far we have only looked at various **comparison sorts**.

Radix Sort does NOT make direct comparisons.

- is a special sorting algorithm that works on lists of **numbers**.
- it never makes comparisons betwen elements.
- it exploits the fact that information about the size of a number is **encoded in the number of digits**. More digits means bigger numbers.

---

## How does it work?

Group numbers based on the first digit of each element.

![radix1](/images/radix1.png)

![radix2](/images/radix2.png)

Now arrange numbers by the last digit of each element.

![radix3](/images/radix3.png)

Now we group numbers by the second digit of each element.

![radix4](/images/radix4.png)

![radix5](/images/radix5.png)

Repeat this with the 3rd digit, then reform it into a list again.
and then the 4th digit.

---

Need to be able to determine the 1st, 2nd... and so on...digit of a number.

### RADIX SORT HELPERS

In order to implement radix sort, it's helpful to build a few helper functions first:

- getDigit(num, place) - returns the digit in num at the given place value

```
getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0
```

## Get A Specific Digit

```
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

getDigit(12345, 0); // 5
```

or

```
const getNum = (num, index) => {
  const strNum = String(num);
  let end = strNum.length - 1;
  const foundNum = strNum[end - index];

  if (foundNum === undefined) return 0;
  else return Number(foundNum);
}

getNum(12345, 0); //5
```

### Need to determine how many times we need to run the function

**Need to figure out which number has the MOST digits**

digitCount(num) - returns the number of digits in num

```
digitCount(1); // 1
digitCount(25); // 2
digitCount(314); // 3
```

```
function digitCount(num) {
    return Math.abs(num).toString().length;
}

digitCount(-12345) // 5
```

### In an array, return the number of digits in the largest number

Should use our digitCount() function.

```
function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([1234, 56, 7])
```

## Radix Sort Pseudocode

1. Define a function that accepts list of numbers
1. Figure out how many digits the largest number has
1. Loop from k = 0 up to this largest number of digits
1. For each iteration of the loop: Create buckets for each digit (0 to 9)
1. place each number in the corresponding bucket based on its kth digit
1. Replace our existing array with values in our buckets, starting with 0 and going up to 9
1. return list at the end!

Remember:

```
[].concat([[1],[2],[3]])
(3) [Array(1), Array(1), Array(1)]

// speqak operator allows you to concat each array as if they were individual values.
[].concat(...[[1],[2],[3]])
(3) [1, 2, 3]
```

```
//step 1
function radixSort(nums) {
        // step 2
    let maxDigitCount = mostDigits(nums);

        //step 3
    for(let k = 0; k < maxDigitCount; k++) {
        //step 4 - create buckets
        let digitBuckets = Array.from({length: 10}, () => [])
        // step 5 - first time looks at first digit (k = 0), second time looks at second (k= 1)
        for(let i = 0; i < nums.length; i++) {
            let digit = getNum(nums[i], k);
            //step 5 - pushing the value into the corresponding digitBucket index
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets);
        console.log(nums)
    }
}

radixSort([123,345,2,4,66,8,6786])
```

## Big O

| Time Complexity (Best)                                                                                 | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
| ------------------------------------------------------------------------------------------------------ | ------------------------- | ----------------------- | ---------------- |
| O(nk)                                                                                                  | O(nk)                     | O(nk)                   | O(n + k)         |
| ------------------------------------------------------------------------------------------------------ |
| n - length of array                                                                                    |
| k - number of digits(average)                                                                          |
