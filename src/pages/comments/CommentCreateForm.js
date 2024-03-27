import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

import CommentAgree from "./CommentAgree";

const CommentCreateForm = ({
  profile_id,
  profileImage,
  post,
  setPost,
  setComments,
}) => {
  const [content, setContent] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  // Function so content field displays whats being typed
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
        agree,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
      setAgree(false);
      setErrors({});
    } catch (err) {
      setErrors(err.response.data);
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <Form.Control
            className={`${styles.textarea} ${styles.Form}`}
            placeholder="my comment..."
            as="textarea"
            value={content}
            onChange={handleChange}
            rows={2}
          />
          <CommentAgree agree={agree} setAgree={setAgree} />
        </InputGroup>
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <div className="d-flex justify-content-center">
        <button className={`${btnStyles.Button}`} type="submit">
          post
        </button>
      </div>
    </Form>
  );
};

export default CommentCreateForm;
