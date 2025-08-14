import React, { useState } from 'react';
import './Browse.css'; // Assuming you have a CSS file for styling

const colleges = [
  "All Colleges/Universities",
  "IIT Delhi",
  "IIT Bombay",
  "NIT Trichy",
  "BITS Pilani",
  "DTU",
  "NSUT",
  "JNU",
  "Birla Institute Bhimtal",
  "DPG Institute of Management and Technology",
  "College of Technology",
  "Graphic Era Deemed University",
  "Lucknow University",
  "Other"
];

const subjects = [
  { id: 1, name: "Mathematics", description: "PYQs, notes, assignments", color: "#4f46e5" },
  { id: 2, name: "Physics", description: "PYQs, notes, assignments", color: "#06b6d4" },
  { id: 3, name: "Chemistry", description: "PYQs, notes, assignments", color: "#f59e42" },
  { id: 4, name: "Computer Science", description: "PYQs, notes, assignments", color: "#10b981" },
  { id: 5, name: "Biology", description: "PYQs, notes, assignments", color: "#a21caf" },
  { id: 6, name: "Economics", description: "PYQs, notes, assignments", color: "#f43f5e" },
];

export default function Browse() {
  const [selectedCollege, setSelectedCollege] = useState(colleges[0]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [search, setSearch] = useState('');
  // Handler for clicking a subject card
  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject.name);
    if (subject.name === "Mathematics") {
      window.open("https://ncert.nic.in/textbook/pdf/jemh1ps.pdf", "_blank");
    }
  };

  // Filter subjects by search and selection
  const filteredSubjects = subjects.filter(sub =>
    (selectedSubject === '' || sub.name === selectedSubject) &&
    sub.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='browse-container'>
      <h2>Browse Subjects</h2>
      <div className='subject-filters'>
        <select
          value={selectedCollege}
          onChange={e => setSelectedCollege(e.target.value)}
          className="filter-select"
        >
          {colleges.map(college => (
            <option key={college} value={college}>{college}</option>
          ))}
        </select>
        <select
          value={selectedSubject}
          onChange={e => setSelectedSubject(e.target.value)}
          className="filter-select"
        >
          <option value="">All Subjects</option>
          {subjects.map(sub => (
            <option key={sub.id} value={sub.name}>{sub.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search subject..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="filter-input"
        />
      </div>
      <div className='card-menu'>

        <div className='subject-list'>
          {filteredSubjects.map(sub => (
            <div
            key={sub.id}
            className="subject-card"
            style={{ background: sub.color }}
            onClick={() => handleSubjectClick(sub)}
            >
              <h3>{sub.name}</h3>
              <p>{sub.description}</p>
              <span className="subject-card-link" style={{ color: sub.color }}>
                View {sub.name} PDF
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
