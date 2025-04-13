import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>PVSN Prasad</h1>
          <h3>Mechanical Engineer | Operational Excellence Consultant</h3>
          <p>33+ years of rich experience in multiple industries — driving transformation, change management, and performance excellence.</p>
        </div>
        <div className="hero-image">
          <img src="/images/prasad.jpeg" alt="PVSN Prasad" />
        </div>
      </div>
    </section>
  );
};

export default Hero;