import React from "react";
import "../../styles/ShelterContact.css";

const ContactInfo = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: contact@shelter.org</p>
      <p>Phone: +234 812 345 6789</p>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
