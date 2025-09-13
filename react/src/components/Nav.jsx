import { NavLink, useLocation } from 'react-router-dom';
import './Nav.css';
import VisitorCounter from './VisitorCounter';
import { useState } from 'react';

const Nav = ({ userCategory }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActiveLink = (to) => {
    // Normalize to string
    const toString = typeof to === 'string' ? to : to.pathname + (to.search || '');
    return location.pathname + location.search === toString;
  };

  return (
    <>
      <nav className="navbar" style={{ zIndex: "100" }}>
        <div className="nav-logo">
          <NavLink to="/" className={() => isActiveLink('/') ? 'active' : undefined}>FurEver<b style={{color:"whitesmoke"}}> Care</b > </NavLink>
        </div>
        <div className="visit"><VisitorCounter /></div>

        <div className="hamburger" onClick={toggleSidebar} aria-label="Toggle menu" role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') toggleSidebar(); }}>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
          <div className={`bar ${sidebarOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-menu ${sidebarOpen ? 'open' : ''}`}>
          <li><NavLink to="/" className={() => isActiveLink('/') ? 'active' : undefined}>Home</NavLink></li>
          {userCategory === 'Pet Owner' && (
            <>
              <li><NavLink to="/Pet-Care" className={() => isActiveLink('/Pet-Care') ? 'active' : undefined}>Pet Care</NavLink></li>
              <li><NavLink to="/pet-owner?section=products" className={() => isActiveLink('/pet-owner?section=products') ? 'active' : undefined}>Products</NavLink></li>
              <li><NavLink to="/pet-owner?section=emergency" className={() => isActiveLink('/pet-owner?section=emergency') ? 'active' : undefined}>Emergency</NavLink></li>
              <li><NavLink to="/pet-owner?section=feedback" className={() => isActiveLink('/pet-owner?section=feedback') ? 'active' : undefined}>Feedback</NavLink></li>
              <li><NavLink to="/pet-owner?section=contact-us" className={() => isActiveLink('/pet-owner?section=contact-us') ? 'active' : undefined}>Contact Us</NavLink></li>
            </>
          )}
          {userCategory === 'Veterinarian' && (
            <>
              <li><NavLink to="/veterinarian?section=add-vet" className={() => isActiveLink('/veterinarian?section=add-vet') ? 'active' : undefined}>Add Vet</NavLink></li>
              <li><NavLink to="/veterinarian?section=profiles" className={() => isActiveLink('/veterinarian?section=profiles') ? 'active' : undefined}>Profiles</NavLink></li>
              <li><NavLink to="/veterinarian?section=appointments" className={() => isActiveLink('/veterinarian?section=appointments') ? 'active' : undefined}>Appointments</NavLink></li>
              <li><NavLink to="/veterinarian?section=history" className={() => isActiveLink('/veterinarian?section=history') ? 'active' : undefined}>Medical History</NavLink></li>
            </>
          )}
          {userCategory === 'Animal Shelter' && (
            <>
              <li><NavLink to="/shelter?section=events" className={() => isActiveLink('/shelter?section=events') ? 'active' : undefined}>Events</NavLink></li>
              <li><NavLink to="/shelter?section=pets" className={() => isActiveLink('/shelter?section=pets') ? 'active' : undefined}>Adoptable Pets</NavLink></li>
              <li><NavLink to="/shelter?section=contact" className={() => isActiveLink('/shelter?section=contact') ? 'active' : undefined}>Contact</NavLink></li>
              <li><NavLink to="/shelter?section=stories" className={() => isActiveLink('/shelter?section=stories') ? 'active' : undefined}>Success Stories</NavLink></li>
            </>
          )}
        </ul>
      </nav>

      <div className={`sidebar-backdrop ${sidebarOpen ? 'visible' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
};

export default Nav;
