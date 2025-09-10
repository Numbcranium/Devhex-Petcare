import React from "react";

const GroomingVideos = () => {
  return (
    <div className="card">
      <h3 className="card-title">Grooming Videos</h3>
      <div className="video-grid">
        <iframe
          src="https://www.youtube.com/embed/fvG9CM2zv30"
          title="Dog Grooming"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/0aYrYyA5v9g"
          title="Cat Grooming"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GroomingVideos;
