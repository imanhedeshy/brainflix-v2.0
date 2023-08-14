import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Header from "../../components/Header/Header";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import "./VideoDetails.scss";

export default function VideoDetails() {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [videoDetails, setVideoDetails] = useState(null);

  const { videoId } = useParams();
  const targetVideoId = useRef();

  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [isFound, setIsFound] = useState(true);

  const [updatedVideos, setUpdatedVideos] = useState([]);

  // fetch videos and selected videoDetails and sets the page title
  useEffect(() => {
    setIsLoadingVideos(true);
    axios
      .get(`${API_URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        targetVideoId.current = videoId || response.data[0].id;

        const newUpdatedVideos = response.data.filter(
          (video) => video.id !== targetVideoId.current
        );
        setUpdatedVideos(newUpdatedVideos);

        return axios.get(
          `${API_URL}/videos/${targetVideoId.current}?api_key=${API_KEY}`
        );
      })
      .then((response) => {
        if (!response.data[0]) {
          setIsFound(false);
          return;
        }
        document.title = `BrainFlix | ${videoId ? response.data[0].title : "Home"}`;
        setVideoDetails(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoadingVideos(false);
      });
  }, [videoId]);

  const likeVideo = async (event) => {
    event.preventDefault();
    await axios
      .put(
        `${API_URL}/videos/${targetVideoId.current}/likes?api_key=${API_KEY}`
      )
      .then((res) => {
        setVideoDetails((prevVideoDetails) => ({
          ...prevVideoDetails,
          likes: parseInt(prevVideoDetails.likes) + 1,
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const viewVideo = async (videoId) => {
    await axios
      .put(`${API_URL}/videos/${videoId}/views?api_key=${API_KEY}`)
      .then((res) => {
        setVideoDetails((prevVideoDetails) => ({
          ...prevVideoDetails,
          views: parseInt(prevVideoDetails.views) + 1,
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (isLoadingVideos) {
    return (
      <div className="loading">
        <div className="cube"></div>
      </div>
    );
  }

  if (!isFound) {
    return (
      <div className="not-found">
        <span>404</span>
        <p>Page Not Found</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <SelectedVideo
        videoDetails={videoDetails}
        likeVideo={likeVideo}
        viewVideo={viewVideo}
      />
      <NextVideos updatedVideos={updatedVideos} />
    </div>
  );
}
