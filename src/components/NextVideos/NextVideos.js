import { NavLink } from "react-router-dom";

import NextVideo from "../NextVideo/NextVideo";

import "./NextVideos.scss";

export default function NextVideos({ updatedVideos }) {
  return (
    <aside className="next-videos">
      <h3 className="next-videos__title">Next Videos</h3>
      {updatedVideos.map((updatedVideo) => (
        <NavLink key={`${updatedVideo.id}`} to={`/videos/${updatedVideo.id}`}>
          <NextVideo
            key={`${updatedVideo.id}`}
            updatedVideo={updatedVideo}
          />
        </NavLink>
      ))}
    </aside>
  );
}
