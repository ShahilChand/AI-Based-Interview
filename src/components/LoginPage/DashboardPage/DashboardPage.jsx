import React from 'react';

const DashboardPage = ({ onLogout }) => {
  // Function to handle user logout
  const handleLogout = () => {
    onLogout(); // Call the parent function to handle logout
  };

  const styles = `
    .dashboard-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background-image: radial-gradient(circle at 10% 10%, hsla(174, 56%, 23%, 0.5) 0px, transparent 40%), 
                        radial-gradient(circle at 90% 80%, hsla(174, 56%, 23%, 0.5) 0px, transparent 40%),
                        #000000;
      color: #ffffff;
      font-family: 'Poppins', sans-serif;
      text-align: center;
      padding: 20px;
    }

    .dashboard-content {
      background: #0d0d0d;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
      max-width: 600px;
    }

    .dashboard-content h1 {
      font-size: 2.5rem;
      color: #00f2fe;
      margin-bottom: 20px;
    }
    
    .dashboard-content p {
      font-size: 1.2rem;
      margin-bottom: 30px;
      color: #e0e0e0;
    }

    .logout-btn {
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      background-color: #00f2fe;
      color: #0d0d0d;
      font-weight: 600;
      cursor: pointer;
      font-size: 1rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .logout-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 242, 254, 0.3);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <h1>Welcome to Your Dashboard</h1>
          <p>You have successfully logged in. This is your protected area.</p>
          <button onClick={handleLogout} className="logout-btn">
            LOGOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;

