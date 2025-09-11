import React, { useEffect, useState } from "react";
import vetsData from "../../data/vets.json";
import historyData from "../../data/medicalHistory.json";
import "../../Styles/veterinarian.css";

const VeterinarianPage = ({ userName }) => {
  const [vets, setVets] = useState([]);
  const [history, setHistory] = useState([]);
  const [newVet, setNewVet] = useState({
    name: "",
    specialization: "",
    contact: "",
    image: ""
  });

  useEffect(() => {
    setVets(vetsData);
    setHistory(historyData);
  }, []);

  const handleChange = (e) => {
    setNewVet({ ...newVet, [e.target.name]: e.target.value });
  };

  const handleAddVet = (e) => {
    e.preventDefault();
    if (newVet.name && newVet.specialization && newVet.contact) {
      const vetToAdd = {
        id: vets.length + 1,
        ...newVet,
        availableSlots: ["9:00 AM", "11:00 AM", "3:00 PM"],
        bookedSlots: ["10:00 AM", "2:00 PM"]
      };
      setVets([...vets, vetToAdd]);
      setNewVet({ name: "", specialization: "", contact: "", image: "" });
    }
  };

  return (
    <div className="vet-container">
      <h2 className="vet-title">👩‍⚕️ Veterinarian Dashboard</h2>
      <p className="vet-subtitle">
        Welcome {userName ? userName : "Guest"}, here are our registered veterinarians:
      </p>

      {/* Vet Profiles */}
      <div className="vet-grid">
        {vets.map((vet) => (
          <div key={vet.id} className="vet-card">
            <img src={vet.image} alt={vet.name} className="vet-img" />
            <h3>{vet.name}</h3>
            <p><strong>Specialization:</strong> {vet.specialization}</p>
            <p><strong>Contact:</strong> {vet.contact}</p>
            
            <div className="slots">
              <p><strong>Available Slots:</strong> {vet.availableSlots.join(", ")}</p>
              <p><strong>Booked Slots:</strong> {vet.bookedSlots.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Vet Form */}
      <h2 className="vet-title">➕ Add New Veterinarian</h2>
      <form className="vet-form" onSubmit={handleAddVet}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={newVet.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={newVet.specialization}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          value={newVet.contact}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newVet.image}
          onChange={handleChange}
        />
        <button type="submit">Add Vet</button>
      </form>

      {/* Pet Medical History */}
      <h2 className="vet-title">📋 Sample Pet Medical Histories</h2>
      <div className="history-table-wrapper">
        <table className="history-table">
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Species</th>
              <th>Condition</th>
              <th>Treatment</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {history.map((record) => (
              <tr key={record.id}>
                <td>{record.petName}</td>
                <td>{record.species}</td>
                <td>{record.condition}</td>
                <td>{record.treatment}</td>
                <td>{record.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VeterinarianPage;
