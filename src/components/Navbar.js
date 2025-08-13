import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ isLoggedIn, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-pro">
      <div className="navbar-logo">
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="YOUR BUDDY Logo"
          style={{ height: 40, marginRight: 12 }}
          onError={(e) => {
            console.log('Logo failed to load');
            e.target.style.display = 'none';
          }}
        />
        YOUR BUDDY
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse</Link>
        <Link to="/upload">Upload</Link>
        {isLoggedIn && <Link to="/profile">Profile</Link>}
        {isLoggedIn && <Link to="/admin">Admin</Link>}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}
