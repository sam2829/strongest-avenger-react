import React from "react";
import Form from "react-bootstrap/Form";
import styles from "../../styles/PostCreateEditForm.module.css";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import Alert from "react-bootstrap/Alert";
import btnStyles from "../../styles/Button.module.css";

const PostCreateFormVideoField = ({
  video,
  handleChangeVideo,
  errors,
  videoInput,
}) => {
  return (
    <>
      {video ? (
        <>
          <figure>
            <div className={styles.VideoContainer}>
              <video src={video} className={styles.Media} controls>
                Your browser does not support the video tag.
              </video>
              <div
                className={styles.PlayButton}
                onClick={() => document.getElementById("video").play()}
              ></div>
            </div>
          </figure>
          <div>
            <Form.Label className={btnStyles.Button} htmlFor="video-upload">
              Change the video
            </Form.Label>
          </div>
        </>
      ) : (
        <Form.Label
          className="d-flex justify-content-center"
          htmlFor="video-upload"
        >
          <Asset src={Upload} message="Click or tap to upload a video" />
        </Form.Label>
      )}
      <Form.File
        id="video-upload"
        className={styles.ChooseFile}
        accept="video/*"
        onChange={handleChangeVideo}
        ref={videoInput}
      />
      {errors?.video?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    </>
  );
};

export default PostCreateFormVideoField;
