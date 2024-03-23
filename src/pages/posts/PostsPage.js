import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchPosts();
  }, [filter, pathname]);

  let postsContent;
  if (!hasLoaded) {
    postsContent = (
      <Container className={appStyles.Content}>
        <Asset spinner />
      </Container>
    );
  } else if (posts.results.length === 0) {
    postsContent = (
      <Container className={appStyles.Content}>
        <Asset src={NoResultsImg} message={message} />
      </Container>
    );
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
