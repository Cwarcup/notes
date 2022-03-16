# Functional Components

# Handling Async Functions with Functional Components

Is VERY difficult because..
1. JS file is loaded by the browser.
2. App component gets created.
3. we call out async function (which takes time to return).
4. App returns JSX which gets rendered to page as HTML.
5. ...time goes on...
6. we finally get the data from our function....

We have already rendered our app component! We don't really have any good way of waiting for our function to return something before we render our componenet. 

Solution?

**Use CLASS COMPONENTS INSTEAD!**

---

Example function based component
```js
import React from 'react';

const SeasonDisplay = () => {
  return <div>SeasonDisplay</div>;
};

export default SeasonDisplay;
```