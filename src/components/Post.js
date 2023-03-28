import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.image} alt={post.title} />
      <div className="post-details">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </div>
  );
};

export default Post;
