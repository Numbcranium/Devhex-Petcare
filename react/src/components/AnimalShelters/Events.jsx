import "../../styles/Events.css";

const events = [
{
id: 1,title: "Community Adoption Drive",date: "September 20, 2025",time: "10:00 AM - 4:00 PM",location: "City Park Grounds, Main Pavilion",description:"Join us for a day dedicated to finding loving homes for our pets. Meet animals ready for adoption, enjoy family-friendly activities, and learn about responsible pet ownership.",contactEmail: "adoptions@petcare.org",
rsvpLink: "https://petcare.org/events/adoption-drive-rsvp",type: "Adoption"
},{
id: 2,title: "Annual Vaccination Camp",date: "October 5, 2025",time: "9:00 AM - 3:00 PM",location: "PetCare Shelter, Wellness Center",description:"Ensure your pets stay healthy with our annual vaccination camp. Professional vets will be available for consultations and administering vaccines at discounted rates.",contactEmail: "vetservices@petcare.org",
rsvpLink: "https://petcare.org/events/vaccination-camp-rsvp",type: "Health"
},{
id: 3,title: "Pet Training Workshop",date: "October 18, 2025",time: "11:00 AM - 2:00 PM",location: "Community Center, Room B",description:"Learn effective training techniques from certified pet trainers. This workshop covers basic obedience, behavior correction, and socialization tips.",contactEmail: "training@petcare.org",
rsvpLink: "https://petcare.org/events/training-workshop-rsvp",type: "Education"
},{
id: 4,title:"Fundraising Gala",date:"November 12, 2025",time:"6:00 PM - 10:00 PM",location:"Grand Ballroom, City Hotel",description:"A formal evening to support our shelter’s initiatives. Enjoy dinner, live entertainment, and a silent auction. Proceeds will help us care for more animals in need.",
contactEmail: "events@petcare.org",
rsvpLink: "https://petcare.org/events/fundraising-gala-rsvp",
type: "Fundraising"
}];
function Events() {
return (
<section className="events" aria-labelledby="events-heading">
<h1 id="events-heading">Upcoming Events</h1>
<p className="intro">Stay informed about our latest initiatives and community programs. We welcome your participation!</p>
<div className="events-grid" role="list">
{events.map(({ id, title, date, time, location, description, contactEmail, rsvpLink, type }) => (
<article key={id} className={`event-card event-${type.toLowerCase()}`} role="listitem" tabIndex="0" aria-label={`${title} on ${date} at ${time}, located at ${location}`}><header>
<h2>{title}</h2><span className="event-type">{type}</span></header>
<p className="datetime">
<strong>Date:</strong> {date} <br />
<strong>Time:</strong> {time}</p>
<p className="location">
<strong>Location:</strong> {location}</p>
<p className="description">{description}</p>
<p className="contact">
<strong>Contact:</strong> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
<a href={rsvpLink} target="_blank" rel="noopener noreferrer" className="rsvp-button" aria-label={`RSVP for ${title}`}>RSVP Now</a>
</article> ))}
</div>
</section>
);
}
export default Events;
