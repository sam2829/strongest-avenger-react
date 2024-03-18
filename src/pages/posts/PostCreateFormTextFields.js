import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";

const TextFields = ({
  title,
  characterName,
  characterCategory,
  content,
  handleChange,
}) => {
  const history = useHistory(); // Obtain history object using useHistory hook

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
      <Form.Group>
        <Form.Label>Character name</Form.Label>
        <Form.Control
          type="text"
          name="characterName"
          value={characterName}
          onChange={handleChange}
        />
      </Form.Group>
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
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${styles.PostButton}`}
        type="submit"
      >
        create
      </Button>
      <Button
        className={`${btnStyles.Button} ${styles.PostButton}`}
        onClick={() => history.goBack()} // Use history.goBack()
      >
        cancel
      </Button>
    </>
  );
};

export default TextFields;
