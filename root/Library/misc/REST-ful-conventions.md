# REST-ful Conventions

Are a predefined system of rules for how to structure your API.

| action             | Method | Route        | Response from API |
| ------------------ | ------ | ------------ | ----------------- |
| List all records   | GET    | /streams     | array of records  |
| Get a record by ID | GET    | /streams/:id | single record     |
| Create a record    | POST   | /streams     | single record     |
| Update a record    | PUT    | /streams/:id | single record     |
| Delete a record    | DELETE | /streams/:id | nothing           |

| methods | What it does                    |
| ------- | ------------------------------- |
| GET     | retrieves resources.            |
| POST    | submits new data to the server. |
| PUT     | updates existing data.          |
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

# Creating multiple action creators with REST-ful API

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

# Handling fetching, creating, updating, and deleting

Can refer back to object key interpolation notes: 