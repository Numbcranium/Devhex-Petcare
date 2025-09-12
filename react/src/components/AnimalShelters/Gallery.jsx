import React, { useMemo, useState } from "react";
import shelterpets from "../../data/shelterpets.json";
import "../../styles/Gallery.css";

const petsData = shelterpets.map(pet => ({
  id: pet.id,
  type: pet.species || pet.type,
  name: pet.name,
  age: pet.age,
  breed: pet.breed,
  img: pet.image,
  desc: pet.description
}));

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