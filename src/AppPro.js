import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ResourceCard from './components/ResourceCard';
import './App.css';

const sampleResources = [
  {
    id: 1,
    title: "Data Structures and Algorithms - Final Exam 2023",
    type: "PYQ",
    college: "IIT Delhi",
    course: "B.Tech CSE",
    subject: "Data Structures",
    uploadedBy: "Rahul Kumar",
    downloads: 245,
    rating: 4.8
  },
  {
    id: 2,
    title: "Complete Notes - Operating Systems",
    type: "Notes",
    college: "Delhi University",
    course: "B.Tech",
    subject: "Operating Systems",
    uploadedBy: "Priya Sharma",
    downloads: 189,
    rating: 4.6
  }
];

export default function AppPro() {
  return (
    <Router>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/browse" element={
              <div>
                <h2>Browse Resources</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                  {sampleResources.map(r => <ResourceCard key={r.id} resource={r} />)}
                </div>
              </div>
            } />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
