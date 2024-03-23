import React from "react";
import styles from "../../styles/Post.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const PostLikeIcon = ({ is_owner, like_id, likes_count, currentUser }) => {
  return (
    <>
      {is_owner ? (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>You can't like your own post!</Tooltip>}
        >
          <i className="far fa-heart" />
        </OverlayTrigger>
      ) : like_id ? (
        <span onClick={() => {}}>
          <i className={`fas fa-heart ${styles.Heart}`} />
        </span>
      ) : currentUser ? (
        <span onClick={() => {}}>
          <i className={`far fa-heart ${styles.HeartOutline}`} />
        </span>
      ) : (
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip>Log in to like posts!</Tooltip>}
        >
          <i className="far fa-heart" />
        </OverlayTrigger>
      )}
      {likes_count}
    </>
  );
};

export default PostLikeIcon;
