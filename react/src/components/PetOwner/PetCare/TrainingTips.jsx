import React, { useEffect, useState } from "react";
import trainingData from "../../../data/trainingTips.json";

const TrainingTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    setTips(trainingData);
  }, []);

  return (
    <div className="card">
      <h3 className="card-title">Training Tips</h3>
      <ul className="list">
        {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
      </ul>
      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default TrainingTips;
