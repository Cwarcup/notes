# React Router

[Docs](https://reactrouter.com/)

[Also see react-router-dom notes](https://github.com/Cwarcup/notes/blob/main/root/react/react-notes/react-router-dom.md)

## Route
[Docs](https://v5.reactrouter.com/web/api/Route)
-  Its most basic responsibility is to render some UI when its path matches the current URL.

```js
<Route path="/" component={HomeScreen} exact />
```
Path = what route 
component = what component do you want to display at this

A React component to render only when the location matches. It will be rendered with route props.


