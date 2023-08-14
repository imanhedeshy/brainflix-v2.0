import "./CommentSection.scss";

import Comments from "../Comments/Comments";
import NewCommentForm from "../NewCommentForm/NewCommentForm";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CommentSection({ videoDetails }) {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const videoId = videoDetails.id;

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [deletedCommentId, setDeletedCommentId] = useState(null);
  const [likedCommentId, setLikedCommentId] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const getComments = async () => {
      await axios
        .get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
        .then((response) => {
          setComments(response.data[0].comments);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getComments();
  }, [videoId]);

  useEffect(() => {
    setIsLoading(true);

    const deleteComment = async () => {
      if (deletedCommentId) {
        await axios
          .delete(
            `${API_URL}/videos/${videoId}/comments/${deletedCommentId}?api_key=${API_KEY}`
          )
          .then((response) => {
            setComments((prevComments) =>
              prevComments.filter((comment) => comment.id !== deletedCommentId)
            );
            setIsLoading(false);
          })
          .catch((error) => console.error(error));
      }
    };
    deleteComment();
  }, [deletedCommentId]);

  useEffect(() => {
    setIsLoading(true);
    
    const postComment = async () => {
      if (newComment) {
        await axios
          .post(
            `${API_URL}/videos/${videoId}/comments?api_key=${API_KEY}`,
            newComment
          )
          .then((response) => {
            setComments((prevComments) => [...prevComments, response.data]);
            setIsLoading(false);
          })
          .catch((error) => console.error(error));
      }
    };
    postComment();
  }, [newComment]);

  useEffect(() => {
    const likeComment = async () => {
      if (likedCommentId) {
        await axios
          .put(
            `${API_URL}/videos/${videoId}/comments/${likedCommentId}/likes?api_key=${API_KEY}`
          )
          .then((res) => {
            setComments((prevComments) =>
              prevComments.map((comment) =>
                comment.id === likedCommentId
                  ? { ...comment, likes: parseInt(comment.likes) + 1 }
                  : comment
              )
            );
            setLikedCommentId(null);
          })
          .catch((error) => console.error(error));
      }
    };
    likeComment();
  }, [likedCommentId]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="cube"></div>
      </div>
    );
  }

  return (
    <article className="comment-section">
      <h4 className="comment-section__header">{`${
        videoDetails.comments.length
      } ${videoDetails.comments.length === 1 ? "Comment" : "Comments"}`}</h4>
      <NewCommentForm videoId={videoId} setNewComment={setNewComment} />
      <Comments
        comments={comments}
        setDeletedCommentId={setDeletedCommentId}
        setLikedCommentId={setLikedCommentId}
      />
    </article>
  );
}
