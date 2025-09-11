import React, { useEffect, useState } from "react";
import vetsData from "../../data/vets.json";
import "../../styles/VetProfile.css";

const VetProfile = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    setVets(vetsData);
  }, []);

  return (
    <div>
      <h2>Veterinarian Profiles</h2>
      <div className="vet-grid">
        {vets.map((vet) => (
          <div key={vet.id} className="vet-card">
            <img src={vet.image} alt={vet.name} className="vet-img" />
            <h3>{vet.name}</h3>
            <p><strong>Specialization:</strong> {vet.specialization}</p>
            <p><strong>Contact:</strong> {vet.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VetProfile;
