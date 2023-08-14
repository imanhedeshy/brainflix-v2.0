import "./SelectedVideo.scss";

import Hero from "../Hero/Hero";
import Details from "../Details/Details";

export default function SelectedVideo({ videoDetails, setNewComment, likeVideo, viewVideo }) {

  return (
    <>
      <Hero videoDetails={videoDetails} viewVideo={viewVideo} />
      <Details videoDetails={videoDetails} setNewComment={setNewComment} likeVideo={likeVideo} />
    </>
  );
}
