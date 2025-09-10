import { useState, useEffect } from 'react';

const LocationTicker = () => {
  const [location, setLocation] = useState('Fetching location...');
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`);
        },
        () => {
          setLocation('Location permission denied');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="location-ticker">
      <marquee>
        Location: {location} | Current Time: {time.toLocaleTimeString()}
      </marquee>
    </div>
  );
};

export default LocationTicker;
