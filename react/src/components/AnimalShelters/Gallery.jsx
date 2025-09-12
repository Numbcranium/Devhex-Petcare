import React, { useMemo, useState } from "react";
import "../../styles/Gallery.css";

const petsData = [
  { id: 1, type: "Dog", name: "Labrador", age: "2 years", breed: "Labrador Retriever", img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=1200&auto=format&fit=crop", desc: "Friendly and playful. Loves fetch and people." },
  { id: 2, type: "Cat", name: "Milo", age: "1 year", breed: "Domestic Shorthair", img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop", desc: "Curious and affectionate. Great lap cat." },
  { id: 3, type: "Rabbit", name: "Snowy", age: "8 months", breed: "Angora", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop", desc: "Gentle and calm — perfect for a quiet home." },
  { id: 4, type: "Dog", name: "Beagle", age: "3 years", breed: "Beagle", img: "https://images.unsplash.com/photo-1515125520140-7c8d8d1e6f03?q=80&w=1200&auto=format&fit=crop", desc: "Loves to explore outdoors. Energetic & friendly." },
  { id: 5, type: "Cat", name: "Luna", age: "2 years", breed: "Persian", img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1200&auto=format&fit=crop", desc: "Calm, loves naps and cuddles." },
  { id: 6, type: "Dog", name: "Buddy", age: "1 year", breed: "Mixed", img: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop", desc: "Playful and affectionate — good with kids." }
];

 function Gallery() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [ageFilter, setAgeFilter] = useState("All");
  const [breedFilter, setBreedFilter] = useState("All");

  const breeds = useMemo(() => {
    const s = new Set(petsData.map(p => p.breed));
    return ["All", ...Array.from(s)];
  }, []);

  const filtered = petsData.filter(p => {
    if (typeFilter !== "All" && p.type !== typeFilter) return false;
    if (breedFilter !== "All" && p.breed !== breedFilter) return false;
    if (ageFilter !== "All") {
      if (ageFilter === "Puppy/Kitten" && !/month|months|week|weeks/i.test(p.age)) return false;
      if (ageFilter === "Adult" && !/year|years/i.test(p.age)) return false;
      if (ageFilter === "Senior" && !/senior|old/i.test(p.age)) return false;
    }
    return true;
  });

  return (
    <div className="adopt-page">
      <div className="panel">
        <header className="panel-hero">
          <div className="hero-text">
            <h1>Find Your New Best Friend</h1>
            <p className="hero-sub">Browse local adoptable pets — filter by type, age, or breed.</p>
          </div>
          <div className="hero-decor" aria-hidden>🐾</div>
        </header>

        <section className="panel-controls">
          <div className="pills">
            {["All", "Dog", "Cat", "Rabbit"].map(t => (
              <button
                key={t}
                className={`pill ${typeFilter === t ? "active" : ""}`}
                onClick={() => setTypeFilter(t)}
                aria-pressed={typeFilter === t}
              >{t}</button>
            ))}
          </div>

          <div className="selectors">
            <select value={ageFilter} onChange={e => setAgeFilter(e.target.value)} aria-label="Filter by age">
              <option>All</option>
              <option>Puppy/Kitten</option>
              <option>Adult</option>
              <option>Senior</option>
            </select>

            <select value={breedFilter} onChange={e => setBreedFilter(e.target.value)} aria-label="Filter by breed">
              {breeds.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </section>

        <main className="gallery" role="list">
          {filtered.map(pet => (
            <article className="pet-card" key={pet.id} role="listitem">
              <div className="pet-image">
                <img src={pet.img} alt={`${pet.name} the ${pet.breed}`} loading="lazy" />
              </div>

              <div className="pet-info">
                <div className="pet-meta">
                  <h3>{pet.name}</h3>
                  <div className="pet-sub">
                    <span className="breed">{pet.breed}</span>
                    <span className="age">{pet.age}</span>
                  </div>
                </div>

                <p className="pet-desc">{pet.desc}</p>

                <div className="actions">
                  <button className="adopt">Adopt Me</button>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}
export default Gallery;