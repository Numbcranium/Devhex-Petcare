import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import '../../styles/AppointmentSlots.css';

/**
 * Client-side booking simulation with:
 * - Controlled modal form
 * - localStorage persistence
 * - toast notification
 */

function Modal({ open, slot, petName, setPetName, onClose, onConfirm }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <h3>Confirm Booking</h3>
        <p>Slot: <strong>{slot.time}</strong></p>
        <label>
          Pet Name
          <input value={petName} onChange={e => setPetName(e.target.value)} placeholder="e.g., Fido" />
        </label>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button onClick={onConfirm} className="btn-confirm">Confirm</button>
          <button onClick={onClose} className="btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

function Toast({ message, onClose }) {
  if (!message) return null;
  return (
    <div className="toast" onClick={onClose}>
      {message}
    </div>
  );
}

export default function AppointmentSlots() {
  const { slots: originalSlots } = useOutletContext() || {};
  const [slots, setSlots] = useState([]);
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [petName, setPetName] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Load slots (with localStorage override)
  useEffect(() => {
    if (Array.isArray(originalSlots)) {
      const saved = localStorage.getItem('bookedSlots');
      const bookedMap = saved ? JSON.parse(saved) : {};
      const updated = originalSlots.map(s =>
        bookedMap[s.time] ? { ...s, ...bookedMap[s.time] } : { ...s }
      );
      setSlots(updated);
    }
  }, [originalSlots]);

  // Persist to localStorage whenever slots change
  useEffect(() => {
    if (slots.length > 0) {
      const bookedMap = {};
      slots.forEach(s => {
        if (s.status === 'Booked') bookedMap[s.time] = s;
      });
      localStorage.setItem('bookedSlots', JSON.stringify(bookedMap));
    }
  }, [slots]);

  const handleSlotClick = slot => {
    if (slot.status.toLowerCase() === 'available') {
      setSelected(slot);
      setPetName('');
      setModalOpen(true);
    } else {
      alert('This slot is already booked.');
    }
  };

  const handleConfirm = () => {
    if (!petName.trim()) {
      alert('Please enter a pet name');
      return;
    }
    setSlots(prev =>
      prev.map(s => s.time === selected.time ? { ...s, status: 'Booked', bookedBy: petName } : s)
    );
    setToastMessage(`Booked ${selected.time} for ${petName}`);
    setTimeout(() => setToastMessage(''), 3000);
    setModalOpen(false);
    setSelected(null);
    setPetName('');
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelected(null);
    setPetName('');
  };

  return (
    <div className="slots-wrapper">
      <h2>Appointment Slots</h2>
      <div className="slot-list">
        {slots.map(s => (
          <div key={s.time} className={`slot-card ${s.status.toLowerCase()}`} onClick={() => handleSlotClick(s)}>
            <div>
              <div className="slot-time">{s.time}</div>
              <div className="small muted">
                {s.status}{s.bookedBy ? ` • ${s.bookedBy}` : ''}
              </div>
            </div>
            <div>
              {s.status.toLowerCase() === 'available'
                ? <button className="btn-book">Book</button>
                : <span className="booked-tag">Booked</span>}
            </div>
          </div>
        ))}
      </div>
      <p className="note">Bookings are simulated locally and persist in this browser (localStorage only).</p>

      <Modal
        open={modalOpen}
        slot={selected}
        petName={petName}
        setPetName={setPetName}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
