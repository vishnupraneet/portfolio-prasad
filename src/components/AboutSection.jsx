import React from 'react';
import './AboutSection.css'; // Styling we'll add in a sec

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About</h2>
        <p>
          PVSN Prasad is a Graduate Mechanical Engineer with over 33 years of experience across multiple industrial sectors like Automotive, Electrical Appliances, Steel Buildings, and Cement. He is currently a Freelance Consultant helping reputed manufacturing industries achieve Operational Excellence.
        </p>
        <p>
          With deep expertise in Lean Six Sigma (Black Belt), TQM, and Change Management, he has successfully led initiatives that improved business metrics, reduced costs, and enhanced cultural transformation. He is also passionate about training on Japanese Quality Concepts and ISO Systems.
        </p>
      </div>
    </section>
  );
};

export default About;