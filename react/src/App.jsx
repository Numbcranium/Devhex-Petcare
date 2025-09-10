import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import OnboardingForm from './components/Veterinarian/OnboardingForm';
import VetDashboard from './components/Veterinarian/VetDashboard';
import VetHome from './components/Veterinarian/VetHome';
import AppointmentSlots from './components/Veterinarian/AppointmentSlots';
import CaseStudyList from './components/Veterinarian/CaseStudyList';
import NotFound from './components/Veterinarian/NotFound';
import Home from './pages/Homepage/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Home page with role selection */}
          <Route index element={<Home />} />

          {/* Onboarding route */}
          <Route path="onboarding" element={<OnboardingForm />} />

          {/* Dashboard with nested routes */}
          <Route path="dashboard" element={<VetDashboard />}>
            <Route index element={<VetHome />} />
            <Route path="appointments" element={<AppointmentSlots />} />
            <Route path="cases" element={<CaseStudyList />} />
          </Route>

          {/* 404 fallback */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
