import React, { useEffect, useState } from "react";
import trainingData from "../../../data/trainingTips.json";
import  '../../../styles/PetCare.css'

const TrainingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setTips(trainingData);
  }, []);

  return (
            <div class="care-card">
                <h3>
                    <div class="card-icon"></div>
                    Training Tips
                </h3>
            <div class="media-grid">
                {tips.map((tip, index) => (
                    <div key={index} className="media-item">
                        <div className="media-placeholder"></div>
                        <div className="media-info">
                            <div className="media-title">Tip {index + 1}</div>
                            <div className="media-description">{tip}</div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
  );
};

export default TrainingTips;
