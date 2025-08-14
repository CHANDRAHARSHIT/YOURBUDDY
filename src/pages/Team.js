import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Priya Negi',
    description: 'Contributed to the frontend development and design of the project, ensuring a visually appealing and user-friendly interface.',
    category: 'frontend_design',
  },
  {
    name: 'Silki Banu',
    description: 'Assisted in frontend development and designing tasks, enhancing the overall look and interactivity of the application.',
    category: 'frontend_design',
  },
  {
    name: 'Komal Rawat',
    description: 'Played an important role in frontend development and design, adding creative elements and improving usability.',
    category: 'frontend_design',
  },
  {
    name: 'Ananya Gupta',
    description: 'Supported frontend development and design, contributing to the project’s aesthetic and responsive layout.',
    category: 'frontend_design',
  },
  {
    name: 'Jayendra Nayal',
    description: 'Led backend development and implemented security features to ensure robust performance and data protection.',
    category: 'backend_security',
  },
  {
    name: 'Abdul Aleem Sarfraz',
    description: 'Worked on backend development and security enhancements to maintain system stability and protect user data.',
    category: 'backend_security',
  },
  {
    name: 'Aman',
    description: 'Assisted in backend development and contributed to implementing security protocols for safe and efficient operations.',
    category: 'backend_security',
  },
  {
    name: 'Harshit Chandra',
    description: 'Handled reviewing, debugging, and managing tasks, ensuring the project met quality and performance standards.',
    category: 'managing_debugging',
  },
];

export default function Team() {
  const frontendDesignMembers = teamMembers.filter(member => member.category === 'frontend_design');
  const backendSecurityMembers = teamMembers.filter(member => member.category === 'backend_security');
  const managingDebuggingMembers = teamMembers.filter(member => member.category === 'managing_debugging');

  const renderTeamCards = (members) => (
    <div className="team-grid">
      {members.map((member, index) => (
        <div key={index} className="team-card">
          <div className="team-card-inner">
            <div className="team-card-front">
              <h3>{member.name}</h3>
            </div>
            <div className="team-card-back">
              <p>{member.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="team-page-container">
      <h1>Meet Our Team</h1>

      <section className="team-category">
        <h2>Frontend and Designing</h2>
        {renderTeamCards(frontendDesignMembers)}
      </section>

      <section className="team-category">
        <h2>Backend and Security</h2>
        {renderTeamCards(backendSecurityMembers)}
      </section>

      <section className="team-category">
        <h2>Managing and Debugging</h2>
        {renderTeamCards(managingDebuggingMembers)}
      </section>
    </div>
  );
}
