import React, { useEffect, useState } from "react";
import groomingData from "../../../data/groomingVideos.json";

const GroomingVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(groomingData);
  }, []);

  return (
    <div className="care-card">
      <h3>
        <div className="card-icon"></div>
        Grooming Videos
      </h3>
      <div className="media-grid">
        {videos.map((video, index) => (
          <div key={index} className="media-item">
            <div className="media-placeholder"></div>
            <div className="media-info">
              <div className="media-title">{video.title}</div>
              <div className="media-description">{video.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroomingVideos;
