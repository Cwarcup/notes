# iframe - Embedding a video into an HTML document

If just like any other element. Difference it can make a request on its own to an outside API. Inh our case, we will be using Youtube

Can use [semantic UI to embed the video:](https://semantic-ui.com/modules/embed.html)

To embed a youtube video, the url goes like: 'https://www.youtube.com/embed/<some unique ID>'

We can create a variable to house this src element:
```js
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
      // create variable to store embedded URL
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
            // add variable within the `iframe` tag.
        <iframe src={videoSrc} title={video.snippet.title}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};
```