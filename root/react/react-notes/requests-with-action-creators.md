# Make a request with Action Creators

[Personal Notes on axios:](https://github.com/Cwarcup/notes/blob/main/root/react/react-notes/Axios.md#axios)

[Personal Notes on Redux-Thunk:](https://github.com/Cwarcup/notes/blob/main/root/react/react-notes/redux-thunk.md#redux-thunk)

Will need to install `axios` and `redux-thunk`:
```
npm install --save axios redux-thunk
```
> need these to write an async action creator.

Create a new file for your API:
```js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:30001',
});
```

Import this file into your main actions index.js file:
```js
import streams from '../apis/streams';
```

Create new action creator in your actions index.js file:
```js
export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post('/streams', formValues); // second argument is the data we want to send to the server

  dispatch({ type: 'CREATE_STREAM', payload: response.data });
};
```
