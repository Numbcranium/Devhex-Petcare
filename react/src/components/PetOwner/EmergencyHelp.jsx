import React from "react";
import '../../styles/Emergency.css';

const EmergencyHelp = () => {
  return (
    <div className="emergency-container">
      {/* Header Section */}
      <header className="emergency-header">
        <div className="header-icon" role="img" aria-label="emergency">🚨</div>
        <h1>Emergency Hotline</h1>
        <p>If your pet is in immediate danger, call emergency services first, then contact a veterinarian</p>
      </header>

      {/* Main Cards Section */}
      <section className="emergency-main-cards">
        {/* Veterinary Clinics Card */}
        <div className="emergency-card veterinary-clinics">
          <div className="card-header">
            <span className="card-icon" role="img" aria-label="clinic">🏥</span>
            <h2>Veterinary Clinics</h2>
          </div>
          <div className="card-content">
            <div className="contact-card">
              <h3>PetCare Emergency Clinic</h3>
              <p className="phone">📞 +1 (234) 567-8900</p>
              <p className="details">24/7 Emergency • 123 Pet Street, City</p>
            </div>
            <div className="contact-card">
              <h3>Animal Medical Center</h3>
              <p className="phone">📞 +1 (234) 567-8901</p>
              <p className="details">Mon - Fri 8AM - 10PM • 456 Care Avenue</p>
            </div>
            <div className="contact-card">
              <h3>City Veterinary Hospital</h3>
              <p className="phone">📞 +1 (234) 567-8902</p>
              <p className="details">24/7 Emergency • 789 Health Boulevard</p>
            </div>
            <div className="contact-card">
              <h3>Pet Emergency Services</h3>
              <p className="phone">📞 +1 (234) 567-8903</p>
              <p className="details">Weekend & Holiday Coverage</p>
            </div>
          </div>
        </div>

        {/* Poison Control Helplines Card */}
        <div className="emergency-card poison-control">
          <div className="card-header">
            <span className="card-icon" role="img" aria-label="poison">☠️</span>
            <h2>Poison Control Helplines</h2>
          </div>
          <div className="card-content">
            <div className="contact-card">
              <h3>Pet Poison Helpline</h3>
              <p className="phone">📞 +1 (855) 400-6670</p>
              <p className="details">24/7 Emergency Poison Support</p>
            </div>
            <div className="contact-card">
              <h3>ASPCA Poison Control</h3>
              <p className="phone">📞 +1 (888) 426-4435</p>
              <p className="details">Available 24/7 • Fee may apply</p>
            </div>
            <div className="contact-card">
              <h3>Animal Emergency Line</h3>
              <p className="phone">📞 +1 (234) 567-8904</p>
              <p className="details">Local Emergency Response</p>
            </div>
            <div className="contact-card">
              <h3>Veterinary Poison Info</h3>
              <p className="phone">📞 +1 (234) 567-8905</p>
              <p className="details">Professional Consultation Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Dial Section */}
      <section className="quick-dial-section">
        <h2>⚡ Quick Dial Emergency Numbers</h2>
        <div className="quick-dial-buttons">
          <button>Emergency Vet</button>
          <button>Poison Control</button>
          <button>24/7 Hospital</button>
          <button>Emergency Services</button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <div className="contact-us-header">
          <span className="contact-us-icon" role="img" aria-label="contact">📍</span>
          <h2>Contact Us - FurEver Care</h2>
        </div>
        <div className="contact-info-cards">
          <div className="info-card">
            <span className="info-icon" role="img" aria-label="address">🏠</span>
            <h3>Address</h3>
            <p>123 Pet Care Boulevard<br />Animal City, AC 12345</p>
          </div>
          <div className="info-card">
            <span className="info-icon" role="img" aria-label="email">📧</span>
            <h3>Email</h3>
            <p>emergency@furevercare.com<br />support@furevercare.com</p>
          </div>
          <div className="info-card">
            <span className="info-icon" role="img" aria-label="support">📞</span>
            <h3>Support Line</h3>
            <p>+1 (234) 567-8900<br />Available 24/7</p>
          </div>
          <div className="info-card">
            <span className="info-icon" role="img" aria-label="location">📍</span>
            <h3>Location</h3>
            <p>Location not available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmergencyHelp;
