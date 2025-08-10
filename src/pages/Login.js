import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="login-illustration">
          <img
            src={`${process.env.PUBLIC_URL}/banner.jpg`}
            alt="Login Banner"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px'
            }}
            onError={e => (e.target.style.display = 'none')}
          />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="YOUR BUDDY Logo"
            style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1rem',
              display: 'block',
              borderRadius: '16px',
              boxShadow: '0 2px 8px rgba(102,126,234,0.12)'
            }}
            onError={e => (e.target.style.display = 'none')}
          />
          <h2>Welcome Back</h2>
          <p className="login-subtitle">Log in to YOUR BUDDY to access resources and community features.</p>
          <div className="login-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              autoComplete="username"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <div className="login-links">
            <Link to="/register">Create an account</Link>
            <span>·</span>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
}