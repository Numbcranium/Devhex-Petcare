import React from 'react';
import '../../styles/VetDashboard.css';

export default function VetProfile({ vet }) {
  return (
    <div className="vet-profile-card">
      <div className="vet-photo-wrap">
        <img src={vet.image || '/images/default-vet.png'} alt={vet.name} />
      </div>
      <h3>{vet.name}</h3>
      <p className="vet-special">{vet.specialization}</p>
      <p><strong>Email:</strong> {vet.email}</p>
      <p><strong>Phone:</strong> {vet.phone}</p>
    </div>
  );
}
