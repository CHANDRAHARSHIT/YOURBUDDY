import React from 'react';
import './ResourceCard.css';

export default function ResourceCard({ resource }) {
  return (
    <div className="resource-card-pro">
      <div className="resource-card-header">
        <span className="resource-type-pro">{resource.type}</span>
        <span className="resource-rating-pro">★ {resource.rating}</span>
      </div>
      <h3 className="resource-title-pro">{resource.title}</h3>
      <div className="resource-meta-pro">
        <span>🏫 {resource.college}</span>
        <span>📚 {resource.course} • {resource.subject}</span>
        <span>👤 By {resource.uploadedBy}</span>
      </div>
      <div className="resource-footer-pro">
        <span>⬇️ {resource.downloads} downloads</span>
        <button className="cta download-btn-pro">Download</button>
      </div>
    </div>
  );
}
