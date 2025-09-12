import { useState, useEffect, useRef } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [location, setLocation] = useState('Location unavailable');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visitorCount, setVisitorCount] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {

    const visitorInterval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 5000);

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation(`Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`),
        () => setLocation('Location permission denied')
      );
    } else {
      setLocation('Geolocation not supported');
    }

   
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 20;

    const scrollContent = () => {
      if (scrollRef.current) {
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollRef.current.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollRef.current.scrollLeft = scrollAmount;
      }
    };

    const intervalId = setInterval(scrollContent, scrollInterval);

    return () => {
      clearInterval(visitorInterval);
      clearInterval(timeInterval);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <footer style={{
      backgroundColor: '#6A443E',
      color: '#BC9A6E',
      padding: '1rem',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'flex-start',
      gap: '2rem',
      fontSize: '0.9rem',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
  
      height: '4rem',
      alignItems: 'center'
    }}>
      <div ref={scrollRef} style={{
        display: 'inline-flex',
        gap: '2rem',
        minWidth: '200%',
        animation: 'scroll 20s linear infinite'
      }}>
        <div>{location}</div>
        <div>{currentTime.toLocaleTimeString()}</div>
        <div>Visitors: {visitorCount}</div>
        <div>Pets Helped: 15,632</div>
        <div>{location}</div>
        <div>{currentTime.toLocaleTimeString()}</div>
        <div>Visitors: {visitorCount}</div>
        <div>Pets Helped: 15,632</div>
      </div>
    </footer>
  );
};

export default Footer;
