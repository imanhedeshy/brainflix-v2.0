import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VideoUpload from "./pages/VideoUpload/VideoUpload";
import VideoDetails from "./pages/VideoDetails/VideoDetails";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.scss";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<VideoDetails />} />
        <Route path="/upload" element={<VideoUpload />} />
        <Route path="/videos/:videoId" element={<VideoDetails />} />
        <Route
          path="/*"
          element={
            <div className="not-found">
              <span>404</span>
              <p>Page Not Found</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
