import React, { useEffect, useState } from "react";
import petsData from "../../data/shelterpet.json";
import storiesData from "../../data/stories.json";
import "../../styles/Shelter.css";

const ShelterPage = ({ userName }) => {
  const [pets, setPets] = useState([]);
  const [stories, setStories] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setPets(petsData);
    setStories(storiesData);
  }, []);

  const filteredPets = filter === "All" ? pets : pets.filter((p) => p.species === filter);

  return (
    <div className="shelter-container">
      <h2 className="shelter-title">🐶 Animal Shelter</h2>
      <p className="shelter-subtitle">
        Welcome {userName ? userName : "Guest"}, here are our adoptable pets:
      </p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Dog", "Cat", "Rabbit"].map((type) => (
          <button
            key={type}
            className={filter === type ? "active" : ""}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Pet Gallery */}
      <div className="pet-grid">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p><strong>Species:</strong> {pet.species}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Age:</strong> {pet.age}</p>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>

      {/* Success Stories */}
      <h2 className="shelter-title">🎉 Adoption Success Stories</h2>
      <div className="story-grid">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.title} />
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>

      {/* Event Announcements */}
      <h2 className="shelter-title">📢 Upcoming Events</h2>
      <ul className="events-list">
        <li>🐾 Adoption Drive – Sept 20, 2025</li>
        <li>💉 Free Vaccination Camp – Oct 5, 2025</li>
      </ul>

      {/* Contact Info */}
      <h2 className="shelter-title">📍 Contact Us</h2>
      <p>Email: contact@shelter.org</p>
      <p>Phone: +234 812 345 6789</p>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ShelterPage;
