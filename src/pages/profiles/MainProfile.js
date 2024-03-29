import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import styles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";

const MainProfile = ({ profile }) => {
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === profile?.owner;

  return (
    <>
      <Row className="text-center px-4">
        <Col lg={3}>
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={4}>
          <h3 className="m-4">{profile?.owner}</h3>
          <h5 className="m-4">Favourite Character:</h5>
          <h5 className="m-2">{profile?.favourite_character}</h5>
        </Col>
        <Col lg={3}>
          <p className="m-4">
            Posts: <span>{profile?.posts_count}</span>
          </p>
          <p className="mx-4">
            Followers: <span>{profile?.followers_count}</span>
          </p>
          <p className="m-4">
            Following: <span>{profile?.following_count}</span>
          </p>
        </Col>
        <Col lg={2} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.ProfilePageUnFollow}`}
                onClick={() => {}}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.ProfilePageFollow}`}
                onClick={() => {}}
              >
                follow
              </Button>
            ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <p>About me:</p>
          <p className="m-3">{profile?.content}</p>
        </Col>
      </Row>
    </>
  );
};

export default MainProfile;
