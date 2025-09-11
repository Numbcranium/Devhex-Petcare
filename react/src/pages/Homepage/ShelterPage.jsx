import { useLocation } from "react-router-dom";
import React from "react";
import AdoptablePets from "../../components/AnimalShelters/Gallery";
import SuccessStories from "../../components/AnimalShelters/SuccessStories";
import Events from "../../components/AnimalShelters/Events";
import ContactInfo from "../../components/AnimalShelters/ShelterContact";
import "../../styles/Shelter.css";

const ShelterPage = ({ userName }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section");

  return (
    <div className="shelter-page">
      <h1>Welcome, {userName ? userName : "Guest"}!</h1>
      <section>
        {section === "pets" && <AdoptablePets />}
        {section === "stories" && <SuccessStories />}
        {section === "events" && <Events />}
        {section === "contact" && <ContactInfo />}
      </section>
    </div>
  );
};

export default ShelterPage;
