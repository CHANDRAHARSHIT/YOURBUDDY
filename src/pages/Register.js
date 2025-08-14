import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
  return (
    <div className="register-bg">
      <div className="register-container">
        <form className="register-form">
          <h2>Create an Account</h2>
          <p className="register-subtitle">Join YOUR BUDDY to access resources and community features.</p>
          <div className="register-field">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="register-field">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="register-field">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button className="register-btn" type="submit">Register</button>
          <div className="register-links">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </form>
        <div className="register-illustration">
          <img
            src={`${process.env.PUBLIC_URL}/banner.jpg`}
            alt="Register Banner"
            onError={e => (e.target.style.display = 'none')}
          />
        </div>
      </div>
    </div>
  );
}
