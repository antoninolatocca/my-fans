import React from 'react';
import PropTypes from 'prop-types';

function PerformerProfileVideoList() {

  const videos = [];

  return (
    <div>
      <h2>Video</h2>
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

PerformerProfileVideoList.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PerformerProfileVideoList;
