
import React, { useState } from 'react';
import './App.css';
import SignInPage from './components/SignIn.jsx';
import PetCare from './components/PetOwner/PetCare/PetCare';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage';
import PetOwnerPage from './pages/Homepage/PetOwnerPage';
import VeterinarianPage from './pages/Homepage/VeterinarianPage';
import ShelterPage from './pages/Homepage/ShelterPage';
import VisitorCounter from './components/VisitorCounter';
import Layout from './components/Layout';
import OnboardingForm from './components/Veterinarian/OnboardingForm';
import VetHome from './components/Veterinarian/VetHome';
import AppointmentSlots from './components/Veterinarian/AppointmentSlots';
import CaseStudyList from './components/Veterinarian/CaseStudyList';
import NotFound from './components/Veterinarian/NotFound';
import Home from './pages/Homepage/Home';
import VetDashboard from './components/Veterinarian/VetDashBoard.jsx';

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
          <Route path="/veterinarian" element={<VeterinarianPage userName={userName} />} />
          <Route path="/shelter" element={<ShelterPage userName={userName} />} />
          {/* Nested routes for veterinarian dashboard */}
          <Route path="/onboarding" element={<OnboardingForm />} />
          <Route path="/dashboard" element={<VetDashboard />}>
            <Route index element={<VetHome />} />
            <Route path="appointments" element={<AppointmentSlots />} />
            <Route path="cases" element={<CaseStudyList />} />
          </Route>
          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
