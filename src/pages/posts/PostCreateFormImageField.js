import React from "react";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

const PostCreateFormImageField = ({
  image,
  handleChangeImage,
  errors,
  imageInput,
}) => {
  return (
    <>
      {image ? (
        <>
          <figure>
            <Image className={styles.Media} src={image} rounded />
          </figure>
          <div>
            <Form.Label className={btnStyles.Button} htmlFor="image-upload">
              Change the image
            </Form.Label>
          </div>
        </>
      ) : (
        <Form.Label
          className="d-flex justify-content-center"
          htmlFor="image-upload"
        >
          <Asset src={Upload} message="Click or tap to upload an image" />
        </Form.Label>
      )}
      <Form.File
        id="image-upload"
        className={styles.ChooseFile}
        accept="image/*"
        onChange={handleChangeImage}
        ref={imageInput}
      />
      {errors?.image?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
    </>
  );
};

export default PostCreateFormImageField;
