import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import commentStyles from "../../styles/CommentCreateEditForm.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CommentRender from "../comments/CommentRender";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`),
          axiosReq.get(`/comments/?post=${id}`),
        ]);
        setPost({ results: [post] });
        setComments(comments);
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
        <Col lg={{ span: 6, offset: 3 }}>
          <Container className={commentStyles.commentContainer}>
            <h3 className={commentStyles.CommentTitle}>Comments</h3>
            {currentUser && (
              <CommentCreateForm
                profile_id={currentUser.profile_id}
                profileImage={profile_image}
                post={id}
                setPost={setPost}
                setComments={setComments}
              />
            )}
            <CommentRender comments={comments} currentUser={currentUser} />
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default PostPage;
