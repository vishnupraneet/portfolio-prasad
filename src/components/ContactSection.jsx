import React from 'react';
import './ContactSection.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact</h2>
        <p>If you'd like to get in touch with Mr. PVSN Prasad, feel free to drop an email or use the form below.</p>

        <div className="contact-info">
          <p><strong>Email:</strong> prasadpvsn@example.com</p>
          <p><strong>Phone:</strong> +91-9948739333</p>
        </div>

        {/* <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" disabled>Send Message</button>
          <small>* Form is static for now (no backend)</small>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;