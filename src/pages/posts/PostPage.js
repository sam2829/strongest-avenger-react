import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Comment from "../comments/Comment";

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
          {currentUser && (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          )}
          {comments.results.length ? (
            comments.results.map((comment) => (
              <Comment key={comment.id} {...comment} />
            ))
          ) : (
            <span>
              {currentUser
                ? "No comments, be the first to comment!"
                : "No comments... yet"}
            </span>
          )}
        </Col>
      </Row>
    </>
  );
};

export default PostPage;
