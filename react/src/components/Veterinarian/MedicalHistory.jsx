import React, { useEffect, useState } from "react";
import historyData from "../../data/medicalHistory.json";
import "../../styles/MedicalHistory.css";

const MedicalHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(historyData);
  }, []);

  return (
    <div>
      <h2>Sample Pet Medical Histories</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Species</th>
            <th>Condition</th>
            <th>Treatment</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {history.map((record) => (
            <tr key={record.id}>
              <td>{record.petName}</td>
              <td>{record.species}</td>
              <td>{record.condition}</td>
              <td>{record.treatment}</td>
              <td>{record.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalHistory;
