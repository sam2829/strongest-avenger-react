import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Post = (props) => {
  const {
    id,
    owner,
    character_name,
    character_category,
    comments_count,
    content,
    image,
    like_id,
    likes_count,
    profile_id,
    profile_image,
    title,
    updated_at,
    video,
    postPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card>
      <Card.Body className={styles.PostBody}>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={45} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
        <Card.Title className={styles.PostTitle}>
          <div>
            <span>{character_name}</span>
          </div>
        </Card.Title>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        {/* if post contains an image the image will be displayed */}
        {image && !video && (
          <Card.Img src={image} alt={title} className={styles.PostMedia} />
        )}
        {/* if the post contains a video the videoa will be displayed */}
        {!image && video && (
          <Card.Body className="p-0">
            <video src={video} className={styles.PostMedia} controls>
              Your browser does not support the video tag.
            </video>
          </Card.Body>
        )}
      </Link>
      <Card.Body className={styles.PostBody}>
        <Card.Title className={styles.PostTitle}>{title}</Card.Title>
        <Card.Text className="text-center py-2">{content}</Card.Text>
        <div className={styles.PostIcons}>
          <div className={styles.IconContainer}>
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
          </div>
          <div className={styles.IconContainer}>
            <Link to={`/posts/${id}`}>
              <i className="far fa-comments" />
            </Link>
            {comments_count}
          </div>

          {currentUser && (
            <div className={styles.IconContainer}>
              <span onClick={() => {}}>
                <i className="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
