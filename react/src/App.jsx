import './App.css'
import SignInPage from './components/SignIn.jsx'
import PetCare from './components/PetOwner/PetCare/PetCare'
import AboutUs from './components/PetOwner/ContactUs/AboutUs'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage';
import PetOwnerPage from './pages/Homepage/PetOwnerPage';
import VeterinarianPage from './pages/Homepage/VeterinarianPage';
import ShelterPage from './pages/Homepage/ShelterPage';
import VisitorCounter from './components/VisitorCounter';
import Layout from './components/Layout';


function App() {
  const [userName, setUserName] = useState('');
  const [userCategory, setUserCategory] = useState('');

  return (
    <BrowserRouter>
 
  

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
          <Route path="/Pet-Care" element={<PetCare />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/veterinarian" element={<VeterinarianPage userName={userName} />} />
          <Route path="/shelter" element={<ShelterPage userName={userName} />} />
        
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
