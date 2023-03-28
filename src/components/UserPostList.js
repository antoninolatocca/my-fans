import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const UserPostList = () => {
  const posts = useSelector((state) => state.posts);
  const user = useSelector((state) => state.user);

  const userPosts = posts.filter((post) => post.user === user.id);

  return (
    <div>
      {userPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default UserPostList;
