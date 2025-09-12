import React, { useEffect, useState } from "react";
import petData from "../../../data/pet.json";
import  '../../../styles/PetCare.css'


const PetProfile = () => {
  const [pet, setPet] = useState({});

  useEffect(() => {
    setPet(petData);
  }, []);

  return (
   
     <div class="care-card pet-profile">
                <h3>
                    <div class="card-icon">🐕</div>
                    Pet Profile
                </h3>
                <div class="profile-content">
                    <div class="pet-avatar">🐕</div>
                    <div class="pet-details">
                        <div class="detail-item">
                            <div class="detail-label">Name</div>
                            <div class="detail-value">{pet.name}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Species</div>
                            <div class="detail-value">{pet.species}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Breed</div>
                            <div class="detail-value">{pet.breed}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Age</div>
                            <div class="detail-value">{pet.age}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Vaccinations</div>
                            <div class="detail-value">{pet.vaccination}</div>
                        </div>
                    </div>
                </div>
            </div>

  );
};

export default PetProfile;
