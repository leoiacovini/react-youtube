import React from 'react';

const VideoDetail = ({video}) => {
  if(!video) { return <div>Loading</div> }
  const url = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div><b>{video.snippet.title}</b></div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
