import React, { useEffect, useState } from "react";
import emergencyContacts from "../../data/emergencyContacts.json";
import '../../styles/Emergency.css';

const EmergencyHelp = () => {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    setContacts(emergencyContacts);
  }, []);

  return (
    <div className="emergency-container">
      <header className="emergency-header">
        <div className="header-icon" role="img" aria-label="emergency"></div>
        <h1>Emergency Hotline</h1>
        <p>If your pet is in immediate danger, call emergency services first, then contact a veterinarian</p>
      </header>

      <section className="emergency-main-cards">
        <div className="emergency-card veterinary-clinics">
          <div className="card-header">
            <span className="card-icon" role="img" aria-label="clinic"></span>
            <h2>Veterinary Clinics</h2>
          </div>
          <div className="card-content">
            {contacts.veterinaryClinics?.map((clinic, index) => (
              <div key={index} className="contact-card">
                <h3>{clinic.name}</h3>
                <p className="phone">{clinic.phone}</p>
                <p className="details">{clinic.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="emergency-card poison-control">
          <div className="card-header">
            <span className="card-icon" role="img" aria-label="poison"></span>
            <h2>Poison Control Helplines</h2>
          </div>
          <div className="card-content">
            {contacts.poisonControl?.map((helpline, index) => (
              <div key={index} className="contact-card">
                <h3>{helpline.name}</h3>
                <p className="phone">{helpline.phone}</p>
                <p className="details">{helpline.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-dial-section">
        <h2>⚡ Quick Dial Emergency Numbers</h2>
        <div className="quick-dial-buttons">
          <button>Emergency Vet</button>
          <button>Poison Control</button>
          <button>24/7 Hospital</button>
          <button>Emergency Services</button>
        </div>
      </section>

      <section className="contact-us-section">
        <div className="contact-us-header">
          <span className="contact-us-icon" role="img" aria-label="contact"></span>
          <h2>Contact Us - FurEver Care</h2>
        </div>
        <div className="contact-info-cards">
          <div className="info-card">
            <span className="info-icon" role="img" aria-label="address"></span>
            <h3>Address</h3>
            <p>{contacts.contactUs?.address.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}</p>
          </div>
          <div className="info-card">
            <span className="info-icon" role="img" aria-label="email"></span>
            <h3>Email</h3>
            <p>{contacts.contactUs?.email.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}</p>
          </div>
          <div className="info-card">
            <span className="info-icon" role="img" aria-label="support"></span>
            <h3>Support Line</h3>
            <p>{contacts.contactUs?.supportLine.split('\n').map((line, index) => (
              <span key={index}>{line}<br /></span>
            ))}</p>
          </div>
          <div className="info-card">
            <span className="info-icon" role="img" aria-label="location"></span>
            <h3>Location</h3>
            <p>{contacts.contactUs?.location}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyHelp;
