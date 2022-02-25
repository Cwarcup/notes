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
    Has a title of: ${title}
    is it finished? ${completed}
  `);
}; 