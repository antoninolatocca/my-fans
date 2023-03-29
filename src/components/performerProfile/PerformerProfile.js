import React from 'react';
import PerformerProfileHeader from './PerformerProfileHeader';
import PerformerProfileTabs from './PerformerProfileTabs';
import './PerformerProfile.css';
import { useLocation } from 'react-router-dom';

function PerformerProfile(props) {
  const performerId = props.match.params.id;
  const location = useLocation();

  return (
    <div className="performer-profile">
      <PerformerProfileHeader performerId={performerId} />
      <PerformerProfileTabs performerId={performerId} />
      
    </div>
  );
}

export default PerformerProfile;
