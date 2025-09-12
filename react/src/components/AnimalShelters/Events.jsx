import React, { useEffect, useState } from "react";
import eventsData from "../../data/Events.json";
import "../../styles/Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <section className="events-section">
      <h2 className="events-title">Upcoming Pet Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-time">{event.startTime} — {event.endTime}</p>
            <p className="event-location">{event.location}</p>
            <button className="event-join-btn">Join Event</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
