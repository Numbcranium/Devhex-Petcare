import React, { useEffect, useState } from "react";
import petData from "../../../data/pet.json";

const PetProfile = () => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    setPet(petData);
  }, []);

  return (
    <div className="card">
      <h3 className="card-title">Pet Profile</h3>
      <ul>
        <li><strong>Name:</strong> {pet.name}</li>
        <li><strong>Species:</strong> {pet.species}</li>
        <li><strong>Breed:</strong> {pet.breed}</li>
        <li><strong>Age:</strong> {pet.age}</li>
        <li><strong>Vaccination:</strong> {pet.vaccination}</li>
      </ul>
    </div>
  );
};

export default PetProfile;
