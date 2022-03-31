# REST-ful Conventions

Are a predefined system of rules for how to structure your API.

| action                             | Method | Route        | Response from API |
| ---------------------------------- | ------ | ------------ | ----------------- |
| List all records                   | GET    | /streams     | array of records  |
| Get a record by ID                 | GET    | /streams/:id | single record     |
| Create a record                    | POST   | /streams     | single record     |
| Update ALL properties of a record  | PUT    | /streams/:id | single record     |
| Update SOME properties of a record | PATCH  | /streams/:id | no content        |
| Delete a record                    | DELETE | /streams/:id | nothing           |

| methods | What it does                    |
| ------- | ------------------------------- |
| GET     | retrieves resources.            |
| POST    | submits new data to the server. |
| PUT     | updates existing data.          |
| PATCH   | updates SOME existing data.     |
| DELETE  | removes data.                   |

Will use [JSON-Server](https://www.npmjs.com/package/json-server) as an example:

# Setting up an API Server

Make a new directory for your API server. In here, initialize npm and install the following packages:
```
mkdir api

npm init -y

npm install --save json-server
```

Create a db.json file with some data

```json
{
  "streams": []
}
```

Over time, we will add records to the db.json file.

Inside `package.json`, add the following to the `scripts` section:
```json
  //...
    "scripts": {
    "start": "json-server -p 3001 -w db.json",
  },
  //...
```

> This will start a server on port 3001 and watch for changes to the db.json file.

Can now run `npm start` to start the server.

So now if we want to make a GET request get a list of all records, we do a GET request to `localhost:3001/streams`.

If we want to get a specific record, we do a GET request to `localhost:3001/streams/:id`.
If we want to create a new record, we do a POST request to `localhost:3001/streams`.

# Connect API to React

Can create a new folder and file (apis/streams.js) to handle all of the API requests. Can use axios to make the request.

```js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001',
});
```

# Actions: Creating multiple action creators with REST-ful API

If you have been making use of a restful API, you can easily create action creators for each of the different requests.

```js
// attempt to make request to API server to create a new stream
export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post('/streams', formValues);     // second argument is the data we want to send to the server

  dispatch({ type: CREATE_STREAM, payload: response.data });       // payload contains the data we want inside of response
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
}

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
}

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
}

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
}
```

# Reducer: Handling fetching, creating, updating

[Can refer back to object key interpolation notes: ](https://github.com/Cwarcup/notes/blob/main/root/react/react-notes/redux.md#object-based-reducers)

```js
const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {

  case FETCH_STREAM:
    return { ...state, [action.payload.id]: action.payload } //ES6 way of adding a new key to an object

    case CREATE_STREAM:
    return {...state, [action.payload.id]: action.payload}

  case EDIT_STREAM:
    return {...state, [action.payload.id]: action.payload}

  default:
    return state
  }
}
```

# Reducer: Handling deleting a record - Omit

Can do `_.omit` to remove a key from an object.

Syntax:
```js
_.omit(state, <key you want to delete>)
```

For our example in StreamHub:
```js
//...
case DELETE_STREAM:
    return _.omit(state, action.payload);
//...
```

# Reducer: Merging list of records - _.mapKeys

```js
const colors = [
  { hue: 'green'},
  { hue: 'red'},
  { hue: 'blue'},
];

_.mapKeys(colors, 'hue')

// blue: {hue: 'blue'}
// green: {hue: 'green'}
// red: {hue: 'red'}
```

Can use [lodash method `_.mapKeys`](https://lodash.com/docs/4.17.15#mapKeys) to create a new object with the **keys being the id of the record**.

```js
_.mapKeys(action.payload, 'id')

or 
case FETCH_STREAMS:
      return {...state, ..._.mapKeys(action.payload, 'id')};  // use lodash to map the payload into a new object with the id as the key

```

# Manually Changing API records

Can go into the [db.json file](https://github.com/Cwarcup/react-with-redux/blob/main/10-streams/apis/db.json) and change the data.