import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2>Experience</h2>

        <div className="experience-item">
          <h3>RANE (Automotive) – Deming Awardee</h3>
          <p>Contributed to Operational Excellence and Quality Systems in a highly disciplined automotive environment.</p>
        </div>

        <div className="experience-item">
          <h3>USHA International (Home Appliances)</h3>
          <p>Worked on process standardization and lean practices in consumer goods manufacturing.</p>
        </div>

        <div className="experience-item">
          <h3>KIRBY (Pre-Engineering Steel Buildings)</h3>
          <p>Focused on optimizing resources and improving process efficiency in large-scale industrial fabrication.</p>
        </div>

        <div className="experience-item">
          <h3>PENNA Cement</h3>
          <p>Led performance management and digitization initiatives under Manufacturing 4.0.</p>
        </div>

        <div className="experience-item">
          <h3>Freelance Consultant (Present)</h3>
          <p>Currently helping reputed manufacturing industries with Lean, TQM, Change Management, and more.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;