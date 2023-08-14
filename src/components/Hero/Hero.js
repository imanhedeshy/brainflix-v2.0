import { useEffect } from "react";
import "./Hero.scss";

export default function Hero({ videoDetails, viewVideo }) {
  // useEffect(() => {
  //   viewVideo(videoDetails.id);
  // }, [videoDetails.id]);
  
  return (
    <section className="hero">
      <video
        controls
        poster={videoDetails.image}
        className="hero__video"
      >
        <source src={videoDetails.video} type="video/mp4" />
      </video>
    </section>
  );
}
