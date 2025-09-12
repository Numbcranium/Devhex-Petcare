import React, { useEffect, useState } from "react";
import contactData from "../../data/shelterContact.json";
import '../../styles/ShelterContact.css'

function ContactInfo() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    setContact(contactData);
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-panel">
        <header className="contact-hero">
          <h1>{contact.hero?.title}</h1>
          <p className="sub">
            {contact.hero?.subtitle}
          </p>
        </header>

        <section className="contact-details">
          {contact.contactDetails?.map((detail, index) => (
            <div key={index} className="info-card">
              <h3>{detail.type}</h3>
              <p>{detail.value}</p>
            </div>
          ))}
        </section>

        <section className="map-section">
          <iframe
            title="Shelter Location"
            src={contact.mapSrc}
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
