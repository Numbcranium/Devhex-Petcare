import { useLocation } from 'react-router-dom';
import LocationTicker from '../../components/LocationTicker';
import AboutUs from '../../components/PetOwner/ContactUs/AboutUs';
import ContactUs from '../../components/PetOwner/ContactUs/ContactUs';
import EmergencyHelp from '../../components/PetOwner/EmergencyHelp';
import FeedbackForm from '../../components/PetOwner/FeedbackForm';
import React from 'react';
import PetProducts from '../../components/PetProductShowcase'


const PetOwnerPage = ({ userName }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get('section');
// // if (section === 'pet-owner-page') {
// //         <h1>Welcome {userName}</h1>
        
//       }
  return (
    <div className="pet-owner-page">
    <h1>Welcome, {userName}!</h1>
      {/* <LocationTicker /> */}
      <section>
        {/* <h2>About Us</h2> */}
        {section === 'contact-us' && <AboutUs />}
        {section === 'products' && <PetProducts/>}
        {section === 'emergency' && <EmergencyHelp />}
        {section === 'feedback' && <FeedbackForm/>}
      </section>
    </div>
  );
};

export default PetOwnerPage;
