# flv.js Flash Video Player

Is used to convert a video stream, and convert it into a video file that is playable in the browser.

npm docs: https://www.npmjs.com/package/flv.js

Within the react application folder:
```
npm install --save flv.js
```

# FLV in React App

Within the **component** that you want to display the video stream, add the following:

Using the getting started docs from flv, we need to add the following to our react component:
- Create a reference to the video element `<video id="videoElement"></video>`
- create a player and pass the reference to the video player `var flvPlayer = flvjs.createPlayer({})`

```js
import React, { Component } from 'react';
import flv from 'flv.js';   // <-- import flv.js
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {    // <--- create constructor
    super(props);

    this.videoRef = React.createRef();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

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

> Use a constructor() to create a reference of the video element.

# Creating an FLV Player

Need to make sure the FLV player can request data from a server (RTMP server in this case).

Will be making use of [Node Media Server to do this](https://github.com/illuspas/Node-Media-Server#via-flvjs-over-http-flv).

Need to take the previously created reference to the video element and pass it to the `createPlayer()` function. In the docs, the reference is created like so: 

```js
<video id="videoElement"></video>
<script>
  if (flvjs.isSupported()) {
    var videoElement = document.getElementById('videoElement');  // <--- create a reference to the video element
    var flvPlayer = flvjs.createPlayer({  // <-- create player and pass reference
      type: 'flv',
      url: 'http://localhost:8000/live/STREAM_NAME.flv'  //<-- URL we are going to get stream from
    });
    flvPlayer.attachMediaElement(videoElement);
    flvPlayer.load();
    flvPlayer.play();
  }
</script>
```
> Write this in the `componentDidMount()` function.

In react, should be written as so:
```js
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
```

The URl used needs to be setup from OBS: [See docs here:](https://github.com/illuspas/Node-Media-Server#from-obs)

> Settings -> Stream
> 
> Stream Type : Custom Streaming Server
>
> URL : rtmp://localhost/live
>
> Stream key : STREAM_NAME

The STREAM NAME is designated by OBS. 

Final product:
```js
import React, { Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  // use action creator to fetch stream
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id); // attempt to fetch stream
    this.buildPlayer(); // build player
  }

  // any follow up render
  componentDidUpdate() {
    this.buildPlayer();
  }

  // cleanup after stream ends
  componentWillUnmount() {
    this.player.destroy();
  }

  // build player - only display player once data is fetched
  buildPlayer() {
    if (this.player || !this.props.stream) {
      // if player already exists or no stream
      return;
    }

    const { id } = this.props.match.params;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: '100%' }} controls />
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