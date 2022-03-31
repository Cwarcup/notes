# Implementing Streaming

Update App Route to render a Stream with a specific ID in URL:
```js
const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};
```

Add use `Link` from react router dom to the specific stream iD:
```js
// within StreamList component, renderList() method
<Link to={`streams/${stream.id}`} className="header">
  {stream.title}
</Link>
```