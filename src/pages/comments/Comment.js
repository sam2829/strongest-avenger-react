import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <Media.Body>
          <Row className="my-2">
            <Col xs={12} sm={8} className="text-left">
              <span className={styles.Owner}>{owner}</span>
            </Col>
            <Col xs={12} sm={4} className="text-right">
              <span className={styles.Date}>{updated_at}</span>
            </Col>
          </Row>
          <Row className="my-2 pt-4">
            <Col xs={12} sm={8} className="text-left">
              <p>{content}</p>
            </Col>
            <Col
              xs={12}
              sm={4}
              className="d-flex align-items-center justify-content-end"
            >
              {agree && (
                <div className={styles.Tick}>
                  <i className="fa-solid fa-circle-check"></i>
                </div>
              )}
              {!agree && (
                <div className={styles.Cross}>
                  <i class="fa-solid fa-circle-xmark"></i>
                </div>
              )}
            </Col>
          </Row>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
