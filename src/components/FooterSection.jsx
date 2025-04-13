import React from 'react';
import './FooterSection.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} PVSN Prasad. All rights reserved.</p>
      <p>Made with ❤️ by his son.</p>
    </footer>
  );
};

export default Footer;