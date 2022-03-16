# State in React

# Rules of State
1. Only usable with **class components**
2. 'State' is a JS **object** that contains data relevant to a **component**.
3. **Updating** 'state' on a component causes the component to **render**.
4. state must be **initialized** when a **component is created**.

If we want a **component to update itself**, we must change its **state!**

`State` can **ONLY** be updated using the function **`setState()`**

# Updating State

```js
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: 40 }; // setting default value
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div> Latitude: {this.state.lat}</div>;      // update this state by using "this.state" and selecting the appropriate key from the object created in the constructor.
    
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));