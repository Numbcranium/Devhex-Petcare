import { useLocation } from 'react-router-dom';
import LocationTicker from '../../components/LocationTicker';
import AboutUs from '../../components/PetOwner/ContactUs/AboutUs';
import ContactUs from '../../components/PetOwner/ContactUs/ContactUs';
import EmergencyHelp from '../../components/PetOwner/EmergencyHelp';

const PetOwnerPage = ({ userName }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get('section');

  return (
    <div className="pet-owner-page">
      <h1>Welcome, {userName}!</h1>
      {/* <LocationTicker /> */}
      <section>
        {/* <h2>About Us</h2> */}
        {section === 'contact-us' && <AboutUs />}
        {section === 'products' && <div>Products Section Content</div>}
        {section === 'emergency' && <EmergencyHelp />}
        {section === 'feedback' && <div>Feedback Section Content</div>}
      </section>
    </div>
  );
};

export default PetOwnerPage;
