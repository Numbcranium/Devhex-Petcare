import React, { useEffect, useState } from "react";
import vetsData from "../../data/vets.json";
import "../../styles/AppointmentSlots.css";
import Footer from "../Footer";

const AppointmentSlots = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    setVets(vetsData);
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
                            <div className="time-slot booked">09:00 AM - Booked</div>
                            <div className="time-slot available">10:30 AM - Available</div>
                            <div className="time-slot booked">12:00 PM - Booked</div>
                            <div className="time-slot available">02:30 PM - Available</div>
                            <div className="time-slot booked">04:00 PM - Booked</div>
                            <div className="time-slot available">05:30 PM - Available</div>
                        </div>
                    </div>
                    
                    <div className="time-slot-group">
                        <div className="date-header">Tomorrow - Saturday, Sep 13, 2025</div>
                        <div className="time-slots">
                            <div className="time-slot available">08:30 AM - Available</div>
                            <div className="time-slot available">10:00 AM - Available</div>
                            <div className="time-slot available">11:30 AM - Available</div>
                            <div className="time-slot booked">01:00 PM - Booked</div>
                            <div className="time-slot available">03:30 PM - Available</div>
                            <div className="time-slot available">05:00 PM - Available</div>
                        </div>
                    </div>
                    
                     <div className="time-slot-group">
                        <div className="date-header">Tomorrow - Saturday, Sep 13, 2025</div>
                        <div className="time-slots">
                            <div className="time-slot available">08:30 AM - Available</div>
                            <div className="time-slot available">10:00 AM - Available</div>
                            <div className="time-slot available">11:30 AM - Available</div>
                            <div className="time-slot booked">01:00 PM - Booked</div>
                            <div className="time-slot available">03:30 PM - Available</div>
                            <div className="time-slot available">05:00 PM - Available</div>
                        </div>
                    </div>

                     <div className="time-slot-group">
                        <div className="date-header">Tomorrow - Saturday, Sep 13, 2025</div>
                        <div className="time-slots">
                            <div className="time-slot available">08:30 AM - Available</div>
                            <div className="time-slot available">10:00 AM - Available</div>
                            <div className="time-slot available">11:30 AM - Available</div>
                            <div className="time-slot booked">01:00 PM - Booked</div>
                            <div className="time-slot available">03:30 PM - Available</div>
                            <div className="time-slot available">05:00 PM - Available</div>
                        </div>
                    </div>

                     <div className="time-slot-group">
                        <div className="date-header">Tomorrow - Saturday, Sep 13, 2025</div>
                        <div className="time-slots">
                            <div className="time-slot available">08:30 AM - Available</div>
                            <div className="time-slot available">10:00 AM - Available</div>
                            <div className="time-slot available">11:30 AM - Available</div>
                            <div className="time-slot booked">01:00 PM - Booked</div>
                            <div className="time-slot available">03:30 PM - Available</div>
                            <div className="time-slot available">05:00 PM - Available</div>
                        </div>
                    </div>
                     <div className="time-slot-group">
                        <div className="date-header">Tomorrow - Saturday, Sep 13, 2025</div>
                        <div className="time-slots">
                            <div className="time-slot available">08:30 AM - Available</div>
                            <div className="time-slot available">10:00 AM - Available</div>
                            <div className="time-slot available">11:30 AM - Available</div>
                            <div className="time-slot booked">01:00 PM - Booked</div>
                            <div className="time-slot available">03:30 PM - Available</div>
                            <div className="time-slot available">05:00 PM - Available</div>
                        </div>
                    </div>

                     <div className="time-slot-group">
                        <div className="date-header">Tomorrow - Saturday, Sep 13, 2025</div>
                        <div className="time-slots">
                            <div className="time-slot available">08:30 AM - Available</div>
                            <div className="time-slot available">10:00 AM - Available</div>
                            <div className="time-slot available">11:30 AM - Available</div>
                            <div className="time-slot booked">01:00 PM - Booked</div>
                            <div className="time-slot available">03:30 PM - Available</div>
                            <div className="time-slot available">05:00 PM - Available</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
  );
};

export default AppointmentSlots;
