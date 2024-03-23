import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/PostsPage.module.css";
import appStyles from "../../App.module.css";
import NoResultsImg from "../../assets/no-results.png";
import { axiosReq } from "../../api/axiosDefaults";
import { useLocation } from "react-router";
import Post from "./Post";
import Asset from "../../components/Asset";

const PostsPage = ({ message, filter = "" }) => {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  let postsContent;
  // Whilst loading, screen will display spinner
  if (!hasLoaded) {
    postsContent = (
      <Container className={appStyles.Content}>
        <Asset spinner />
      </Container>
    );
    // If there are no results for the posts
  } else if (posts.results.length === 0) {
    postsContent = (
      <Container className={appStyles.Content}>
        <Asset src={NoResultsImg} message={message} />
      </Container>
    );
    // Display the list of posts
  } else {
    postsContent = posts.results.map((post) => (
      <Post key={post.id} {...post} setPosts={setPosts} />
    ));
  }

  return (
    <>
      <Row>
        <Col lg={{ span: 2 }} className="d-none d-lg-block">
          <p>Search by desktop:</p>
        </Col>
        <Col lg={{ span: 6, offset: 1 }}>
          <p>Popular for mobiles</p>
          <p>Search by mobiles</p>
          <i className={`fas fa-search ${styles.SearchIcon}`} />
          <Form
            className={styles.SearchBar}
            onSubmit={(event) => event.preventDefault()}
          >
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              placeholder="Search posts"
            />
          </Form>
          {postsContent}
        </Col>
        <Col lg={{ span: 2, offset: 1 }} className="d-none d-lg-block">
          <p>Popular for desktop</p>
        </Col>
      </Row>
    </>
  );
};

export default PostsPage;
