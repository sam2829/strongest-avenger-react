import React from "react";
import Comment from "../comments/Comment";
import commentStyles from "../../styles/CommentCreateEditForm.module.css";

const CommentRender = ({ comments, currentUser }) => {
  return (
    <>
      {comments.results.length ? (
        comments.results.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))
      ) : (
        <p className={commentStyles.Message}>
          {currentUser
            ? "No comments, be the first to comment!"
            : "No comments... yet"}
        </p>
      )}
    </>
  );
};

export default CommentRender;
