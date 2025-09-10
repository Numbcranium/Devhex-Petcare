import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ShelterPage from "./pages/Homepage/ShelterPage";
import Gallery from "./components/AnimalShelters/Gallery";
import Events from "./components/AnimalShelters/Events";
import SuccessStories from "./components/AnimalShelters/SuccessStories";
import ShelterContact from "./components/AnimalShelters/ShelterContact";

function App() {
return (
<div className="app">
<nav className="navbar">
<h2 className="logo">animal shelter</h2>
<div className="links">
<Link to="/">Home</Link>
<Link to="/shelter">Shelter</Link>
<Link to="/gallery">Gallery</Link>
<Link to="/stories">Stories</Link>
<Link to="/events">Events</Link>
<Link to="/contact">Contact</Link></div></nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/shelter" element={<ShelterPage />} />
<Route path="/gallery" element={<Gallery />} />
<Route path="/stories" element={<SuccessStories />} />
<Route path="/events" element={<Events />} />
<Route path="/contact" element={<ShelterContact />} />
</Routes></div>
);}
function Home() {
return (
<div className="home">
<header className="hero-home">
<h1>Welcome to PetCare</h1>
<p>Adopt,Love,and Find Your Forever Friend.</p>
<Link to="/shelter" className="cta-button">Explore Shelter</Link>
</header></div> );}
export default App;