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