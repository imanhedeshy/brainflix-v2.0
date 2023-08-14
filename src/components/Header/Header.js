import { Link } from "react-router-dom";

import "./Header.scss";

import { ReactComponent as Upload } from "../../assets/images/Icons/upload.svg";

import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import search from "../../assets/images/Icons/search.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="BrainFlix Logo" />
      </Link>
      <div className="header-navbar">
        <div className="header-navbar__search">
          <img
            className="header-navbar__search-icon"
            src={search}
            alt="Search logo"
          />
          <input
            className="header-navbar__search-input"
            placeholder="Search"
          ></input>
        </div>
        <Link to="/upload/" className="header-navbar__uploadButton">
          <Upload className="header-navbar__uploadButton-icon" />
          <p>Upload</p>
        </Link>
        <img
          className="header-navbar__profilePic"
          src={profilePic}
          alt="profile"
        />
      </div>
    </header>
  );
}
