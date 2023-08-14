import "./Comments.scss";

import Comment from "../Comment/Comment";

export default function Comments({ comments, setDeletedCommentId, setLikedCommentId }) {
  const updatedCommentsArray = comments.sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return updatedCommentsArray.map((comment) => (
    <Comment
      key={comment.id}
      comment={comment}
      setDeletedCommentId={setDeletedCommentId}
      setLikedCommentId={setLikedCommentId}
    />
  ));
}
