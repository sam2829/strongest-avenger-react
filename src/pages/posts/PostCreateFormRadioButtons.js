import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/PostCreateEditForm.module.css";

const PostCreateFormRadioButtons = ({ mediaType, handleChange }) => {
  return (
    <>
      <Form.Label className={`${styles.FormFields} mt-3`}>
        Select if posting image or video:
      </Form.Label>
      <Row>
        <Col md={{ span: 2, offset: 3 }}>
          <Form.Check
            type="radio"
            label="Image"
            name="mediaType"
            value="Image"
            checked={mediaType === "Image"}
            onChange={handleChange}
            className={styles.RadioButtons}
          />
        </Col>

        <Col md={{ span: 2, offset: 2 }}>
          <Form.Check
            type="radio"
            label="Video"
            name="mediaType"
            value="Video"
            checked={mediaType === "Video"}
            onChange={handleChange}
            className={styles.RadioButtons}
          />
        </Col>
      </Row>
    </>
  );
};

export default PostCreateFormRadioButtons;
