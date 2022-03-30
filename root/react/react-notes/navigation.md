# Navigation

Showing different sets of components when the URL changes. 

Often make use of a popular library named ['React-Router'](https://reactrouter.com/docs/en/v6).
However...
- React router has frequent breaking changes.
- More important to learn the ideas and theory of navigation

![](react-images/routeMapping.png)
Whenever we are at 'x' URL, show 'Y' component.

If you go to a desired URl (`http://localhost:3000/translate`), and then open console and type `window.location` and you will see the **`pathname`** property. Pathname is everything inside the URL except the origin.

## Route Mappings

![](react-images/mappings.png)

Whenever `window.location.pathname === '/'` show the `Accordion` component. And so on.

Over in `App.js` file, we make the following changes:

```js
const App = () => {
  const [selected, setSelected] = useState(options[0]);

  const showAccordion = () => {
    if (window.location.pathname === '/') {
      return <Accordion items={items} />;
    }
  };

  const showList = () => {
    if (window.location.pathname === '/list') {
      return <Search />;
    }
  };

  const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
      return (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      );
    }
  };

  const showTranslate = () => {
    if (window.location.pathname === '/translate') {
      return <Translate />;
    }
  };

  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

export default App;
```

**Downsides to this approach:**
- repetitive logic and code.

## Reusable Routes: Create Component for Routes

```js
import React from 'react';

// create and show components with custom routes
// props will be the path and component we want to render
const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
```
> Important you add the props names as **children**. This is because when you pass nested props (like in app.js), then get passed down as `children`.

```js
//app.js
const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Route path="/">
            // here the props get passed down as children
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}    // here the props get passed down as children
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
```

# When to navigate users

Intentional Navigation: *user clicks on a `Link` component.*
Programmatic Navigation: *we run code to forcibly navigate the user through our app.*

Best Practice:
- User submits a form
- We make a request to backend API to create the stream
- some time passes...
- **API responds with success or error.**
- We wither show error to the user or navigate them back to list of streams.

# History References

[react-router-dom v5 docs on history:](https://v5.reactrouter.com/web/api/Router/history-object)

![](react-images/history.png)

It can be difficult to get access to this history object, because the **BrowserRouter** creates it. 

Instead, we will create our **own [history object](https://v5.reactrouter.com/web/api/Router/history-object)**.

![](react-images/browserhistory.png)

Will use a plain [**route** component.](https://v5.reactrouter.com/web/api/Route)

Can see [react-router-dom notes](https://github.com/Cwarcup/notes/blob/main/root/react/react-notes/react-router-dom.md#router-types) for better understanding of types of routers.

# Creating a Browser History Object

```js
import { createBrowserHistory } from 'history';   // gets installed with react-router-dom
export default createBrowserHistory();
```
> Will get a history object deprecation warning. Use the code below in your `history.js` file.

Inside you components App.js file, we need to import the history object, and update our [`Router`](https://v5.reactrouter.com/web/api/Router) component to use it.

```js
import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';    // <-- import history object

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>   // <-- change `BrowserRouter` to `Router` and pass in history object
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
```

# Implementing Browser History Object and Programmatic Navigation

After creating the history object and changing the `BrowserRoute` to a plain [`Route`](https://v5.reactrouter.com/web/api/Router), we can use it to navigate the user.

In the arc/actions/index.js (where all the action creators are), we import the history object `import history from '../history';` and add the following line:
```js
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId }); 
  dispatch({ type: CREATE_STREAM, payload: response.data });

  // Do some programmatic navigation to get back to the root route
  history.push('/');     // <- call push() to navigate to a new URL to navigate the user
};
```

use `history.push('ROUTE_YOU_WANT_TO_NAVIGATE_TO')` to navigate the user to a new route.

