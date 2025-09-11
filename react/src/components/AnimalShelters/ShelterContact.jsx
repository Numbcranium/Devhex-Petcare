import { useState } from "react";
import "../../styles/ShelterContact.css";
function ShelterContact() {
const [formData, setFormData] = useState({name: "",email: "",message: "",
});
const [submitted, setSubmitted] = useState(false);
const handleChange = (e) => {
const { name, value } = e.target;
setFormData(prev => ({ ...prev, [name]: value }));
};
const handleSubmit = (e) => {e.preventDefault();setSubmitted(true);setFormData({ name: "", email: "", message: "" });
};
return (
<section className="contact-section" aria-label="Contact Information">
<h1>Contact Our Shelter</h1>
<div className="contact-grid">
<div className="contact-info">
<h2>Office Information</h2>
<p><strong>Address:</strong> 123 PetCare Street, Cityville, ST 12345</p>
<p><strong>Email:</strong> <a href="mailto:contact@petcare.org">contact@petcare.org</a></p>
<p><strong>Phone:</strong> <a href="tel:+1234567890">+1 (123) 456-7890</a></p>
<p><strong>Hours:</strong> Mon–Fri 9:00 AM – 6:00 PM<br />Saturday 10:00 AM – 2:00 PM<br />Sunday Closed</p>
<div className="map-container">
<iframe title="Shelter Location"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609859457!2d72.74109829601964!3d19.082197839645476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b9eaa9dbb%3A0x35d4b6d39a2e3c1!2sMumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" allowFullScreenloading="lazy"referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
<form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
<h2>Send a Message</h2>
{submitted && (
<p className="success-msg" role="alert">Thank you. Your message has been received. We will respond shortly.</p>)}
<label htmlFor="name">Full Name</label><input id="name"name="name"type="text"value={formData.name}onChange={handleChange}required placeholder="John Doe"/>
<label htmlFor="email">Email Address</label><input id="email"name="email"type="email"value={formData.email}onChange={handleChange}required placeholder="you@example.com"/>
<label htmlFor="message">Message</label><textarea id="message"name="message"rows="5"value={formData.message}onChange={handleChange}required placeholder="How can we assist you?"></textarea>
<button type="submit">Submit</button>
</form></div></section>
);}

export default ShelterContact;
