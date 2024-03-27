import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { MoreDropdown } from "../../components/MoreDropdown";

// Comment component to display a single comment
const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, agree } =
    props;

  // Get current user and if if user is owner of post
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div>
      {/* Horizontal line to separate comments */}
      <hr />
      <Media className="align-items-center">
        <Link
          to={`/profiles/${profile_id}`}
          className="d-flex align-items-center"
        >
          {/* Avatar of the comment owner */}
          <Avatar src={profile_image} height={35} />
          <span className={`ml-2 ${styles.Owner}`}>{owner}</span>
        </Link>
        <div className="ml-auto d-flex align-items-center">
          {/* Display date and MoreDropdown on the right */}
          <span className={styles.Date}>{updated_at}</span>
          {is_owner && (
            <div className="ml-1">
              <MoreDropdown handleEdit={() => {}} handleDelete={() => {}} />
            </div>
          )}
        </div>
      </Media>
      {/* Row to display comment content and agree/disagree icons */}
      <div className="my-2 d-flex align-items-center">
        <div className="text-left flex-grow-1">
          <p className={styles.Content}>{content}</p>
        </div>
        {/* Displays icon if user agreed */}
        {agree && (
          <div className={styles.Tick}>
            <i className="fa-solid fa-circle-check"></i>
          </div>
        )}
        {/* Displays icon if user disagreed */}
        {!agree && (
          <div className={styles.Cross}>
            <i className="fa-solid fa-circle-xmark"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
