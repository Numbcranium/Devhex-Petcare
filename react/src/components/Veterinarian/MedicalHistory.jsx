import React, { useEffect, useState } from "react";
import historyData from "../../data/medicalHistory.json";
import "../../styles/MedicalHistory.css";

const MedicalHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(historyData);
  }, []);

  return (
    <div className="section">
      <h2 className="section-title">
        <div className="section-icon">📋</div>
         Pet Medical Histories
      </h2>
      <div className="case-studies">
        {history.map((caseItem) => (
          <div className="case-study" key={caseItem.id}>
            <div className="case-title">
              {caseItem.species} - {caseItem.petName} (Age: {caseItem.age})
            </div>
            <div className="case-details">
              <div className="case-detail">
                <span><strong>Condition:</strong></span>
                <span>{caseItem.condition}</span>
              </div>
              <div className="case-detail">
                <span><strong>Treatment:</strong></span>
                <span>{caseItem.treatment}</span>
              </div>
              <div className="case-detail">
                <span><strong>Status:</strong></span>
                <span>{caseItem.status}</span>
              </div>
              <div className="case-detail">
                <span><strong>Duration:</strong></span>
                <span>{caseItem.duration}</span>
              </div>
            </div>
            <p className="case-description">{caseItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalHistory;
