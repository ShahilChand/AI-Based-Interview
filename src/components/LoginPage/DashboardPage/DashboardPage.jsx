import React from 'react';
import './DashboardPage.css';
import DashboardCard from './DashboardCard'; // Reusable component for job cards

const DashboardPage = ({ onLogout }) => {
  return (
    <div className="dashboard-layout">
      {/* Sidebar - Basic structure */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"></path><path d="M10 5.5a.5.5 0 0 0-1 0V8h-2.5A.5.5 0 0 0 6 8.5v1a.5.5 0 0 0 .5.5H9v2.5a.5.5 0 0 0 1 0V10h2.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H10V5.5z"></path></svg>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><a href="#" className="active">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M540.3 358.3c-23.9 1.1-47.8 2-71.8 2-24.8 0-49.7-.9-74.4-2.8-19.1-1.5-38.3-3.9-57.4-6.8-5.3-.8-10.4-3.1-13.8-7.2-25.7-30.1-49.4-61.9-74.8-91.8C222.6 195 187.6 142.1 134.8 113.8c-27.4-14.7-56.7-27.7-86.4-39.2-2.3-.9-4.8-1.5-7.3-1.9-8.4-1.2-16.7-2-25-2.5-4.1-.2-8.1-.3-12.1-.3-12.3 0-24.3.4-36.2 1.3-3.6.3-7.2.7-10.7 1.1-.9.1-1.9.3-2.8.4-.5.1-1 .1-1.5.2-.2.1-.3.1-.5.1-.1 0-.2 0-.3.1H0v30.4h42.7c.3-.1.6-.1 1-.2 1.8-.2 3.6-.5 5.4-.7 1.3-.2 2.7-.3 4-.5 4.3-.6 8.7-1.1 13-1.4 12.3-1 24.6-1.5 37-1.5 8 0 16 .3 23.9.7 2.3.1 4.5.4 6.8.8 29.5 4.7 57.7 15 84.4 30.6 37.1 21.6 69.8 51.5 98.6 86.8 29.3 36 55.4 73.8 79.5 113.7 2.6 4.3 6.1 7.2 10.7 8.2 21.6 3.6 43.6 6.5 65.8 8.4 25.1 2.2 50.4 3.2 75.8 3.2 24.1 0 48.2-.8 72.1-2.4 22.8-1.5 45.4-3.5 67.8-6.1 1.7-.2 3.5-.5 5.2-.8 2.3-.4 4.5-.8 6.8-1.4H576V358.3h-35.7zM288 320c-7.7 0-14-6.3-14-14v-92c0-7.7 6.3-14 14-14s14 6.3 14 14v92c0 7.7-6.3 14-14 14zm-14-138v-92c0-7.7 6.3-14 14-14s14 6.3 14 14v92c0 7.7-6.3 14-14 14zm140 138v-92c0-7.7 6.3-14 14-14s14 6.3 14 14v92c0 7.7-6.3 14-14 14zm-14-138v-92c0-7.7 6.3-14 14-14s14 6.3 14 14v92c0 7.7-6.3 14-14 14zM42.7 448c-3.1 0-6.1-.1-9.1-.3-.2 0-.3 0-.5-.1-1.3-.1-2.6-.2-3.9-.3-1.6-.1-3.2-.3-4.8-.5-4.9-.6-9.7-1.2-14.5-2.1-.4-.1-.8-.2-1.2-.3-10.9-2.3-21.3-5.3-31.5-8.9-.3-.1-.5-.2-.8-.3H0v30.4h40.4c.1-.1.2-.1.3-.1 1 .1 2 .2 3 .3 1.1.1 2.2.2 3.3.3 2 .2 4 .4 6 .6 4.6.5 9.3 1 14 1.5 12.3 1.3 24.9 2 37.6 2 8 0 16-.3 23.9-.7 2.2-.1 4.5-.3 6.7-.7 30-4.6 58.7-14.7 85.5-30.2 38.3-22.1 71.8-52.7 101.2-88.7 28.5-34.9 53.9-71.8 76.8-111.4 3.8-6.6 9.8-11.4 17.5-12.7 22.8-3.7 46-6.6 69.4-8.7 25.1-2.2 50.5-3.2 75.9-3.2 24.1 0 48.2.8 72.2 2.4 22.8 1.5 45.4 3.5 67.8 6.1 1.8.2 3.5.5 5.3.8 2.3.4 4.5.8 6.8 1.4H576V448h-34.9c-.1 0-.3.1-.4.1-1.3.1-2.6.2-3.9.3-1.6.1-3.2.3-4.8.5-4.8.6-9.7 1.2-14.5 2.1-.4.1-.8.2-1.2.3-11 2.3-21.3 5.3-31.5 8.9-.2.1-.5.2-.7.3h-40.4c-.1 0-.2-.1-.3-.1-1-.1-2-.2-3-.3-1.1-.1-2.2-.2-3.3-.3-2-.2-4-.4-6-.6-4.6-.5-9.3-1-14-1.5-12.3-1.3-24.9-2-37.6-2-8 0-16.1.3-24 .7-2.3.1-4.5.3-6.8.7-29.9 4.6-58.6 14.7-85.5 30.2-38.3 22.1-71.8 52.7-101.2 88.7-28.5 34.9-53.9 71.8-76.8 111.4-3.8 6.6-9.8 11.4-17.5 12.7-22.8 3.7-46 6.6-69.4 8.7-25.1 2.2-50.5 3.2-75.9 3.2-24.1 0-48.2-.8-72.2-2.4-22.8-1.5-45.4-3.5-67.8-6.1-1.8-.2-3.5-.5-5.3-.8-2.3-.4-4.5-.8-6.8-1.4z"></path></svg> Dashboard</a></li>
            <li><a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zm-208 0c0-77.2 62.8-140 140-140s140 62.8 140 140-62.8 140-140 140-140-62.8-140-140z"></path></svg> Jobs</a></li>
            <li><a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M496 128V96c0-17.67-14.33-32-32-32H48C30.33 64 16 78.33 16 96v32c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM32 160h448v256H32V160zm0-64h448V96H32v-32zm32 128h128v64H64v-64zm0 96h128v64H64v-64z"></path></svg> Applications</a></li>
            <li><a href="#"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zM64 416V96h384l.002 320H64zM208 224h96v96h-96zm64-96h-32v-32h32v32zm0 192h-32v-32h32v32z"></path></svg> Settings</a></li>
          </ul>
        </nav>
        <button className="sidebar-logout-btn" onClick={onLogout}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M160 96H47.9c-26.5 0-47.9 21.5-47.9 48v224c0 26.5 21.5 48 47.9 48H160c17.6 0 32 14.4 32 32v32c0 17.6-14.4 32-32 32H47.9C21.4 480 0 458.6 0 432V144C0 117.4 21.4 96 47.9 96H160c17.6 0 32-14.4 32-32V32c0-17.6-14.4-32-32-32zm208 240c-6.2 0-12.1-2.3-16.6-6.7-12.3-12-12.3-31.7 0-43.9l51-51-51-51c-12.3-12-12.3-31.7 0-43.9 12.3-12 32.1-12 43.9 0l73.4 73.4c12 12 12 31.7 0 43.7L392 345.4c-4.5 4.5-10.4 6.6-16 6.6zm-50-144H208c-17.6 0-32 14.4-32 32v32c0 17.6 14.4 32 32 32h110c17.6 0 32-14.4 32-32v-32c0-17.6-14.4-32-32-32z"></path></svg>
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main-content">
        <header className="dashboard-header">
          <h1>Candidate Dashboard</h1>
          {/* You can add a user avatar/profile icon here if needed */}
        </header>

        {/* Top Stat Cards */}
        <section className="stat-cards">
          <div className="stat-card">
            <div className="stat-card-header">
              <h3>My Applications</h3>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path><path d="M11 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zm8-8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"></path></svg>
            </div>
            <p className="stat-value">14</p>
            <p className="stat-description">Total jobs you've applied to</p>
          </div>

          <div className="stat-card">
            <div className="stat-card-header">
              <h3>Application Success Rate</h3>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path><path d="M16 7L8 15v2h2l8-8z"></path></svg>
            </div>
            <p className="stat-value">0.0%</p>
            <p className="stat-description">Percentage of successful applications</p>
          </div>

          <div className="stat-card">
            <div className="stat-card-header">
              <h3>Interview Opportunities</h3>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path><path d="M12 15h-1v-4H7v-2h4V7h2v2h4v2h-4v4z"></path></svg>
            </div>
            <p className="stat-value">12</p>
            <p className="stat-description">Applications in review or accepted status</p>
          </div>
        </section>

        {/* Browse Available Jobs */}
        <section className="available-jobs">
          <div className="section-header">
            <h2>Browse Available Jobs</h2>
            <button className="view-all-btn">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 17L15 12 10 7z"></path></svg>
            </button>
          </div>
          <h3>Explore Opportunities</h3>
          <p>Find and apply to new job openings</p>

          <div className="job-cards-scroll-container">
            {/* These are placeholders for the colorful cards in your image */}
            <DashboardCard title="Software Engineer" company="Tech Corp" location="Remote" color="purple" />
            <DashboardCard title="Data Scientist" company="Data Minds" location="New York" color="blue" />
            <DashboardCard title="UX Designer" company="Creative Hub" location="London" color="pink" />
            <DashboardCard title="Product Manager" company="Innovate Inc." location="San Francisco" color="green" />
            <DashboardCard title="Marketing Specialist" company="Growth Co." location="Remote" color="orange" />
          </div>
        </section>

        {/* Applications by Status */}
        <section className="applications-by-status">
          <h2>Applications by Status</h2>
          <p>Distribution of your job applications</p>
          {/* Placeholder for a chart or list */}
          <div className="chart-placeholder">
            {/* You can integrate a charting library here */}
            <p>Chart or detailed list goes here</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;