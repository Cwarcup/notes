## Environment Setup

Install compiler:
`npm install -g typescript ts-node`

Confirm install was successful with `tsc --help`

## Creating new directory

```
mkdir fileName

cd fileName
```

Want to record all our dependencies we use for our project. Same thing for JS projects.
```
npm init -y
```

can now install [Axios](https://www.npmjs.com/package/axios)
```
npm install axios
```

---

#### Basic Setup

```
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//interfaces are used in TS to define an object.

axios.get(url).then(response => {

  const todo = response.data as Todo; // add as Todo to tell the response.data it is one of the Todo objects.

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a litle of: ${title}
    is it finished? ${completed}
  `);
}; 
```

`axios.get(url)` will get a promise in return. Can chain on a `.then` when we get a response. 

**Remember** to run your TS, you must first compile the TS into JS. Browsers can NOT just run TS.

In terminal:
```
tsc nameOfFile.ts
```
This will create a new `nameOfFile.js` which can be run with Node.
```
node nameOfFile.js
```

---

Can combine these two commands into one by executing...
```
ts-node nameOfFile.ts
```
Can do this on the typescript file. 
