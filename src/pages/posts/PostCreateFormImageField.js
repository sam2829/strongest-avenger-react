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
  postData,
  setPostData,
  errors,
  imageInput,
  imageFile,
}) => {
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
        defaultValue={imageFile || ""}
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
