import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-pro">
      <h1>Welcome to <span className="brand-pro">YOUR BUDDY</span></h1>
      <p className="subtitle-pro">A professional platform for students to share and access academic resources from all colleges and universities.</p>
      <div className="dashboard-stats-pro">
        <div>
          <h2>10,000+</h2>
          <p>Resources</p>
        </div>
        <div>
          <h2>50,000+</h2>
          <p>Active Students</p>
        </div>
        <div>
          <h2>500+</h2>
          <p>Colleges</p>
        </div>
      </div>
    </div>
  );
}
