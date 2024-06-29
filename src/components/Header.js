import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from '../Assets/wcs.png';  

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="MyBlog Logo" className="navbar-logo" />
          
        </Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/createblog">Create Blog</Link>
      </nav>
    </header>
  );
}

export default Header;
