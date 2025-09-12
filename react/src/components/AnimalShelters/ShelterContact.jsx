import React from "react";
import '../../styles/ShelterContact.css'

function ContactInfo() {
  return (
    <div className="contact-page">
      <div className="contact-panel">
        <header className="contact-hero">
          <h1>Contact Our Shelter</h1>
          <p className="sub">
            Get in touch with us for adoptions, events, or volunteer opportunities 
          </p>
        </header>

        <section className="contact-details">
          <div className="info-card">
            <h3>Address</h3>
            <p>123 Paw Street, Petville, Country</p>
          </div>

          <div className="info-card">
            <h3>Email</h3>
            <p>info@furevercare.org</p>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
          </div>
        </section>

        <section className="map-section">
          <iframe
            title="Shelter Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509776!2d144.95373531531685!3d-37.8162797420219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772f6e8b7d5b!2sAnimal%20Shelter!5e0!3m2!1sen!2s!4v1611234567890!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "16px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </div>
  );
}


export default ContactInfo;
