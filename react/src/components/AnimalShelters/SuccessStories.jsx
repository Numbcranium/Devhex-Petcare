
import storiesData from "../../data/stories.json";
import "../../styles/SuccessStories.css";

import React from "react";
import "../../styles/SuccessStories.css";

const stories = [
  {
    id: 1,
    title: "Bella Finds Her Forever Home",
    pet: "Bella",
    img: "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1200&auto=format&fit=crop",
    desc: "Bella, a sweet Labrador, was adopted by a loving family in June. She now enjoys long walks at the beach and endless playtime with her new siblings."
  },
  {
    id: 2,
    title: "Max & Emily’s Bond",
    pet: "Max",
    img: "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1200&auto=format&fit=crop",
    desc: "Max the tabby cat instantly bonded with his adopter Emily. They are now inseparable, sharing cozy evenings and fun adventures."
  },
  {
    id: 3,
    title: "Snowy Hops Into Happiness",
    pet: "Snowy",
    img: "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1200&auto=format&fit=crop",
    desc: "Snowy the rabbit was rescued and found a calm, safe environment with her new owner. She loves cuddles and hopping around the garden."
  }
];
 function SuccessStories() {
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
}
export default SuccessStories;