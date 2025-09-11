import React, { useEffect, useState } from "react";
import storiesData from "../../data/stories.json";
import "../../styles/SuccessStories.css";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(storiesData);
  }, []);

  return (
    <div>
      <h2>Adoption Success Stories</h2>
      <div className="story-grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.title} />
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
