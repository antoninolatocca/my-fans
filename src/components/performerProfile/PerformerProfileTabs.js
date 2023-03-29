import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const PerformerProfileTabs = () => {
  const location = useLocation();
  const { id } = useParams();
  const performerId = id;

  return (
    <div className="tabs">
      <Link
        className={location.pathname === `/performers/${performerId}` ? 'active' : ''}
        to={`/performers/${performerId}`}
      >
        Presentazione
      </Link>
      <Link
        className={location.pathname === `/performers/${performerId}/posts` ? 'active' : ''}
        to={`/performers/${performerId}/posts`}
      >
        Post
      </Link>
      <Link
        className={location.pathname === `/performers/${performerId}/albums` ? 'active' : ''}
        to={`/performers/${performerId}/albums`}
      >
        Album
      </Link>
      <Link
        className={location.pathname === `/performers/${performerId}/videos` ? 'active' : ''}
        to={`/performers/${performerId}/videos`}
      >
        Video
      </Link>
    </div>
  );
};

export default PerformerProfileTabs;
