import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  const { id, title, description, image, likes, comments } = post;

  return (
    <div className="post-card">
      <Link to={`/posts/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className="post-card-content">
        <Link to={`/posts/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <div className="post-card-footer">
          <div className="likes">
            <span>{likes}</span> Likes
          </div>
          <div className="comments">
            <span>{comments.length}</span> Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
