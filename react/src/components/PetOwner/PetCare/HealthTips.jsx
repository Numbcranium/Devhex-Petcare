import React, { useEffect, useState } from "react";
import healthTipsData from "../../../data/healthTips.json";

const HealthTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setTips(healthTipsData);
  }, []);

  return (
    <div className="card">
      <h3 className="card-title">Health Tips</h3>
      <ul className="list">
        {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
      </ul>
      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default HealthTips;
