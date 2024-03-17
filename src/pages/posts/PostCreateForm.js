import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import PostCreateFormTextFields from "./PostCreateFormTextFields";

const PostCreateForm = () => {
  // handle errors on the post form
  const [errors, setErrors] = useState({});

  // The post data
  const [postData, setPostData] = useState({
    title: "",
    characterName: "",
    characterCategory: "Avenger",
    content: "",
    image: "",
    video: "",
    mediaType: "Image",
  });
  const {
    title,
    characterName,
    characterCategory,
    content,
    image,
    video,
    mediaType,
  } = postData;

  // Handle form fields changing
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle change in image field
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  return (
    <Form>
      <Container className={appStyles.Content}>
        <Row className="p-4 justify content center">
          <Col md={{ span: 10, offset: 1 }}>
            <Container className="d-flex flex-column justify-content-center">
              <Form.Group className="text-center">
                {image ? (
                  <>
                    <figure>
                      <Image className={styles.Image} src={image} rounded />
                    </figure>

                    <div>
                      <Form.Label
                        className={btnStyles.Button}
                        htmlFor="image-upload"
                      >
                        Change the image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset
                      src={Upload}
                      message="Click or tap to upload an image"
                    />
                  </Form.Label>
                )}

                <Form.File
                  id="image-upload"
                  className={styles.ChooseFile}
                  accept="image/*"
                  onChange={handleChangeImage}
                />
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
              </Form.Group>
            </Container>

            <Container className={styles.FormFields}>
              <PostCreateFormTextFields
                title={title}
                characterName={characterName}
                characterCategory={characterCategory}
                content={content}
                handleChange={handleChange}
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default PostCreateForm;
