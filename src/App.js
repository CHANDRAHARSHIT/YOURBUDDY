import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Team from './pages/Team';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import Community from './pages/Community';
import Faq from './pages/Faq';
import Feedback from './pages/Feedback';
import ReportBug from './pages/ReportBug';
import SuggestFeature from './pages/SuggestFeature';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in localStorage to maintain login state
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/community" element={<Community />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/report-bug" element={<ReportBug />} />
            <Route path="/suggest-feature" element={<SuggestFeature />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>YOUR BUDDY</h3>
              <p>India's most advanced platform for students to share and access academic resources</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/browse">Browse Resources</Link></li>
                <li><Link to="/upload">Upload Notes</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/community">Community</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: summercoders25@gmail.com</p>
              <p>Phone: +91 1234567890</p>
              <div className="social-icons">
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">IG</a>
                <a href="#" className="social-icon">LI</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} YOUR BUDDY - All rights reserved</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
