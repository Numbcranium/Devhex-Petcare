import { Link } from 'react-router-dom';
import './Nav.css';
import VisitorCounter from './VisitorCounter';
import { useState } from 'react';

const Nav = ({ userCategory }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar" style={{ zIndex: "100" }}>
        <div className="nav-logo">
          <Link to="/">FurEver Care</Link>
        </div>
        <div className="visit"><VisitorCounter /></div>

        <div className="hamburger" onClick={toggleSidebar} aria-label="Toggle menu" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') toggleSidebar(); }}>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-menu ${sidebarOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          {userCategory === 'Pet Owner' && (
            <>
              <li><Link to="/Pet-Care">Pet Care</Link></li>
              <li><Link to="/pet-owner?section=products">Products</Link></li>
              <li><Link to="/pet-owner?section=emergency">Emergency</Link></li>
              <li><Link to="/pet-owner?section=feedback">Feedback</Link></li>
              <li><Link to="/pet-owner?section=contact-us">Contact Us</Link></li>
            </>
          )}
          {userCategory === 'Veterinarian' && (
            <>
              <li><Link to="/veterinarian?section=add-vet">Add Vet</Link></li>
              <li><Link to="/veterinarian?section=profiles">Profiles</Link></li>
              <li><Link to="/veterinarian?section=appointments">Appointments</Link></li>
              <li><Link to="/veterinarian?section=history">Medical History</Link></li>
            </>
          )}
          {userCategory === 'Animal Shelter' && (
            <>
              <li><Link to="/shelter?section=events">Events</Link></li>
              <li><Link to="/shelter?section=pets">Adoptable Pets</Link></li>
              <li><Link to="/shelter?section=contact">Contact</Link></li>
              <li><Link to="/shelter?section=stories">Success Stories</Link></li>
            </>
          )}
        </ul>
      </nav>

      <div className={`sidebar-backdrop ${sidebarOpen ? 'visible' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
};

export default Nav;
