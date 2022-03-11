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

# Serving static assets

[express docs on static files.](https://expressjs.com/en/starter/static-files.html)

Node.js [path.join](https://nodejs.org/api/path.html#pathjoinpaths).

```js
(path.join(__dirname, '../public')
```
> Use `..` to move up the tree.

To serve static files such as images, CSS files, and JavaScript files, use the `express.static` built-in middleware function in Express.

The function signature is:
```js
express.static(root, [options])
```
The **root argument** specifies the **root directory** from which to serve static assets. In our case, `__dirname`.

For more information on the options argument, see [express.static.](https://expressjs.com/en/4x/api.html#express.static).

`express.static()` takes the path to the folder we want to serve up. In our case, we want to serve the content in the `public` directory, to pass on our `index.html`.

Remember, this is done by `path.join(__dirname, '../public'`.

All together:
```js
app.use(express.static(path.join(__dirname, '../public')));
```

So if we have an HTML file in the `public` directory, we can serve this page

Serve up a directory:
```js
app.use(express.static(path.join(__dirname, '../public')));
```

Can also create a variable to store the path to the public directory.
```js
const publicDirectoryPath = path.join(__dirname, 'public');

app.use(express.static(publicDirectoryPath));
```

Now if we create more files in the public folder, we can visit them in the browser as so "http://localhost:3000/about.html".

# Serving CSS, JS, Images and more

Can link our css and javascript files to individual html files. 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/styles.css" />   // css
    <title>About</title>
  </head>
  <body>
    <h1>About</h1>
    <img src="/img/me.jpg" /> // images
  </body>
</html>

```
> Have also created new file within 'public' called 'js' and 'css'. These will house our javascript and css respectively.

# Dynamic Webpages with Template Engine 

Will use [Handlebars](https://www.npmjs.com/package/handlebars) to create templates.

Use [hbs](https://www.npmjs.com/package/hbs) to communicate with Node.js

`npm i hbs`

Need to create handlebars templates by creating a **'views'** folder in the root of our directory.

Create new `index.hbs` file, treat this like an html file.. 

To render this file, we need to update our code on app.js on our web-server:
```js
// set hbs as our default engine
app.set('view engine', 'hbs');

app.get('', (req, res) => {
  res.render('index');
});
```
> use res.render() to RENDER the page.

In `res.render('index', object)`..
- first argument is the **hbs file we want to render**, and second argument is an **object** with all the properties we want to render. For example:
```js
//app.js
app.set('view engine', 'hbs');

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Curtis',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
  });
});
```
```hbs
<!DOCTYPE html>
  <head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script type="text/javascript" src="/js/app.js"></script>
    <title>{{title}}</title>
  </head>
  <body>
    <h1>{{name}}</h1>
  </body>
</html>
```

We insert the **properties** in our hbs file using double curly braces `{{key from object}}`.

# Customizing hbs Handlebars

What if we want to **change** the name of the `views` folder? 
You have to tell express where to look:

```js
const viewsPath = path.join(__dirname, '../templates');

app.set('views', viewsPath); // correctly pointing express to custom directory.
```

Here is a copy of the express template so far:
```js
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Curtis',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
  });
});

// app.get('/weather', (req, res) => {
//   res.send({
//     forecast: 'sunny as fuck',
//     location: {
//       lat: 123,
//       long: 234,
//     },
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

# Partials

Create headers and footers and insert them into each of our pages. Will need to create a separate folder named 'partials'. SHould also have a folder named 'views'. Both these folders will reside within 'templates' folder. 

Example header file:
```hbs
<h1>{{title}}</h1>

<div>
  <a href="/">Weather</a>
  <a href="/about">About</a>
  <a href="/help">Help</a>

</div>

// index.hbs
<!DOCTYPE html>
  <head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script type="text/javascript" src="/js/app.js"></script>
    <title>{{title}}</title>
  </head>
  <body>
    {{>header}}
    <p> Weather page homepage</p>
    {{>footer}}
  </body>
</html>
```

**Reference partials by using `{{> partialsName}}`**.

In your server app.js, make sure you have defined the paths for express config:
```js
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
```
Can serve up information from app.js to the various routes:
```js
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Curtis Warcup',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    title: 'About Me',
    name: 'Curtis Warcup',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful info',
    title: 'Help',
    name: 'Curtis Warcup',
  });
});
```