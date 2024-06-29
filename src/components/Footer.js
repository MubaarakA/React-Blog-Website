import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/About">About Us</Link>
        <Link to="/Contact">Contact Us</Link>
      </div>
      <div className="footer-subscribe">
        <h2>Subscribe To Us</h2>
        <p className="lorem"> Welcome To Our Blog Where We Share Knowldge And Wisdom</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
