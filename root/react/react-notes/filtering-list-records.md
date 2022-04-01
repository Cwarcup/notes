# Filtering List Records

We may have a very long list created by users of our database. We might want to filter the list of records based on the current user. 
```js
  // method to render stream list
  renderList() {
    return this.props.streams.map((stream) => {
      if (this.props.currentUserId !== stream.userId) { // <- conditional to check ifer the current user is the same as the stream user
        return null;
      }
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <Link to={`streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  ```