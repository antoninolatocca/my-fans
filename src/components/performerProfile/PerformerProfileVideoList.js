import React from 'react';

function PerformerProfileVideoList() {

  const videos = [];

  return (
    <div>
      <h2>Video</h2>
      <button className="dark-button">Create Video</button>
      {videos.map((video) => (
        <div key={video.id}>
          <div>
            <video src={video.url} controls width="600" height="400" />
          </div>
          <div>
            <span>{video.title}</span>
          </div>
          <div>
            <button>Like</button>
            <button>Comment</button>
            <button>Tip</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PerformerProfileVideoList;
