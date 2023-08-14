import timeAgoConverter from "../../utils/timeAgoConverter";
import { ReactComponent as Likes } from "../../assets/images/Icons/likes.svg";
import "./Comment.scss";

export default function Comment({ comment, setDeletedCommentId, setLikedCommentId }) {
  return (
    <div className="comment">
      <div className="comment__image"></div>
      <div className="comment-container">
        <h4 className="comment-container__name">{comment.name}</h4>
        <span className="comment-container__date">
          {`${timeAgoConverter(comment.timestamp)}`}
          <button
            className="comment-container__likes"
            onClick={(e) => {
              e.preventDefault();
              setLikedCommentId(comment.id);
            }}
          >
            <Likes />
          </button>
          {comment.likes}
          <button
            className="comment-container__delete"
            onClick={(e) => {
              e.preventDefault();
              setDeletedCommentId(comment.id);
            }}
          >
            Delete
          </button>
        </span>
        <p className="comment-container__text">{comment.comment}</p>
      </div>
    </div>
  );
}
