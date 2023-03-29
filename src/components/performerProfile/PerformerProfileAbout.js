import React from 'react';

const PerformerProfileAbout = ({ performer }) => {
  return (
    <div>
      <h2>About {performer.name}</h2>
      <p>{performer.description}</p>
      <p>Location: {performer.city}, {performer.country}</p>
      {performer.website && <p>Website: {performer.website}</p>}
      <p>Followers: {performer.followers}</p>
      <p>Link: {`/performers/${performer.id}`}</p>
    </div>
  );
};

export default PerformerProfileAbout;
