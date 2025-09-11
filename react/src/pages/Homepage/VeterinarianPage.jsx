import { useLocation } from "react-router-dom";
import React from "react";
import VetProfile from "../../components/Veterinarian/VetProfile";
import AddVetForm from "../../components/Veterinarian/AddVetForm";
import AppointmentSlots from "../../components/Veterinarian/AppointmentSlots";
import MedicalHistory from "../../components/Veterinarian/MedicalHistory";
import "../../styles/Veterinarian.css";

const VeterinarianPage = ({ userName }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section");

  return (
    <div className="vet-page">
      <h1>Welcome, Dr. {userName ? userName : "Guest"}!</h1>

      <section>
        {section === "profiles" && <VetProfile />}
        {section === "add-vet" && <AddVetForm />}
        {section === "appointments" && <AppointmentSlots />}
        {section === "history" && <MedicalHistory />}
      </section>
    </div>
  );
};

export default VeterinarianPage;
