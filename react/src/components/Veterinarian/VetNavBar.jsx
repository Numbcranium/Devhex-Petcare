import React from 'react';
import { NavLink } from 'react-router-dom';
import { useVet } from '../../context/VetContext';
import '../../styles/NavBar.css';

export default function VetNavBar() {
  const { activeVet } = useVet();

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="brand">Vet Dashboard</div>
      </div>
      <nav className="navbar-right">
        <NavLink to="/dashboard" end className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
          Home
        </NavLink>
        <NavLink to="/dashboard/appointments" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
          Appointments
        </NavLink>
        <NavLink to="/dashboard/cases" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
          Cases
        </NavLink>
        <div className="nav-vet-name">
          {activeVet ? `Dr. ${activeVet.name}` : ''}
        </div>
      </nav>
    </header>
  );
}
