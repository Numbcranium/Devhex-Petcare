import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useVet } from '../../context/VetContext';
import Loader from '../Loader';
import VetProfile from './VetProfile';
import '../../styles/VetDashboard.css';
import VetNavBar from './VetNavBar';
/**
 * Fetches static JSON data (vets/slots/cases). Sets context if no activeVet present.
 * Renders VetProfile in left column, nested routes on right (via Outlet).
 */
export default function VetDashboard() {
  const { activeVet, setActiveVet } = useVet();
  const [vets, setVets] = useState(null);
  const [slots, setSlots] = useState(null);
  const [cases, setCases] = useState(null);

  useEffect(() => {
    fetch('/data/vets.json')
      .then(res => res.json())
      .then(data => setVets(data))
      .catch(() => setVets([]));

    fetch('/data/slots.json')
      .then(res => res.json())
      .then(data => setSlots(data))
      .catch(() => setSlots([]));

    fetch('/data/cases.json')
      .then(res => res.json())
      .then(data => setCases(data))
      .catch(() => setCases([]));
  }, []);

  // If no activeVet (not set via onboarding), pick first from JSON as SRS requires static vet profile
  useEffect(() => {
    if (!activeVet && vets && vets.length > 0) {
      setActiveVet(vets[0]);
    }
  }, [activeVet, vets, setActiveVet]);

  if (!vets || !slots || !cases || !activeVet) return <Loader />;

  // The Outlet will access { slots, cases, vet } via context
  return (
    <div className="vet-dashboard-page">
     <VetNavBar/>
      <header className="vet-header">
        <h1>Veterinarian Dashboard</h1>
        <div className="vet-welcome">Welcome, {activeVet.name}</div>
      </header>

      <div className="vet-grid">
        <aside className="vet-left">
          <VetProfile vet={activeVet} />
        </aside>

        <section className="vet-right">
          <Outlet context={{ slots, cases, vet: activeVet }} />
        </section>
      </div>
    </div>
  );
}
