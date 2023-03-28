import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/post";

const PostForm = ({ performerId }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(performerId, text));
    setText("");
  };

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Write something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
