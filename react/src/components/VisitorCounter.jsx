import { useState, useEffect } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#BC9A6E', color: '#6A443E', padding: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>
      Visitors: {count}
    </div>
  );
};

export default VisitorCounter;
