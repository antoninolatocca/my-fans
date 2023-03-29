import React from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import PerformerProfileHeader from './PerformerProfileHeader';
import PerformerProfileTabs from './PerformerProfileTabs';
import PerformerProfileAbout from './PerformerProfileAbout';
import PerformerProfilePostList from './PerformerProfilePostList';
import PerformerProfileAlbumList from './PerformerProfileAlbumList';
import PerformerProfileVideoList from './PerformerProfileVideoList';
import './PerformerProfile.css';

function PerformerProfile() {
  const [searchParams] = useSearchParams();
  const performerId = searchParams.get('id');

  return (
    <div className="performer-profile">
      <PerformerProfileHeader performerId={performerId} />
      <PerformerProfileTabs performerId={performerId} />
      <Routes>
        <Route exact path="/performer/:id/about" component={PerformerProfileAbout} />
        <Route exact path="/performer/:id/posts" component={PerformerProfilePostList} />
        <Route exact path="/performer/:id/albums" component={PerformerProfileAlbumList} />
        <Route exact path="/performer/:id/videos" component={PerformerProfileVideoList} />
      </Routes>
    </div>
  );
}

export default PerformerProfile;
