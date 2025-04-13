import React from 'react';
import './Highlights.css';

const highlights = [
  "Operational Excellence across sectors",
  "Lean Six Sigma Black Belt certified",
  "Change Management and Cultural Transformation",
  "Standardization of operational metrics",
  "TQM and ISO-based Quality Systems",
  "Performance Management & Resource Optimization",
  "Digitization under Manufacturing 4.0",
  "Trainer for Japanese Quality Concepts & Systems"
];

const Highlights = () => {
  return (
    <section id="highlights" className="highlights">
      <div className="highlights-container">
        <h2>Professional Highlights</h2>
        <ul>
          {highlights.map((item, index) => (
            <li key={index}>
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;