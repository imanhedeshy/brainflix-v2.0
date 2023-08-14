import timeAgoConverter from "../../utils/timeAgoConverter";
import "./Description.scss";

import { ReactComponent as Views } from "../../assets/images/Icons/views.svg";
import { ReactComponent as Likes } from "../../assets/images/Icons/likes.svg";

export default function Description({ videoDetails, likeVideo }) {
  return (
    <article className="description">
      <h3 className="description__title">{videoDetails.title}</h3>
      <div className="description__hero">
        <div className="description__datechannel">
          <h3 className="description__channel">By {videoDetails.channel}</h3>
          <span className="description__date">{`${timeAgoConverter(
            videoDetails.timestamp
          )}`}</span>
        </div>
        <div className="description__viewslikes">
          <span className="description__views">
            <Views /> {videoDetails.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
          <span className="description__likes">
            <button
              className="description__likes-button"
              onClick={(e) => likeVideo(e)}
            >
              <Likes />
            </button>
            {videoDetails.likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      </div>
      <p className="Description__description">{videoDetails.description}</p>
    </article>
  );
}
