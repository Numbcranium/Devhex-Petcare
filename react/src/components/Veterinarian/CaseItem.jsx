import React from 'react';
import '../../styles/CaseItem.css';

export default function CaseItem({ caseData }) {
  return (
    <article className="case-card">
      <h3>{caseData.petName}</h3>
      <p><strong>Diagnosis:</strong> {caseData.diagnosis || caseData.condition}</p>
      <p><strong>Treatment:</strong> {caseData.treatment}</p>
      <p className="case-notes">{caseData.notes}</p>
    </article>
  );
}
