import LocationTicker from '../../components/LocationTicker';
import AboutUs from '../../components/PetOwner/ContactUs/AboutUs';
import ContactUs from '../../components/PetOwner/ContactUs/ContactUs';

const PetOwnerPage = ({ userName }) => {
  return (
    <div className="pet-owner-page">
      <h1>Welcome, {userName}!</h1>
      {/* <LocationTicker /> */}
      <section>
        {/* <h2>About Us</h2> */}
        <AboutUs />
      </section>
    
    </div>
  );
};

export default PetOwnerPage;
