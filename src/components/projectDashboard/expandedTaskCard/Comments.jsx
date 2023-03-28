import React from "react";

const Comments = ({ setNewComment, comments }) => {
  return (
    <div>
      <textarea
        onChange={(event) => setNewComment(event.target.value)}
      ></textarea>
      {comments.map((comment, i) => (
        <div key={i}>
          <h4>{comment.author}</h4>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
