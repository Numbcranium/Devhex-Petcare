import React from 'react';

const eventsData = [
  {
    title: 'Adoption Drive',
    date: 'April 20',
    time: '10:00 AM — 9:00 PM',
    location: 'City Inmimal Shelter',
  },
  {
    title: 'Vaccination Camp',
    date: 'May 3',
    time: '9:00 AM — 11:00 AM',
    location: 'Downbun Virl Clinic',
  },
];

const Events = () => {
  return (
    <div className="events-page" style={{ maxWidth: '900px', margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#6A443E' }}>Upcoming Pet Events</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {eventsData.map((event, index) => (
          <div key={index} style={{
            backgroundColor: '#F5F0E6',
            borderRadius: '8px',
            padding: '1rem',
            flex: '1 1 45%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ marginBottom: '0.5rem', color: '#9C7456' }}>{event.title}</h2>
            <p style={{ margin: '0.25rem 0' }}>{event.date}</p>
            <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#555' }}>{event.time}</p>
            <p style={{ margin: '0.25rem 0', fontSize: '0.9rem', color: '#555' }}>{event.location}</p>
            <button style={{
              marginTop: '0.5rem',
              backgroundColor: '#9C7456',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              cursor: 'pointer'
            }}>Join Event</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
