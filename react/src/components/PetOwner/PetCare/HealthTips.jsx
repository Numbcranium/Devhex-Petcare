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
                    <div className="card-icon">💊</div>
                    Health Tips
                </h3>
                <ul className="tips-list">
                    <li className="tip-item">
                        <div className="tip-icon"></div>
                        <div className="tip-content">
                            <div className="tip-title">Dental Care</div>
                            <div className="tip-description">Brush teeth 2-3 times weekly to prevent dental disease</div>
                        </div>
                    </li>
                    <li className="tip-item">
                        <div className="tip-icon"></div>
                        <div className="tip-content">
                            <div className="tip-title">Weight Management</div>
                            <div className="tip-description">Monitor weight regularly and adjust diet as needed</div>
                        </div>
                    </li>
                    <li className="tip-item">
                        <div className="tip-icon"></div>
                        <div className="tip-content">
                            <div className="tip-title">Vaccination Schedule</div>
                            <div className="tip-description">Keep vaccinations up to date for optimal health protection</div>
                        </div>
                    </li>
                    <li className="tip-item">
                        <div className="tip-icon"></div>
                        <div className="tip-content">
                            <div className="tip-title">Regular Check-ups</div>
                            <div className="tip-description">Annual vet visits help catch health issues early</div>
                        </div>
                    </li>
                </ul>
            </div>
  );
};

export default HealthTips;
