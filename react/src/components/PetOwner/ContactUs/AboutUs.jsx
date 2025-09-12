import React, { useEffect, useState } from 'react';
import aboutUsData from '../../../data/aboutUs.json';
import './AboutUs.css';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    setAboutData(aboutUsData);
  }, []);

  return (
    <>
      <header className="about-header">
        <h1><span role="img" aria-label="paw">🐾</span> FurEver Care</h1>
        <p>They Deserve Forever Love</p>
      </header>
      <section className="about-maini">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            {aboutData.aboutText?.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
          <div className="mission-vision">
            <div className="mission">
              <h3> Our Mission</h3>
              <p>{aboutData.mission}</p>
            </div>
            <div className="vision">
              <h3> Our Vision</h3>
              <p>{aboutData.vision}</p>
            </div>
          </div>
        </div>
        <div className="team-grid">
          {aboutData.teamMembers?.map((member) => (
            <div key={member.email} className="team-card">
              <div className="initials">{member.initials}</div>
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <p className="contact-email"> {member.email}</p>
              <p className="contact-phone"> {member.phone}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="location-section">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046706e%3A0x21bd4d4ae4980dd4!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
          width="100%"
          height="260vh"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </section>
    </>
  );
};

export default AboutUs;
