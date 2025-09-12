import React, { useEffect, useState } from "react";
import vetsData from "../../data/vets.json";
import "../../styles/VetProfile.css";
import Footer from "../Footer";

const VetProfile = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    setVets(vetsData);
  }, []);

  return (
    <div className="profile-container">
      {vets.map((vet) => (
        <div className="profile-sidebar" key={vet.id}>
          <img src={vet.image} alt={vet.name} className="vet-photo" />
          <h1 className="vet-name">{vet.name}</h1>
          <p className="specialization">{vet.specialization}</p>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"></div>
              <div>
                <strong>Phone:</strong><br />
                {vet.phone}
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"></div>
              <div>
                <strong>Email:</strong><br />
                {vet.email}
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"></div>
              <div>
                <strong>Clinic:</strong><br />
                {vet.clinic}
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon"></div>
              <div>
                <strong>Experience:</strong><br />
                {vet.experience}
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default VetProfile;
