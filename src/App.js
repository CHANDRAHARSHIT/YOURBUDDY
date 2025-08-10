import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
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
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
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
                <li><a href="/browse">Browse Resources</a></li>
                <li><a href="/upload">Upload Notes</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/faq">FAQs</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: support@yourbuddy.com</p>
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
