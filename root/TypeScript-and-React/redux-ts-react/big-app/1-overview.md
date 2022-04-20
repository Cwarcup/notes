# Overview of the project

The application uses a CLI to launch an interactive development environment for writing and documenting code. 

## Features

User enters the command `jbook serve` to start the development environment. The user is prompted to navigate to 'http://localhost:4005' to view the application.

The 'text' button adds in a new next cell to the document. The user is prompted with a markdown editor where they can write out documentation. User has access to full markdown syntax (links, bullets, etc). Once the user clicks outside of the cell, the cell is rendered as markdown.

The 'code' button creates a new cell with a fully featured code editor. The user can write code on the left side, and automatically render the code on the right side. The user can also show the code by using a special method called `show()` to display content. 

User can add in as many cells as they'd like. 

For example, if the user calls `show(123)`, the right hand side will display '123'. 

Code cell features:
- handle advanced code syntax (e.g. JavaScript with JSX syntax).
- import and use any module from NPM (e.g. `import axios from 'axios'`).
- import CSS files from NPM (e.g. `import 'bootstrap/dist/css/bootstrap.min.css'`).

All content is stored in a file called 'book.js' in the root of the project. Inside this file is the content written in the browser. This file can shared with other users and loaded into jbook. 

## Challenges

Executing the code that a user provides in a preview window. 

Creating a cell to accept markdown and render it as markdown.

Code cell needs to take in some code, render it, and display the result in a preview window. 

Code will be provided to Preview as a *sting*. We have to execute it safely. The code may have a syntax error, therefore,we need to ensure this doesn't crash the application. 

The code might have advanced JavaScript syntax in it (e.g. JSX) which the browser can not execute. Need to preprocess this code before executing it.

The code might have import statement for other JavaScript or CSS. We have to deal with those import statements *before* executing the code.


---
 
We will use a bundler to automatically find all the modules to user has imported from NPM. 