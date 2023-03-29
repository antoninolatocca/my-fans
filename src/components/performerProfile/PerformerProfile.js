import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
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

  return (
    <div className="performer-profile">
      <PerformerProfileHeader performerId={performerId} />
      <PerformerProfileTabs />
      <Routes>
        <Route exact path="/performer/:id/*" element={<PerformerProfileAbout />} />
        <Route exact path="/performer/:id/posts" element={<PerformerProfilePostList />} />
        <Route exact path="/performer/:id/albums" element={<PerformerProfileAlbumList />} />
        <Route exact path="/performer/:id/videos" element={<PerformerProfileVideoList />} />
      </Routes>
    </div>
  );
}

export default PerformerProfile;
