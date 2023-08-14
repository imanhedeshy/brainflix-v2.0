import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { ReactComponent as Upload } from "../../assets/images/Icons/upload.svg";

import UploadThumbnailPlaceholder from "../UploadThumbnailPlaceholder/UploadThumbnailPlaceholder";
import "./UploadForm.scss";

export default function UploadForm() {
  const API_URL = "https://iman-hedeshy-api-heroku-2331c58eb9de.herokuapp.com";
  const API_KEY = "caf0a1c9-1cac-4619-8fe6-8fa51ffba824";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const postVideo = async () => {
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("channel", "Mohan Muruge");
      formData.append("image", thumbnail);
      formData.append("description", description);
      formData.append("views", 0);
      formData.append("likes", 0);
      formData.append("duration", "11:11");
      formData.append("video", "https://iman-hedeshy-api-heroku-2331c58eb9de.herokuapp.com/videos/BrainStation Sample Video.mp4");
      formData.append("timestamp", new Date().getTime().toString());
      formData.append("comments", "[]");

      const response = await axios
        .post(`${API_URL}/videos?api_key=${API_KEY}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })

        .catch((err) => console.error(err));

      if (response.data && response.data.id) {
        console.log(response.data.id);
        navigate(`/videos/${response.data.id}`);
      } else throw new Error("Video upload did not return expected data");
    } catch (error) {
      console.error(error);
    }
  };

  const handleThumbnailClick = (event) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleThumbnailChange = (event) => {
    event.preventDefault();
    setThumbnail(event.target.files[0]);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    postVideo();
    // alert(`${title} has been uploaded with description: ${description}`);
  };

  return (
    <div className="upload-form">
      <h1 className="upload-form__heading">Upload Video</h1>
      <form onSubmit={(e) => submitHandler(e)} className="upload-form-form">
        <div className="upload-form-form__main">
          <div>
            <label className="upload-form-form__label">Video Thumbnail</label>
            <div
              onClick={handleThumbnailClick}
              className="upload-form-form__thumbnail"
            >
              {thumbnail ? (
                <img
                  src={URL.createObjectURL(thumbnail)}
                  alt="Upload video thumbnail"
                />
              ) : (
                <UploadThumbnailPlaceholder />
              )}
            </div>
            <input
              ref={fileInputRef}
              className="upload-form-form__fileInput"
              onChange={handleThumbnailChange}
              name="image"
              type="file"
              accept="image/*"
            ></input>
          </div>
          <div>
            <label htmlFor="name" className="upload-form-form__label">
              Title your video
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a title to your video"
              id="name"
              name="title"
              className="upload-form-form__input"
              type="text"
            ></input>
            <label htmlFor="description" className="upload-form-form__label">
              Add a video description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description to your video"
              id="description"
              name="description"
              className="upload-form-form__input upload-form-form__input--description"
              type="text"
            ></textarea>
          </div>
        </div>
        <div className="upload-form-form__buttons">
          <Link className="upload-form-form__buttons-cancel" to="/">
            Cancel
          </Link>
          <button className="upload-form-form__buttons-publish">
            <Upload />
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
