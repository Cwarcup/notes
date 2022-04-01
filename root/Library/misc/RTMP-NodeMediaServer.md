# RTMP NodeMediaServer

[Node Media Serve github:](https://github.com/illuspas/Node-Media-Server#npm-version-recommended)

# Getting Started - npm version
```
npm install --save node-media-server
```

Will use [Node Media Server](https://github.com/illuspas/Node-Media-Server#npm-version-recommended) package and create our RTMP server. Often index.js needs a slight modification to the import for v.2.1.0

use the following import:
```js
// in new index.js
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();
```
In package.json, add the following:
```json
 "scripts": {
    "start": "node index.js"
  },
```
> Can now run `npm start` to start the server.

Use `port 8000 `to access the **stream** from **viewers browser**.

The RTMP server also access traffic on `port 1935`, where we are going to **send incoming video streams** to using **OBS**.

# Video Player Setup

[Accessing live streams](https://github.com/illuspas/Node-Media-Server#accessing-the-live-stream)

Will be implementing this with via [flv.js over websocket-flv](https://github.com/illuspas/Node-Media-Server#via-flvjs-over-http-flv).

Install [flv.js here](https://www.npmjs.com/package/flv.js):

Within the react application folder:
  ```js
  npm install --save flv.js
  ```

Within the component that you want to display the video stream, add the following:

```js
import flv from 'flv.js';

class StreamShow extends Component {
  constructor(props) {    // <--- create constructor
    super(props);

    this.videoRef = React.createRef();
  }

//...

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />  / <--- add a ref to video element
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
```