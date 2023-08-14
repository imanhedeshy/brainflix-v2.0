import Description from "../Description/Description";
import CommentSection from "../CommentSection/CommentSection";

import "./Details.scss";

export default function Details({ videoDetails, setNewComment, likeVideo }) {
  return (
      <main className="details">
        <Description videoDetails={videoDetails} likeVideo={likeVideo} className="main-description"/>
        <CommentSection videoDetails={videoDetails} setNewComment={setNewComment} className="main-commentsection"/>
      </main>
  );
}
