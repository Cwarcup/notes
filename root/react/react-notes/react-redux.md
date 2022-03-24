# React-Redux

npm docs on react-redux: [here](https://www.npmjs.com/package/react-redux)

# How React-Redux Works

Using React-Redux, we wll create two new components: **Provider** and **Connect**. These are both created by React-Redux. We will create **instances** of these components in our application, and pass some **props** to **both of them**.

![](react-images/react-redux.png)

The 'store' gets passed on as a prop to the **provider**. The provider is a component that is responsible for providing the 'store' to all of our components.

**Connect Component**:
Is special because it directly communicates with the `Provider` at the top of our hierarchy. It does not communicate through the props system, but through the **context system**. Essentially it is a special system that allows any parent component to communicate with any child component, even if they have another component between them.

# App Structure

- /src
  - /action 
    - Contains files related to action creators.
    - creates an action (JavaScript object).
    - often named `index.js` so we can just call `import actions from '../actions';`. Is easier for webpack to handle as it is a single file.
  - /components
    - Contains files related to components.
  - /reducers
    - Contains files related to reducers.
    - Receive, change, and return state.
    - often named `index.js` so we can just call `import reducers from '../reducers';`. Is easier for webpack to handle as it is a single file.
  - index.js
    - sets up both the react and redux sides of the app.

Example action creator:
```js
// Action creators

export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}
```

Example reducer:
```js
// reducing functions
import { combineReducers } from 'redux';

// song list reducer: returns a static list of songs
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' },
  ];
};

// selected song reducer: returns the selected song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// will pass in an object. The keys of our object will be the keys that show up in our state object.
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
```