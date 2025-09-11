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
                    <div class="card-icon">🎓</div>
                    Training Tips
                </h3>
                <div class="media-grid">
                    <div class="media-item">
                        <div class="media-placeholder"></div>
                        <div class="media-info">
                            <div class="media-title">Basic Commands Audio Guide</div>
                            <div class="media-description">Listen to proper pronunciation for sit, stay, come commands</div>
                        </div>
                    </div>
                    <div class="media-item">
                        <div class="media-placeholder"></div>
                        <div class="media-info">
                            <div class="media-title">House Training Manual</div>
                            <div class="media-description">Complete text guide for successful house training</div>
                        </div>
                    </div>
                    <div class="media-item">
                        <div class="media-placeholder"></div>
                        <div class="media-info">
                            <div class="media-title">Leash Training Audio Tips</div>
                            <div class="media-description">Expert advice on teaching proper leash behavior</div>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default TrainingTips;
