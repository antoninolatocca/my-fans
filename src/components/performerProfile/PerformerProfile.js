import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PerformerProfileHeader from './PerformerProfileHeader';
import PerformerProfileTabs from './PerformerProfileTabs';
import PerformerProfileAbout from './PerformerProfileAbout';
import PerformerProfilePostList from './PerformerProfilePostList';
import PerformerProfileAlbumList from './PerformerProfileAlbumList';
import PerformerProfileVideoList from './PerformerProfileVideoList';
import './PerformerProfile.css';

function PerformerProfile() {
  const { id } = useParams();
  const performerId = id;
  const location = useLocation();

  var activePanel = <></>;

  switch(location.pathname) {
    case `/performers/${performerId}/posts`:
      activePanel = <PerformerProfilePostList />;
      break;
    case `/performers/${performerId}/albums`:
      activePanel = <PerformerProfileAlbumList />;
      break;
    case `/performers/${performerId}/videos`:
      activePanel = <PerformerProfileVideoList />;
      break;
    default:
      activePanel = <PerformerProfileAbout />;
  }

  return (
    <div className="performer-profile">
      <PerformerProfileHeader />
      <PerformerProfileTabs />
      <div className="performer-subpage-container">
        {activePanel}
      </div>
    </div>
  );
}

export default PerformerProfile;
