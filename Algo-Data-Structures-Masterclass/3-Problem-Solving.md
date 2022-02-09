### What is an alorithm?

A **process** or **set of steps** to accomplish a certain task.

### How do you get better at problem solving?

- Devise a plan for solving problems
- Master common problem solving patterns

---

## PROBLEM SOLVING

- Understand the Problem
- Explore Concrete Examples
- Break It Down
- Solve/Simplify
- Look Back and Refactor

---

## Understand the Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs?
4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
5. How should I label the important pieces of data that are part of the problem?

Example: Write a function which takes two numbers and return their sum.

1. Can I restate the problem in my own words?

- implement addition

2. What are the inputs that go into the problem?

- how big are the numbers? Some languages have limits on the number.

3. What are the outputs?

- should it be a float? A string?

4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem?

- what happens if onely one number is given? Should it be null or undefined?

5. How should I label the important pieces of data that are part of the problem?

---

## Concrete Problems

1. start with simple examples.
2. progress to more complex examples
3. Explore examples with Empty Inputs
4. Explore examples with invalid inputs

Example: Write a function which takes in a string and returns counts of each character in the string.

```
charCount("aaa")
charCount("What about a phone number 123123")
```

How should it handle numbers? Spaces? An empty string?

---

## Break It Down

- Explicitly write out the steps you need to take.

Example: Write a function which takes in a string and returns counts of each character in the string.

```
//1
function charCount(str) {
  // do something
  // return an object withs keys that are lower case in the string, values should be the count of each character.
}

//2
function charCount(str) {
  // make object to return at end
  //loop over string, for each chatacter...
    // if the char is a number/number AND a key in object, add one to count
    // if char is a number/number AND not in object, add it and set value to 1
    // if char is something else (space, period, etc.) don't do anything.
  // return object at end
}
```

---

## Solve or Simplify

Solve the problem if you can, if not, solve a simpler problem. Ignore the part that is giving you a hard time.

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

Example: Write a function which takes in a string and returns counts of each character in the string.

```
function charCount(str) {
  // make object to return at end
  let obj = {};
  //loop over string, for each chatacter...
  for(let i = 0; i < str.length; i++){
    const char = str[i]
    // if the char is a number/number AND a key in object, add one to count
    if(obj[char] > 0) {
      obj[char]++;
    // if char is a number/number AND not in object, add it and set value to 1
    } else {
      obj[char] = 1;
    };
  }
  return obj;
    // if char is something else (space, period, etc.) don't do anything.
  // return object at end
}

charCount("hello")
{h: 1, e: 1, l: 2, o: 1}

charCount('Hi There')
" ": 1
H: 1
T: 1
e: 2
h: 1
i: 1
r: 1

Not ideal, but getting close.
```

```
function charCount(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++){
    const char = str[i].toLowerCase() // add toLowerCase()
    if(obj[char] > 0) {
      obj[char]++;
    } else {
      obj[char] = 1;
    };
  }
  return obj;
    // if char is something else (space, period, etc.) don't do anything.
  // return object at end
}

charCount('Hi There')

" ": 1
e: 2
h: 2
i: 1
r: 1
t: 1

Better...
```

---

## Look Back & Refactor

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

```
function charCount(str) {
  let obj = {};
  for(let i = 0; i < str.length; i++){
    const char = str[i].toLowerCase()
    if(/[a-z0-9]/.test(char)) {
      if(obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      };
    }
  }
  return obj;
}

// refactor to create a "for of" loop

function charCount(str) {
  let obj = {};
  for (var char of str){
    char = char.toLowerCase()
    if(/[a-z0-9]/.test(char)) {
      if(obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      };
    }
  }
  return obj;
}
```

This section is a bit messy. It's simply either adding 1 to an existing object, or creating a new key/value pair in that object.

```
 if(obj[char] > 0) {
  obj[char]++;
} else {
  obj[char] = 1;
};
```

How can we simplify this?

```
obj[char] = ++obj[char] || 1;
```

This takes a character `[char]`, access the corresponding value in our object `obj[char]`. So if its truly, we add 1 to it `++obj[char]`. If its false, we set it to 1.

result:

```
function charCount(str) {
  let obj = {};
  for (var char of str){
    char = char.toLowerCase()
    if(/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

charCodeAt(0)
```

You can make the regex `/[a-z0-9]/.test(char)` better by using a aphanumeric.

Here's a cleaned-up version of the original validation code that receives a string and returns true or false:

```
function isAlphaNumeric(char) {
  code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
  }
return true;
}
```

Completed:

```
function charCount(str) {
  let obj = {};
  for (var char of str){
    char = char.toLowerCase()
    if(isAlphaNumeric(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
function isAlphaNumeric(char) {
  code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
  }
return true;
}
```

## Recap
