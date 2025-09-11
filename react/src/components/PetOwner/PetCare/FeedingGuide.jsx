import React, { useEffect, useState } from "react";
import feedingData from "../../../data/feeding.json";

const FeedingGuide = () => {
  const [guide, setGuide] = useState([]);

  useEffect(() => {
    setGuide(feedingData);
  }, []);

  return (
     <div className="care-card">
                <h3>
                    <div className="card-icon">🍽️</div>
                    Feeding Guide
                </h3>
                <div className="feeding-charts">
                    <div className="chart-item">
                        <div className="chart-title">Morning</div>
                        <div className="chart-amount">1.5 cups</div>
                    </div>
                    <div className="chart-item">
                        <div className="chart-title">Evening</div>
                        <div className="chart-amount">1.5 cups</div>
                    </div>
                    <div className="chart-item">
                        <div className="chart-title">Treats</div>
                        <div className="chart-amount">2-3 daily</div>
                    </div>
                    <div className="chart-item">
                        <div className="chart-title">Water</div>
                        <div className="chart-amount">Fresh daily</div>
                    </div>
                </div>
               
            </div>

 
  );
};

export default FeedingGuide;
