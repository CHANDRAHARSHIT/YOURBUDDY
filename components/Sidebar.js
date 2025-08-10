import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar-pro">
      <Link to="/">🏠 Dashboard</Link>
      <Link to="/browse">🔍 Browse</Link>
      <Link to="/upload">⬆️ Upload</Link>
      <Link to="/profile">👤 Profile</Link>
      <Link to="/admin">🛡️ Admin</Link>
    </aside>
  );
}
