import React, { useState } from "react";

import Form from "react-bootstrap/Form";
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
    const { name, value } = event.target;
    // Clear the other media type when switching between image and video
    if (name === "mediaType") {
      setPostData({
        ...postData,
        [name]: value,
        image: value === "Video" ? "" : image, // Clear image if switching to video
        video: value === "Image" ? "" : video, // Clear video if switching to image
      });
    } else {
      setPostData({
        ...postData,
        [name]: value,
      });
    }
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

  // Handle change in video field
  const handleChangeVideo = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(video);
      setPostData({
        ...postData,
        video: URL.createObjectURL(event.target.files[0]),
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
                {/* Rendered if image upload is selected */}
                {postData.mediaType === "Image" && (
                  <>
                    {image ? (
                      <>
                        <figure>
                          <Image className={styles.Media} src={image} rounded />
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
                  </>
                )}

                {/* Rendered if video upload is selected */}
                {postData.mediaType === "Video" && (
                  <>
                    {video ? (
                      <>
                        <figure>
                          <div className={styles.VideoContainer}>
                            <video
                              src={video}
                              className={styles.Media}
                              controls
                            >
                              Your browser does not support the video tag.
                            </video>
                            <div
                              className={styles.PlayButton}
                              onClick={() =>
                                document.getElementById("video").play()
                              }
                            ></div>
                          </div>
                        </figure>
                        <div>
                          <Form.Label
                            className={btnStyles.Button}
                            htmlFor="video-upload"
                          >
                            Change the video
                          </Form.Label>
                        </div>
                      </>
                    ) : (
                      <Form.Label
                        className="d-flex justify-content-center"
                        htmlFor="video-upload"
                      >
                        <Asset
                          src={Upload}
                          message="Click or tap to upload a video"
                        />
                      </Form.Label>
                    )}
                    <Form.File
                      id="video-upload"
                      className={styles.ChooseFile}
                      accept="video/*"
                      onChange={handleChangeVideo}
                    />
                  </>
                )}
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
