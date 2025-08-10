import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="navbar-pro">
      <div className="navbar-logo">
        {/* Use public folder for logo to avoid import issues */}
        <img 
          src={`${process.env.PUBLIC_URL}/logo.png`} 
          alt="YOUR BUDDY Logo" 
          style={{height:40, marginRight:12}}
          onError={(e) => {
            console.log('Logo failed to load');
            e.target.style.display = 'none';
          }}
        />
        YOUR BUDDY
      </div>
      <div className="navbar-links">
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
    </nav>
  );
}
