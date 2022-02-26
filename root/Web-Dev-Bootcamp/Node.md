# Getting started

1. create a new directory `mkdir <name of dir>`
1. `cd` into the new directory and create a new file with `touch <file name>`.
1. launch VS Code with `code .`
1. use the command `node <js file name>` to execute the JavaScript code in the file.

## REPL Read Evaluation Print Loop

Allows you to run code in bite sized chunks.

use the command `node` while in the file.

# Use Native Node Modules

[node.js modules](https://nodejs.org/dist/latest-v16.x/docs/api/)

# NPM

1. start by `cd`ing into the directory.
1. run command `npm init -y` to set up a new or existing npm package. This will create your `package.json` file.
1. To [install](https://docs.npmjs.com/cli/v8/commands/npm-install) a new npm module, use the command `npm install <module name>`. This will download the module and add the module to your dependencies.
1. If a file already has a has a `package.json` file, run `npm install` to install all modules listed as dependencies in package.json.

## Express

[installing express](https://expressjs.com/en/starter/installing.html)

```
$ mkdir myapp
$ cd myapp

$ npm init //to create a package.json file for your application
$ npm install express --save //install Express in the myapp directory and save it in the dependencies list
```

Can add the following code to your JavaScript project. This app starts a server and listens on port 3000 for connections

```
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

To run locally, use `$ node app.js` or `$ nodemon app.js`.

load http://localhost:3000/ in a browser to see the output
