import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">PVSNP</div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#hero">Home</a>
        <a href="#experience">Experience</a>
        <a href="#highlights">Highlights</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <a href="/resume.pdf" download className="resume-btn">Download Resume</a>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
