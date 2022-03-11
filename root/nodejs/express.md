# Express

[Express docs](https://expressjs.com/)

```
$ npm install express
```

Getting started:
```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

How do we control what paths to our various routes?
```js
//facebook.com
//facebook.com/profile
//facebook.com/about
```

# Routing
express [docs](https://expressjs.com/en/starter/basic-routing.html) on routing. Detailed [here](https://expressjs.com/en/guide/routing.html).

Route definition takes the following structure:
```js
app.METHOD(PATH, HANDLER)
```
Where:
- app is an instance of express.
- METHOD is an[ HTTP request method](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods), in lowercase.
  - GET
  - POST
  - PUT
  - DELETE
- PATH is a path on the server.
  - `/about`
- HANDLER is the function executed when the route is matched.
  - `(req, res) => {}`

remember:
| Methods	|       URI     |      result    |
| ------- | ------------- | -------------- |
|  GET   	|  /posts       | retrieve all posts |
|  GET  	|  /posts/:id   | retrieve posts with the given ID |
|  POST   |  /posts       |  create a new post |
|  PUT    |  /posts/:id   |  update a post |
|  DELETE |  /posts:id    | deletes a post |

`res.send()` allows you to send something back to the browser window or npm server.
```js
app.get('/', (req, res) => {
  res.send("hello express")
});
```
>This will SEND the string to the root url.

## Starting up the server
```js
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Can run the node server with `node app.js`.


# Serving up JSON and HTML
Will still be using `res.send()` just change what's inside.

Can send **HTML** directly:
```js
app.get('/weather', (req, res) => {
  res.send(`<h1>Weather</h1>`);
});
```

Can send **JSON** directly:
```js
app.get('/weather', (req, res) => {
  res.send({
    forecast: 'sunny as fuck',
    location: {
      lat: 123,
      long: 234,
    },
  });
});
```
> Will be able to our json at http://localhost:3000/weather.

# Serving up static assets

```
console.log(__dirname); // /Users/curtisw/weather-app/web-server/src
console.log(__filename); // /Users/curtisw/weather-app/web-server/src/app.js
```
> These provide paths to the root directory and the path to the file itself.

