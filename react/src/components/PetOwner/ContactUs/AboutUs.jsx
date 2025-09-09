import './AboutUs.css';

const teamMembers = [
  {
    initials: 'SM',
    name: 'Sarah Mitchell',
    role: 'Founder & CEO',
    email: 'sarah@furevercare.com',
    phone: '+1 (555) 123-4567',
  },
  {
    initials: 'DJ',
    name: 'Dr. James Wilson',
    role: 'Chief Veterinary Officer',
    email: 'james@furevercare.com',
    phone: '+1 (555) 234-5678',
  },
  {
    initials: 'ER',
    name: 'Emily Rodriguez',
    role: 'Head of Technology',
    email: 'emily@furevercare.com',
    phone: '+1 (555) 345-6789',
  },
  {
    initials: 'MA',
    name: 'Michael Anderson',
    role: 'Customer Success Manager',
    email: 'michael@furevercare.com',
    phone: '+1 (555) 456-7890',
  },
];

const AboutUs = () => {
  return (
    <>
      <header className="about-header">
        <h1><span role="img" aria-label="paw">🐾</span> FurEver Care</h1>
        <p>They Deserve Forever Love</p>
      </header>
      <section className="about-maini">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to <strong>FurEver Care</strong>, where every pet's well-being is our top priority. We are a dedicated team of pet enthusiasts, veterinarians, and technology experts who came together with a shared vision: to create a comprehensive platform that simplifies pet care for loving owners everywhere.
            </p>
            <p>
              Our journey began when we realized how challenging it can be for pet owners to manage all aspects of their furry friends' care - from tracking feeding schedules and grooming routines to finding reliable veterinary services and quality pet products.
            </p>
            <p>
              Today, FurEver Care serves thousands of pet families, providing them with the tools, resources, and community support they need to give their pets the best possible care.
            </p>
          </div>
          <div className="mission-vision">
            <div className="mission">
              <h3>🎯 Our Mission</h3>
              <p>
                To revolutionize pet care by providing a centralized, user-friendly platform that connects pet owners with essential services, products, and information, making pet care easier, more efficient, and more enjoyable.
              </p>
            </div>
            <div className="vision">
              <h3>💡 Our Vision</h3>
              <p>
                To build a world where every pet receives optimal care through technology-driven solutions and a supportive community of pet lovers.
              </p>
            </div>
          </div>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.email} className="team-card">
              <div className="initials">{member.initials}</div>
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <p className="contact-email">📧 {member.email}</p>
              <p className="contact-phone">📞 {member.phone}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
