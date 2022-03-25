# How to fetch data in a redux app


We use a **class based component** so we easily have access to lifecycle methods such as `componentDidMount()`.

General Flow:
1. Component gets rendered onto the screen.
2. Components `componentDidMount` lifecycle method is called.
3. We call **action creator** from `componentDidMount` method.
4. Action creators runs code to **make an API request**, using axios.
5. API responds with data.
6. Action creator returns an `action` object with the **fetched data** on the **payload** property.
7. Some **reducer** sees the action, returns the data off the `payload`. 
8. Because we generate some new state object, redux/react-redux causes our React app to be re-rendered.

Steps 1 - 3: **Components** are generally responsible for **fetching data** the need by calling an **action creator**. Usually some a lifecycle method like `componentDidMount()`.

Steps 4 - 6: **Action Creators** are responsible for **making API requests**. This is where **Redux Thunk** comes in to play. 

Steps 7 - 8: We get fetched data into a components by generating new state in our redux store, then getting that into our component through`mapStateToProps`.

# Wiring up an Action Creator

Steps 1 - 3:

in src/action/index.js:
```js
// rxaction snippet

export const fetchPosts = (payload) => ({
  type: 'FETCH_POST',
});
```

In src/components/PostList.js:
- import connect method from react-redux
- import the action creator
```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>PostList</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
```


# Middleware in Redux

**Synchronous action creators ***instantly* return an action withy data ready to go. 

**Asynchronous action creators** take *some amount of time* for it to get it's data ready. This requires some kind of **middleware** to handle the asynchronous request.

## What is a middleware in Redux?

![](react-images/middlewarecycle.png)

An action gets send to our **middleware** before being sent off to the reducers. 

- Is a **function** that gets called with *every action we dispatch*. 
- It has the ability to **STOP, MODIFY** or **ADD** to our **actions**.
- There are tons of open source middleware libraries.
    - most popular middleware is for *dealing with async actions*.
    - we are going to use a middleware called **redux-thunk** to solve our async issues.

See redux-thunk notes here: Covers steps 4-6.

# setup Reducers

Recall, we have an Action creator (fetchPosts) that returns an action object. It has type `FETCH_POSTS` and payload with the data. The reducer is responsible for watching for actions with type `FETCH_POSTS` and returning the data off the payload.


In your reducer folder, have your main `index.js` and `reducer.js` files. In my case, I have a `postReducer.js` file.

Inside index.js, use the `combineReducers` method to combine all of our reducers.
```js
import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer,
});
```

## Rules of Reducers

- Must return any value besides `undefined`.
  - must have a return statement.
- Produces `state`, or data to be used inside of your app using only previous state and the action (reducers are pure functions).
- Must NOT return reach 'out of itself' to decide what value to return.
- Must not mutate its input `state` argument.
  - only need to worry about mutation when returning an array or object. 
  - these rules do not apply for numbers or strings.
  - this rule is misleading...it IS possible to mutate the input `state` argument. Redux will not throw an error message. However, people/docs say you should not. 

```js
export default () => {

  //bad! - causes mutation
  state[0] = 'sam'
  sate.pop()
  state.push()

  //bad!
  state.name = 'sam'
  state.age = 30

  // BAD! - returns something outside itself
  return document.querySelector('input');

  // BAD!
  return axios.get('/posts');
};
```
```js
export default (state, action) => {
  // good
  return state + action
};
```

# Safe State Updates in Reducers

![safestateupdates](react-images/safestateupdates.png)