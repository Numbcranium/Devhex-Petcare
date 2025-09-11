import React, { useEffect, useState } from "react";
import vetsData from "../../data/vets.json";
import "../../styles/AppointmentSlots.css";

const AppointmentSlots = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    setVets(vetsData);
  }, []);

  return (
    <div>
      <h2>Appointment Slots</h2>
      {vets.map((vet) => (
        <div key={vet.id} className="vet-card">
          <h3>{vet.name}</h3>
          <p><strong>Available:</strong> {vet.availableSlots.join(", ")}</p>
          <p><strong>Booked:</strong> {vet.bookedSlots.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default AppointmentSlots;
