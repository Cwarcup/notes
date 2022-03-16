# Props

Component Hierarchy
- `App` is the **parent** to `CommentDetail`
```js
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};
```

---

Props are a system for passing data from a **parent** component to a **child**.
The overall goal is to **customize or configure** a child component.

![props](react-images/Props.png)

There is no limit on the amount of information we can pass through props. 

# Passing Through Props
- a child can NOT pass data through the props system directly. 
  - generally about parent communicating to the child.

**Providing a prop to a child**
![](react-images/passing%20props.png)

Can also reference some javascript variable.
```js
// in parent component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.findName()}
        text={faker.lorem.sentence()}
        timeAgo="Sun at 4:05PM"
      />
      <CommentDetail
        author={faker.name.findName()}
        text={faker.lorem.sentence()}
        timeAgo="Tues at 7:33PM"
      />
      <CommentDetail
        author={faker.name.findName()}
        text={faker.lorem.sentence()}
        timeAgo="Fri at 4:20PM"
      />
    </div>
  );
};
```

Must add the **props** as a parameter in the component.
```js
//in the child component
import React from 'react';
import faker from '@faker-js/faker';

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
```