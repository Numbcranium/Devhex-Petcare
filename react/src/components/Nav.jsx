import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = ({ userCategory }) => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">FurEver Care</Link>
      </div>
      <ul className="nav-menu">
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
            <li><Link to="/veterinarian">Profile</Link></li>
            <li><Link to="/veterinarian">Appointments</Link></li>
            <li><Link to="/veterinarian">Medical Histories</Link></li>
          </>
        )}
        {userCategory === 'Animal Shelter' && (
          <>
            <li><Link to="/shelter">Events</Link></li>
            <li><Link to="/shelter">Gallery</Link></li>
            <li><Link to="/shelter">Shelter Contact</Link></li>
            <li><Link to="/shelter">Success Stories</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
