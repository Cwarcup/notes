# Open Broadcasting Software OBS

[Site](https://obsproject.com/welcome)

## Scene Setup

1. Create a new scene with the + on bottom left corner. 
2. Add new source to the scene, select 'Display Capture'.
3. Add an audio source to the scene, select 'Audio Capture'.

# Video Source Setup
The URl used needs to be setup from OBS: [See docs here:](https://github.com/illuspas/Node-Media-Server#from-obs)

> Settings -> Stream
> 
> Stream Type : Custom Streaming Server
>
> URL : rtmp://localhost/live
>
> Stream key : STREAM_NAME

The STREAM NAME is designated by OBS. 

Open OBS, go to **settings** -> **Stream** -> **Stream Type** -> **Custom Streaming Server**

Enter the URL: rtmp://localhost/live
Stream key: STREAM_NAME (will be the id number of the stream)