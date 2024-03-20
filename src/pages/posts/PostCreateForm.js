import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";
import PostCreateFormTextFields from "./PostCreateFormTextFields";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

const PostCreateForm = ({ showAlert }) => {
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

  const imageInput = useRef(null);
  const videoInput = useRef(null);
  const history = useHistory();

  // Handle form fields changing
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Clear the other media type when switching between image and video
    if (name === "mediaType") {
      setPostData({
        ...postData,
        [event.target.name]: event.target.value,
        // Clear image if switching to video
        image: value === "Video" ? "" : image,
        // Clear video if switching to image
        video: value === "Image" ? "" : video,
      });
    } else {
      setPostData({
        ...postData,
        [event.target.name]: event.target.value,
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

  // Handle create post submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("character_name", characterName);
    formData.append("character_category", characterCategory);
    formData.append("content", content);

    // Check if mediaType is Image or Video and append the corresponding file
    if (mediaType === "Image") {
      formData.append("image", imageInput.current.files[0]);
    } else if (mediaType === "Video") {
      formData.append("video", videoInput.current.files[0]);
    }

    try {
      console.log("FormData contents:", Object.fromEntries(formData));
      const { data } = await axiosReq.post("/posts/", formData);
      showAlert("success", `You have successfully created a post`);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      if (err.response && err.response.data) {
        // Display the error message received from the server
        console.log("Server Error:", err.response.data);
        setErrors(err.response.data);
      } else {
        console.log("Network Error:", err.message);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
                      ref={imageInput}
                    />
                  </>
                )}
                {errors?.image?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}

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
                      ref={videoInput}
                    />
                  </>
                )}
                {errors?.video?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
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
                errors={errors}
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default PostCreateForm;
