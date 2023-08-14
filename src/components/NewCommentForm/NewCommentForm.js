import { useState } from "react";

import "./NewCommentForm.scss";

import { ReactComponent as CommentIcon } from "../../assets/images/Icons/add_comment.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";

export default function NewCommentForm({ videoId, setNewComment }) {
  const [hasError, setHasError] = useState(false);

  const submitComment = (event) => {
    event.preventDefault();

    const comment = event.target.comment.value;
    const name = "Mohan Muruge";

    if (!comment) {
      setHasError(true);
      return;
    } else {
      setHasError(false);
    }

    const newComment = {
      name: name,
      comment: comment,
      likes: 0,
      timestamp: new Date().getTime()
      
    };

    setNewComment(newComment);
  };

  return (
    <article className="new-comment-form">
      <img
        className="new-comment-form__profilepic"
        src={profilePic}
        alt="profile"
      />
      <form className="new-comment-form-form" onSubmit={(e) => submitComment(e)}>
        <div className="new-comment-form-form__container">
          <label className="new-comment-form-form__label" id="comment">
            Join the conversation
          </label>
          <textarea
            className={`new-comment-form-form__input ${
              hasError ? "new-comment-form-form__input--error" : ""
            }`}
            type="text"
            name="comment"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <button className="new-comment-form-form__button">
          <CommentIcon className="new-comment-form-form__button-icon" />
          <span>Comment</span>
        </button>
      </form>
    </article>
  );
}
