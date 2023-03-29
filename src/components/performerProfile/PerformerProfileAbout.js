import React from 'react';

const PerformerProfileAbout = ({ performer = {
  name: 'Antonino Latocca',
  description: 'L\'ideatore di questo progetto',
  country: 'Italy',
  website: 'http://antoninolatocca.com/',
  followers: 0
} }) => {
  return (
    <div>
      <h2>About {performer.name}</h2>
      <p>{performer.description}</p>
      <p>Location: {performer.country}</p>
      {performer.website && <p>Website: {performer.website}</p>}
      <p>Followers: {performer.followers}</p>
    </div>
  );
};

export default PerformerProfileAbout;
