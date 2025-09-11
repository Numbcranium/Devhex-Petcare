import React, { useState } from "react";
import "../../styles/AddVetForm.css";

const AddVetForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    contact: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Vet added (UI only): ${formData.name}`);
    setFormData({ name: "", specialization: "", contact: "", image: "" });
  };

  return (
    <div>
      <h2>Add New Veterinarian</h2>
      <form className="vet-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <button type="submit">Add Vet</button>
      </form>
    </div>
  );
};

export default AddVetForm;
