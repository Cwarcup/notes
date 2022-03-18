# map() method

[MDM docs.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

What if we want to iterate over an array and multiple each number by 10?
```js
const numbers = [0,1,2,3,4];

let loopedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  loopedNumbers.push(numbers[i] * 10);
}

console.log(loopedNumbers);   //  [0,10,20,30,40]
```

`map()` can do the exact same thing (iterate over each number in an array), but much simpler. 

```js
const numbers = [0,1,2,3,4];

const mappedNumbers = numbers.map(num => num * 4)

console.log(mappedNumbers); // [0,4,8,12,16]
```

Can use this in react like so:
```js
import React from 'react';

// map over and create images
// props passed from parent (app.js). Getting API response and passing it as props to ImageList.js
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img src={image.urls.small} key={image.id} alt={image.description} />
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
```

--- 

Example:
In react, we want to print out each users name inside of an `li` element. 

```js
import React from 'react';

const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' }
];


export default class App extends React.Component {
  render() {
      const user = users.map(user => {
          return <li key={user.id}> {user.name}</li>
      })
    return (
        <ul>
            {user}
        </ul>
    );
  }
}
```
