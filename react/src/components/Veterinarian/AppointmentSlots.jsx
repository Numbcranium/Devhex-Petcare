import React, { useEffect, useState } from "react";
import slotsData from "../../../public/data/slots.json";
import "../../styles/AppointmentSlots.css";
import Footer from "../Footer";

const AppointmentSlots = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    setSlots(slotsData);
  }, []);

  return (
    <div className="main-content">
      <div className="section">
        <h2 className="section-title">
          <div className="section-icon"></div>
          Appointment Schedule
        </h2>
        <div className="appointment-grid">
          <div className="time-slot-group">
            <div className="date-header">Today - Friday, Sep 12, 2025</div>
            <div className="time-slots">
              {slots.map((slot, index) => (
                <div
                  key={index}
                  className={`time-slot ${slot.status.toLowerCase()}`}
                >
                  {slot.time} - {slot.status}
                </div>
              ))}
            </div>
          </div>
        </div>
           <div className="appointment-grid">
          <div className="time-slot-group">
            <div className="date-header">Today - Friday, Sep 12, 2025</div>
            <div className="time-slots">
              {slots.map((slot, index) => (
                <div
                  key={index}
                  className={`time-slot ${slot.status.toLowerCase()}`}
                >
                  {slot.time} - {slot.status}
                </div>
              ))}
            </div>
          </div>
        </div>
           <div className="appointment-grid">
          <div className="time-slot-group">
            <div className="date-header">Today - Friday, Sep 12, 2025</div>
            <div className="time-slots">
              {slots.map((slot, index) => (
                <div
                  key={index}
                  className={`time-slot ${slot.status.toLowerCase()}`}
                >
                  {slot.time} - {slot.status}
                </div>
              ))}
            </div>
          </div>
        </div>
           <div className="appointment-grid">
          <div className="time-slot-group">
            <div className="date-header">Today - Friday, Sep 12, 2025</div>
            <div className="time-slots">
              {slots.map((slot, index) => (
                <div
                  key={index}
                  className={`time-slot ${slot.status.toLowerCase()}`}
                >
                  {slot.time} - {slot.status}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentSlots;
