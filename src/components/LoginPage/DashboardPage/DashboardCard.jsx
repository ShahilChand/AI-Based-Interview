import React from 'react';
import './DashboardCard.css'; // Dedicated CSS for the card

const DashboardCard = ({ title, company, location, color }) => {
  const cardStyle = {
    '--card-accent-color': {
      'purple': '#8e44ad',
      'blue': '#3498db',
      'pink': '#e91e63',
      'green': '#2ecc71',
      'orange': '#f39c12'
    }[color] || '#00F2C3' // Default to teal
  };

  return (
    <div className="dashboard-job-card" style={cardStyle}>
      <div className="card-tag" style={{ backgroundColor: cardStyle['--card-accent-color'] }}></div>
      <h4 className="card-title">{title}</h4>
      <p className="card-company">{company}</p>
      <p className="card-location">{location}</p>
      <div className="card-footer">
        <button className="apply-btn">Apply</button>
        <button className="save-btn">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;