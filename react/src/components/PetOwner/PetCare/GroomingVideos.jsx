import React from "react";

const GroomingVideos = () => {
  return (
              <div className="care-card">
                <h3>
                    <div className="card-icon">✂️</div>
                    Grooming Videos
                </h3>
                <div className="media-grid">
                    <div className="media-item">
                        <div className="media-placeholder"></div>
                        <div className="media-info">
                            <div className="media-title">Daily Brushing Techniques</div>
                            <div className="media-description">Learn proper brushing methods for different coat types</div>
                        </div>
                    </div>
                    <div className="media-item">
                        <div className="media-placeholder"></div>
                        <div className="media-info">
                            <div className="media-title">Bath Time Made Easy</div>
                            <div className="media-description">Step-by-step bathing guide for stress-free grooming</div>
                        </div>
                    </div>
                    <div className="media-item">
                        <div className="media-placeholder"></div>
                        <div className="media-info">
                            <div className="media-title">Nail Trimming Basics</div>
                            <div className="media-description">Safe nail cutting techniques and tips</div>
                        </div>
                    </div>
                </div>
            </div>


  );
};

export default GroomingVideos;
