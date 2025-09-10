import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useVet } from '../../context/VetContext';
import '../../styles/OnboardingForm.css';

/**
 * Onboarding form sets VetContext.activeVet and navigates to dashboard.
 * It also pre-fills fields if a vet exists in JSON (fetched here quickly).
 */
export default function OnboardingForm() {
  const navigate = useNavigate();
  const { setActiveVet } = useVet();

  const [form, setForm] = useState({
    name: '',
    specialization: '',
    email: '',
    phone: '',
    imageUrl: '',
  });
  const [prefillDone, setPrefillDone] = useState(false);

  // If the user navigated with role or we prefer to prefill from first vet, load vets.json
  useEffect(() => {
    fetch('/data/vets.json')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0 && !prefillDone) {
          // Pre-fill with first vet as suggested by SRS fallback
          setForm({
            name: data[0].name,
            specialization: data[0].specialization,
            email: data[0].email,
            phone: data[0].phone,
            imageUrl: data[0].image || '/images/default-vet.png'
          });
          setPrefillDone(true);
        }
      })
      .catch(() => {});
  }, [prefillDone]);

  const onChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = e => {
    e.preventDefault();
    // Save active vet to context so NavBar and other components can access it
    setActiveVet(form);
    // Navigate to dashboard
    navigate('/dashboard', { state: { fromOnboarding: true } });
  };

  return (
    <div className="onboard-wrapper">
      <form className="onboard-form" onSubmit={onSubmit}>
        <h2>Veterinarian Onboarding</h2>

        <label>
          Full Name
          <input name="name" value={form.name} onChange={onChange} required />
        </label>

        <label>
          Specialization
          <input name="specialization" value={form.specialization} onChange={onChange} />
        </label>

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={onChange} />
        </label>

        <label>
          Phone
          <input name="phone" value={form.phone} onChange={onChange} />
        </label>

        <label>
          Profile Image Path or URL
          <input name="imageUrl" value={form.imageUrl} onChange={onChange} placeholder="/images/vet1.jpg" />
        </label>

        <div style={{display:'flex', gap:8, marginTop:8}}>
          <button type="submit" className="btn-submit">Complete Registration</button>
          <button type="button" className="btn-submit" onClick={() => navigate('/dashboard')}>Skip & go to Dashboard</button>
        </div>
      </form>
    </div>
  );
}
