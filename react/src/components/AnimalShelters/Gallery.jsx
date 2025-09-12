import React, { useEffect, useState } from "react";
import petsData from "../../data/shelterpets.json";
import "../../styles/Gallery.css";

const AdoptablePets = () => {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setPets(petsData);
  }, []);

  const filteredPets =
    filter === "All" ? pets : pets.filter((p) => p.species === filter);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Find Your New Best Friend</h2>
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
    </section>
  );
};

export default AdoptablePets;
