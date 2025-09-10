import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import CaseItem from './CaseItem';
import '../../styles/CaseStudyList.css';

function CaseModal({ open, caseData, onClose }) {
  if (!open || !caseData) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <h3>Case Study: {caseData.petName}</h3>
        <p><strong>Diagnosis:</strong> {caseData.diagnosis || caseData.condition}</p>
        <p><strong>Treatment:</strong> {caseData.treatment}</p>
        <p><strong>Notes:</strong> {caseData.notes}</p>
        {caseData.vet && <p><strong>Veterinarian:</strong> {caseData.vet}</p>}
        {caseData.date && <p><strong>Date:</strong> {caseData.date}</p>}

        <button className="btn-cancel" style={{ marginTop: 12 }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default function CaseStudyList() {
  const { cases } = useOutletContext() || {};
  const [selected, setSelected] = useState(null);

  return (
    <div className="cases-page">
      <h2>Sample Medical Case Studies</h2>
      <div className="case-grid">
        {Array.isArray(cases) && cases.length > 0 ? (
          cases.map(c => (
            <div key={c.id} onClick={() => setSelected(c)} style={{ cursor: 'pointer' }}>
              <CaseItem caseData={c} />
            </div>
          ))
        ) : (
          <p>No case studies available.</p>
        )}
      </div>

      <CaseModal open={!!selected} caseData={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
