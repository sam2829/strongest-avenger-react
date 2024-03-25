import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, agree } =
    props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span>{owner}</span>
          <span>{updated_at}</span>
          {agree && (
            <div className={styles.tick}>
              <i className="fa-solid fa-circle-check"></i>
            </div>
          )}
          {!agree && (
            <div className={styles.cross}>
              <i class="fa-solid fa-circle-xmark"></i>
            </div>
          )}

          <p>{content}</p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
