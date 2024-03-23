import React from "react";
import styles from "../../styles/Post.module.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { axiosRes } from "../../api/axiosDefaults";

const PostLikeIcon = ({
  id,
  is_owner,
  like_id,
  likes_count,
  currentUser,
  setPosts,
}) => {
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

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
        <span onClick={handleUnlike}>
          <i className={`fas fa-heart ${styles.Heart}`} />
        </span>
      ) : currentUser ? (
        <span onClick={handleLike}>
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
