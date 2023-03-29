import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from './PostCard';

const PerformerProfilePostList = () => {
  const posts = useSelector((state) => state.post.posts);
  const performer = useSelector((state) => state.performer);
  const performerPosts = posts.filter((post) => post.performerId === performer.id);

  return (
    <div className="performer-profile-post-list">
      <div className="performer-profile-post-list-header">
        <h2>Posts</h2>
      </div>
      <button className="dark-button">Create Post</button>
      {performerPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PerformerProfilePostList;
