import React, { useEffect, useState } from "react";
import feedingData from "../../../data/feeding.json";

const FeedingGuide = () => {
  const [guide, setGuide] = useState([]);

  useEffect(() => {
    setGuide(feedingData);
  }, []);

  return (
    <div className="card">
      <h3 className="card-title">Feeding Guide</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Pet Type</th>
            <th>Recommended Feeding</th>
          </tr>
        </thead>
        <tbody>
          {guide.map((item, idx) => (
            <tr key={idx}>
              <td>{item.type}</td>
              <td>{item.food}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedingGuide;
