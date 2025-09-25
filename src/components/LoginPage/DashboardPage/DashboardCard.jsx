import React from 'react';
import './DashboardCard.css'; // Dedicated CSS for the card

const DashboardCard = ({ title, company, location, color, salary }) => {
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
      
      <div className="card-content">
        <h4 className="card-title">{title}</h4>
        <p className="card-company">{company}</p>
        <p className="card-location">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
          </svg>
          {location}
        </p>
        {salary && (
          <p className="card-salary">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.5 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.5 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.5 11.8 10.9Z"/>
            </svg>
            {salary}
          </p>
        )}
      </div>

      <div className="card-footer">
        <button className="apply-btn" style={{ backgroundColor: cardStyle['--card-accent-color'] }}>
          Apply Now
        </button>
        <button className="save-btn">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DashboardCard;