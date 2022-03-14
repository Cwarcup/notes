# Fetch Function

Can only run in client side javascript. This will be running in `app.js` within the js folder. NOT in our server app.js.

mdn docs on fetch: [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

- Fetch() returns a **promise.**
  - In the form of a **[response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object**
    - A
- Simplest use take in **one argument**
  - The **path to the resource you want to fetch.**
  - 

Basic fetch request
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```
> Here we are fetching a JSON file across the network and printing it in console.