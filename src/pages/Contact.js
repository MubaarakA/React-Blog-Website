import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We will get back to you asap!</p>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Phone" required />
        </div>
        <button type="submit">Send</button>
      </form>
      <p className="call-us">You may also call us at 111-111-111-111</p>
    </div>
  );
}

export default Contact;
