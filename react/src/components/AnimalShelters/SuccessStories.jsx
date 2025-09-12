
import React, { useEffect, useState } from "react";
import storiesData from "../../data/stories.json";
import "../../styles/SuccessStories.css";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    setStories(storiesData);
  }, []);

  return (
    <div className="stories-page">
      <div className="stories-panel">
        <header className="stories-hero">
          <h1>Happy Endings</h1>
          <p className="sub">
            Real stories from pets who found their forever homes 🐾
          </p>
        </header>

        <main className="stories-grid" role="list">
          {stories.map((s) => (
            <article className="story-card" key={s.id} role="listitem">
              <div className="story-img">
                <img src={s.img} alt={s.pet} loading="lazy" />
              </div>
              <div className="story-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default SuccessStories;
