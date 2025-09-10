import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationTicker from '../../components/LocationTicker';

const Homepage = ({ setUserName, setUserCategory }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && category) {
      setUserName(name);
      setUserCategory(category);
      if (category === 'Pet Owner') navigate('/pet-owner');
      else if (category === 'Veterinarian') navigate('/veterinarian');
      else if (category === 'Animal Shelter') navigate('/shelter');
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#BC9A6E', minHeight: '100vh', color: '#6A443E' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to FurEver Care</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '2rem' }}>They Deserve Forever Love</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#B78960', padding: '2rem', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>First Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #9A5543', borderRadius: '4px', backgroundColor: '#B78960', color: '#6A443E' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Select Category:</label>
          <div style={{ marginBottom: '0.5rem' }}>
            <input
              type="radio"
              id="pet-owner"
              name="category"
              value="Pet Owner"
              onChange={(e) => setCategory(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            <label htmlFor="pet-owner">Pet Owner</label>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <input
              type="radio"
              id="veterinarian"
              name="category"
              value="Veterinarian"
              onChange={(e) => setCategory(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            <label htmlFor="veterinarian">Veterinarian</label>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <input
              type="radio"
              id="shelter"
              name="category"
              value="Animal Shelter"
              onChange={(e) => setCategory(e.target.value)}
              style={{ marginRight: '0.5rem' }}
            />
            <label htmlFor="shelter">Animal Shelter</label>
          </div>
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#9C7456', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}>Enter</button>
      </form>
    </div>
  );
};

export default Homepage;
