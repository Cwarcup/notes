# Generating a React App

```npx create-react-app my-app```

If you get any errors about missing templates or how a global Create React App install is no longer supported, try clearing your npx cache:

```npx clear-npx-cache```

## Default Files and Folders

- **src**
  - where we put all the **source** **code** we write
- **public**
  - stores **static files**
    - images, html page that doesn't change, sounds.
- **node_modules**
  - contains all the project dependencies
- **package.json**
  - records our **package dependencies** and **configures** our project
- **package-lock.json**
  - records the **exact** version of packages that we install

## react component
- is a **function** or a **class**
- purpose is to produce HTML to show to a user using **JSX**.
- handles feedback from the user **using event handlerrs**.

```js // Create react component
const App = function() {
  return <div>Hi there</div>
}
// Take react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
```

