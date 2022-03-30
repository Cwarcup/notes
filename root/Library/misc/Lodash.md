# Lodash

General Docs: [here](https://lodash.com/)

# Memoize

Allows you to only make a request to the server once, and then cache the response. therefore, if you program is making multiple requests to the server, it will only make one request.


```js
function getUsers(id) {
  fetch(id);
  return 'Request was made!'
}

getUsers(1) // `Request was made!`
getUsers(1) // `Request was made!`
getUsers(1) // `Request was made!`
// can run this multiple times and return a network request. 

// memoize the function
const memoizedGetUser = _.memoize(getUser)

memoizedGetUser(1) // `Request was made!`
memoizedGetUser(1) // no request was made
memoizedGetUser(1) // no request was made
```

Another example: Not memoized
```js
// fetch one individual user at a time from jsonPlaceholder
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
```
Memoized version: Need to create a memoized function for the fetchUser action creator.
```js
// fetch one individual user at a time from jsonPlaceholder
export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});
```
> This will now only fetch the user once, and then cache the response.


# Installing

```
npm install --save lodash
```

# Chain Methods

Sometime you may want to chain multiple methods together.

For example, this is a little messy:
```js
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());  // call `fetchPosts`, need await to wait for `fetchPosts` to finish
  const userIds = _.uniq(_.map(getState().posts, 'userId')); / get list of unique userIds from posts using lodash
  userIds.forEach((id) => dispatch(fetchUser(id))); // iterate over userIds and call `fetchUser` for each userId
```

Can use lodash's `_.chain()` method to make this cleaner:

Need to add a `.value()` to the end of the chain to execute all the steps. 

```js
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  _.chain(getState().posts) 
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};
```