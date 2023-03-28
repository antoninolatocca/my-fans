import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';

function PerformerProfile() {
  const { name, description, posts } = useSelector(state => state.profile);

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Posts</h3>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PerformerProfile;
