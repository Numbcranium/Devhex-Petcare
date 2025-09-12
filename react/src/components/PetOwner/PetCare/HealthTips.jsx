import React, { useEffect, useState } from "react";
import healthTipsData from "../../../data/healthTips.json";
import  '../../../styles/PetCare.css'

const HealthTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setTips(healthTipsData);
  }, []);

  return (
  <div className="care-card">
                <h3>
                    <div className="card-icon"></div>
                    Health Tips
                </h3>
                <ul className="tips-list">
                    {tips.map((tip, index) => (
                        <li key={index} className="tip-item">
                            <div className="tip-icon"></div>
                            <div className="tip-content">
                                <div className="tip-title">{tip.title}</div>
                                <div className="tip-description">{tip.description}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
  );
};

export default HealthTips;
