import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage';
import PetOwnerPage from './pages/Homepage/PetOwnerPage';
import VeterinarianPage from './pages/Homepage/VeterinarianPage';
import ShelterPage from './pages/Homepage/ShelterPage';
import VisitorCounter from './components/VisitorCounter';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [userCategory, setUserCategory] = useState('');

  return (
    <Router>
      <div className="app">
        <Nav userCategory={userCategory} />
        <Routes>
          <Route path="/" element={
            <>
              <VisitorCounter />
              <Homepage setUserName={setUserName} setUserCategory={setUserCategory} />
            </>
          } />
          <Route path="/pet-owner" element={<PetOwnerPage userName={userName} />} />
          <Route path="/veterinarian" element={<VeterinarianPage userName={userName} />} />
          <Route path="/shelter" element={<ShelterPage userName={userName} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
