import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const vdata = video.snippet;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={vdata.thumbnails.default.url} alt="thumbnail"/>
        </div>

        <div className="media-body">
          <div className="media-heading">{vdata.title}</div>
        </div>
      </div>
  </li>);
}

export default VideoListItem;
