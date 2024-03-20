import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router";

const TextFields = ({
  title,
  characterName,
  characterCategory,
  content,
  handleChange,
  errors,
}) => {
  console.log("Errors in TextFields component:", errors);
  const history = useHistory();

  return (
    <>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Character name</Form.Label>
        <Form.Control
          type="text"
          name="characterName"
          value={characterName}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.character_name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Character category</Form.Label>
        <Form.Control
          as="select"
          name="characterCategory"
          value={characterCategory}
          onChange={handleChange}
        >
          <option value="Avenger">Avenger</option>
          <option value="X-Men">X-Men</option>
          <option value="Anti-Hero">Anti-Hero</option>
          <option value="Villain">Villain</option>
        </Form.Control>
      </Form.Group>
      {errors?.character_category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Button} ${styles.PostButton}`}
        type="submit"
      >
        create
      </Button>
      <Button
        className={`${btnStyles.Button} ${styles.PostButton}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
    </>
  );
};

export default TextFields;
