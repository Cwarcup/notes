# Class based Components

As of now, we have learnt that a **component** is either a **function or a class**, which both produce HTML to show to the users (using JSX) and handles feedback from the user (using event handlers).

Previously, functional components and classes were very different. Functional components could ONLY produce JSX to show to the user. 

Nowadays, functional components can use the **hooks system**.
Function componenets can now...
- Can produce JSX to show content to the user.
- Can use **Hooks** to run code at a specific point in time 
- Can use **Hooks** to access **state system** and **update content** on screen.

## Rules of Class Components
1. Must be a JavaScript Class
2. Must **extend** React.Component
3. Must define a 'render' method that returns some amount of JSX
---
Example class based component:
```js
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {   // class and extends
  render() {                          // returns a render method
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return <div> Latitude:</div>    
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
```

**React.Component** allows you to pull a bunch of functionality into our app class. 

# Constructor() function

Is specific to JavaScript, not React. 
- Must be called before **ANYTHING ELSE!**
- must be called with `props` as an argument.
- The constructor function is a special function that gets run when the class is initialized. 
- Inside all of our **instance methods** and constructor, the keyword `this` refers to the **object** created from that **class** (also known as an **instance**).


```js
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: null } // setting default value
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div> Latitude:</div>;
  }
}
```

# Updating state

Use `setState()`

```js
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null }; // setting default value

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // position is an object returned is our getCurrentPosition() runs sucessfully

        console.log(position);

        this.setState({ lat: position.coords.latitude });   // use setState() to update
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div> Latitude: {this.state.lat}</div>;
  }
}
```

Notice we **DID NOT CALL SOMETHING LIKE**
```js
this.state.lat = position.coords.latitude
```
> This BAD! We do not want to do this. 
> The only time you would EVER want to use direct assignment to state is in the initial default state.

