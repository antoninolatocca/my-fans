import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

const PerformerProfileHeader = () => {

  const { id } = useParams();
  const performerId = id;

  return (
    <div>
      <div className='performer-page-header'>
        <div className='performer-page-header-cover'></div>
        <div className='performer-page-header-avatar'></div>
        <div className='performer-page-header-buttons'>
          <Link to="/"><button className='dark-button'>Messaggio</button></Link>
          <Link to="/"><button className='dark-button'>Regala</button></Link>
          <Link to="/"><button className='light-button'>Iscriviti</button></Link>
        </div>
      </div>
      <div className='performer-page-subheader'>
        <h3 className='text-center'>Antonino</h3>
      </div>
    </div>
  );
};

export default PerformerProfileHeader;
