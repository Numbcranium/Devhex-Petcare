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
                            <div class="detail-value">Buddy</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Species</div>
                            <div class="detail-value">Dog</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Breed</div>
                            <div class="detail-value">Golden Retriever</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Age</div>
                            <div class="detail-value">3 years</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Weight</div>
                            <div class="detail-value">28 kg</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Last Vaccination</div>
                            <div class="detail-value">March 2024</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Next Check-up</div>
                            <div class="detail-value">October 2025</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Microchip ID</div>
                            <div class="detail-value">ABC123456789</div>
                        </div>
                    </div>
                </div>
            </div>

  );
};

export default PetProfile;
