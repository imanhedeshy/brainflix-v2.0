import "./NextVideo.scss";

export default function NextVideo(props) {
  return (
    <li
      className="next-video"
    >
      <img
        className="next-video__image"
        src={`${props.updatedVideo.image}`}
        alt={`${props.updatedVideo.title}`}
      />
      <div className="next-video__details">
        <h3 className="next-video__details-title">{`${props.updatedVideo.title}`}</h3>
        <p className="next-video__details-channel">{`${props.updatedVideo.channel}`}</p>
      </div>
    </li>
  );
}
