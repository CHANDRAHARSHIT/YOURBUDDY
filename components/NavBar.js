import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 16, background: '#eaf1fb' }}>
      <Link to="/">Home</Link>
      <Link to="/browse">Browse</Link>
      <Link to="/upload">Upload</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
