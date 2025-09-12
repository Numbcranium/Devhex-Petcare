import React, { useEffect, useState } from "react";
import eventsData from "../../data/Events.json"; // adjust path

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <section className="events-section">
     <div className="events-grid">
  {events.map((event) => (
    <div className="event-card" key={event.id}>
      <h3>{event.icon} {event.title}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p>{event.description}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default Events;
