import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="main-content">
      <h2>Register</h2>
      <form className="login-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button className="cta" type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}