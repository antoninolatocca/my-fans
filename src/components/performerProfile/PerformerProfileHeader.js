import React from 'react';
import {useParams} from 'react-router-dom';

const PerformerProfileHeader = () => {

  const { id } = useParams();
  const performerId = id;

  return (
    <div className='performer-page-header'>
      <div className='performer-page-header-cover'></div>
      <div className='performer-page-header-avatar'></div>
    </div>
  );
};

export default PerformerProfileHeader;
