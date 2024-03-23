import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
        ]);
        setPost({ results: [post] });
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <>
      <Row>
        <Col lg={{ span: 2 }} className="d-none d-lg-block">
          <p>Search by desktop:</p>
        </Col>
        <Col lg={{ span: 6, offset: 1 }}>
          <p>Popular for mobiles</p>
          <p>Search by mobiles</p>
          <Post {...post.results[0]} setPosts={setPost} postPage />
        </Col>
        <Col lg={{ span: 2, offset: 1 }} className="d-none d-lg-block">
          <p>Popular for desktop</p>
        </Col>
      </Row>
    </>
  );
};

export default PostPage;
