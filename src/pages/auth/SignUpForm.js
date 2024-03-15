import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/SignUpForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import logo from '../../assets/logo.png';



const SignUpForm = () => {
  return (
    <Container className={styles.Content}>
      <Row className={`${styles.Row} justify-content-center`}>
        <Col md={{ span: 6 }}>
          <Container>
            <Row className="text-center">
              <Col xs="2">
                <img src={logo} alt='logo' height='40'/>
              </Col>
              <Col xs="8">
                <h1 className={styles.Heading}>Sign up</h1>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="justify-content-center text-center p-4">
        <Col md={{ span: 6 }}>
          <Container>
            <Form>
              <Form.Group controlId="username">
                <Form.Label className="d-none">username</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Username"
                  name="username"
                />
              </Form.Group>
              <Form.Group controlId="password1">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password"
                  name="password1"
                />
              </Form.Group>
              <Form.Group controlId="password2">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                />
              </Form.Group>
              <Button className={btnStyles.Button} type="submit">
                Sign up
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
      <Row className="justify-content-center text-center p-2">
        <Col md={{ span: 6 }}>
          <Container>
            <Link className={styles.Link} to="/signin">
              Already have an account? Please <span>Sign in</span>
            </Link>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;