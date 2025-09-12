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
                    <div className="card-icon"></div>
                    Feeding Guide
                </h3>
                <div className="feeding-charts">
                    {guide.map((item, index) => (
                        <div key={index} className="chart-item">
                            <div className="chart-title">{item.type}</div>
                            <div className="chart-amount">{item.food}</div>
                        </div>
                    ))}
                </div>
               
            </div>

 
  );
};

export default FeedingGuide;
