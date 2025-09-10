import { useState } from "react";
import "../../styles/Gallery.css";

const pets = [{
id:1,name:"Buddy",type:"dog",age:"2 years",breed:"Labrador",image:"https://placedog.net/400",description: "Loyal and playful, loves long walks and cuddles.",status: "Available",
},{
id:2,name:"Mittens",type:"cat",age:"1 year",breed:"Persian",image:"https://placekitten.com/400/400",description: "Calm and affectionate, perfect lap cat.",status: "Pending Adoption",
},{
id:3,name:"Thumper",type:"rabbit",age:"6 months",breed:"Holland Lop",image:"https://media.istockphoto.com/id/499124260/photo/white-rabbit-close-up.jpg?s=1024x1024&w=is&k=20&c=cEn-S_MJIKXT7uzAAtYzDyewU_yrnolwmEfSmbQ1wPA=",description: "Curious little hopper who loves fresh veggies.",status: "Available",
},{
id:4,name:"Charlie",type:"dog",age:"3 years",breed:"Beagle",image:"https://plus.unsplash.com/premium_photo-1668606763482-8dd2042c934e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3N8ZW58MHx8MHx8fDA%3D",description: "Energetic and friendly, loves playing fetch.",status: "Available",
},{
id:5,name:"Luna",type:"cat",age:"2 years",breed:"Siamese",image:"https://placekitten.com/401/401",description: "Vocal and intelligent, great companion.",status: "Available",
},{
id:6,name:"Pip",type:"guinea pig",age:"1 year",breed:"Abyssinian",image:"https://media.istockphoto.com/id/2163936269/photo/pair-of-pigs-snuggline-in-pig-pen.webp?a=1&b=1&s=612x612&w=0&k=20&c=yZYVViLjKyK5f8eWgkA840FpwchxA5SySrGuXDzBCVs=",description: "Sweet and gentle, loves to be pampered.",status: "Available",
},{
id:7,name:"Sky",type:"bird",age:"4 years",breed:"Parakeet",image:"https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmFrZWV0fGVufDB8fDB8fHww",description: "Colorful and social, enjoys singing.",status: "Pending Adoption",
},{
id:8,name:"Nibbles",type:"rabbit",age:"5 months",breed:"Netherland Dwarf",image:"https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFiYml0fGVufDB8fDB8fHww",description: "Small and speedy, great for families.",status: "Available",
},{
id: 9,name:"Felix",type:"ferret",age:"2 years",breed:"Albino",image:"https://cdn.pixabay.com/photo/2017/07/24/15/07/ferret-2534995_640.jpg",description: "Playful and mischievous, loves tunnels and toys.",status: "Available",
},{
id:10,name:"Hammy",type:"hamster",age:"1 year",breed:"Syrian",image:"https://media.gettyimages.com/id/168497076/photo/astounded-djungarian-hamster.jpg?s=612x612&w=0&k=20&c=V43k2lqoQxHXPpfUnDSvHFkSGH2DXn-oxQVm-xDhaEc=",description: "Tiny and curious, enjoys running on the wheel.",status: "Available",
},{
id:11,name:"Shelly",type:"turtle",age:"5 years",breed:"Red-Eared Slider",image:"https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",description: "Calm and steady, loves basking under the lamp.",status: "Pending Adoption",
  },{
id:12,name:"Rex",type: "dog",age:"4 years",breed:"German Shepherd",image:"https://placedog.net/402",description: "Intelligent and protective, great family dog.",status: "Available",
},{
id:13,name:"Whiskers",type:"cat",age:"3 years",breed:"Maine Coon",image:"https://t4.ftcdn.net/jpg/00/77/51/81/240_F_77518136_F88I0v3R2mZsKEgxxXMc4iqXlOjK8OLE.jpg",description: "Large and fluffy, very gentle and friendly.",status: "Available",},];
function Gallery() {
const [selectedType,setSelectedType] = useState("all");
const [activeCardId,setActiveCardId] = useState(null);
const types = Array.from(new Set(pets.map(p => p.type)));
const displayedPets = selectedType === "all"? pets: pets.filter(pet => pet.type === selectedType);
const handleToggleDetails = (id) => {
setActiveCardId(prev => (prev === id ? null : id));};
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
return (
<section className="gallery" aria-label="Adoptable pets gallery">
<h1 tabIndex={0}>Adoptable Pets</h1>
<div className="filters" role="group" aria-label="Filter pets by type">
<button onClick={() => setSelectedType("all")}aria-pressed={selectedType === "all"}
className={selectedType === "all" ? "active" : ""}>All</button>
{types.map(type => (
 <button key={type} onClick={() => setSelectedType(type)}aria-pressed={selectedType === type}
className={selectedType === type ? "active" : ""}>{capitalize(type)}s</button> ))}
</div>
{displayedPets.length === 0 ? (
<p className="no-results" tabIndex={0}>
Sorry, no pets found for this filter.</p>):(
<div className="grid" role="list">
{displayedPets.map((pet) => (
<article
key={pet.id} className={`card ${activeCardId === pet.id ? "expanded" : ""}`}
tabIndex={0} role="listitem"
aria-expanded={activeCardId === pet.id}
aria-label={`${pet.name}, a ${pet.age} old ${pet.breed} ${pet.type}, currently ${pet.status}`}
onClick={() => handleToggleDetails(pet.id)}
onKeyDown={(e) => {
if (["Enter", " "].includes(e.key)) {
e.preventDefault();
handleToggleDetails(pet.id);
 }}}>
<img
src={pet.image}
alt={pet.name}
 loading="lazy"
onError={(e) => {
 e.target.src = "https://placehold.co/400x400?text=Image+Unavailable";
}}/>
<h3>{pet.name}</h3>
{activeCardId === pet.id && (
<div className="details">
<p><strong>Age:</strong> {pet.age}</p>
 <p><strong>Breed:</strong> {pet.breed}</p>
 <p><strong>Type:</strong> {capitalize(pet.type)}</p>
<p><strong>Status:</strong> {pet.status}</p>
<p>{pet.description}</p>
<p className="hint">(Click or press Entr to hide details)</p>
</div>
)}
</article>
))}</div>)}
</section>
  );
}
export default Gallery;
