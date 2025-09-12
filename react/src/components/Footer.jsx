import { useState, useEffect } from 'react';

const Footer = () => {
  const [location, setLocation] = useState('Location unavailable');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Sync visitor count from VisitorCounter component
    // This is a simple simulation; in a real app, use context or global state
    const visitorInterval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 5000);

    // Sync time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Geolocation update
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation(`Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`),
        () => setLocation('Location permission denied')
      );
    } else {
      setLocation('Geolocation not supported');
    }

    return () => {
      clearInterval(visitorInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <footer style={{ backgroundColor: '#6A443E', color: '#BC9A6E', padding: '1rem', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '0.9rem' }}>
      <div>
        {location}
      </div>
      <div>
        {currentTime.toLocaleTimeString()}
      </div>
      <div>
        Visitors: {visitorCount}
      </div>
      <div>
        Pets Helped: 15,632
      </div>
    </footer>
  );
};

export default Footer;
