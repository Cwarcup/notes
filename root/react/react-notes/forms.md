# Forms

By default, when "enter" is pressed, a form will submit a form. Can prevent this like so:
```js

class SearchBar extends React.Component {
  state = { term: '', placeholder: 'Search' };

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form"> //add method in the form
          <div className="field">
            //...
          </div>
        </form>
      </div>
    );
  }
}
```

---

Now what if we wanted to return our props terms in the `onFormSubmit()` method?
Like so:
```js
class SearchBar extends React.Component {
  state = { term: '', placeholder: 'Search' };

  onFormSubmit(event) {
    event.preventDefault();
    console.log(console.log(this.state.term));
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder={this.state.placeholder}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
```

We get an error: "Uncaught TypeError: Cannot read properties of undefined (reading 'state')".

# 'this' keyword and `bind()`

See notes for `this`.

--- 

Solving the problem:

**1. use `bind()`**

`bind()` is used here to produce a new version of the function. This new function created is fixed with the correct value of 'this'.
```js
class Car {
  constructor() {
    this.drive = this.drive.bind(this);
  }
  
	setDriveSound(sound) {
    this.sound = sound;
  }
    
  drive() {
    return this.sound
  }
};

const car = new Car();
car.setDriveSound('Vroom');

const drive = car.drive

drive() //Vroom
```

**2. Turn the function into ARROW FUNCTION**
- arrows functions automatically bind the function.
- this ensures our value of `this` **always** refers to our class `SearchBar`.
- this is the simplest way of resolving the issue.

```js
class SearchBar extends React.Component {
  state = { term: '', placeholder: 'Search' };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(console.log(this.state.term));
  };

  //...render()
}
```

**3. use an arrow function on our props**

```js
<form onSubmit={() => this.onFormSubmit(event)}>
```