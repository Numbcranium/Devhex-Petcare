import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

export default function Nav() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="brand">FurEver Care</div>
      </div>
      <nav className="navbar-right">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
