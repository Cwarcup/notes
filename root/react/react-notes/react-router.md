# React Router

[Docs](https://reactrouter.com/)

## Route
[Docs](https://v5.reactrouter.com/web/api/Route)
-  Its most basic responsibility is to render some UI when its path matches the current URL.

```js
<Route path="/" component={HomeScreen} exact />
```
Path = what route 
component = what component do you want to display at this

A React component to render only when the location matches. It will be rendered with route props.

