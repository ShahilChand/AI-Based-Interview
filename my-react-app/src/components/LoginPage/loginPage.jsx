import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(''); // State to hold login error messages

  // This is the updated function that communicates with the backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) { // Check if the response was successful (status 200-299)
        console.log('Login successful:', data);
        alert('Login successful!');
        // Here you would typically redirect the user or save the token
        // Example: window.location.href = '/dashboard';
      } else {
        // If the server responded with an error (e.g., status 401)
        console.error('Login failed:', data.message);
        setError(data.message); // Set the error message to be displayed
      }
    } catch (err) {
      console.error('An error occurred:', err);
      setError('Could not connect to the server. Please try again later.');
    }
  };

  // The inline styles are defined here as an object
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
    }
    
    .login-page-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
      /* Updated background with teal glows */
      background: radial-gradient(circle at 20% 25%, rgba(0, 242, 195, 0.1), transparent 30%),
                  radial-gradient(circle at 80% 75%, rgba(0, 242, 195, 0.1), transparent 30%),
                  #0D0D0D;
    }
    
    .login-panel-container {
      display: flex;
      width: 100%;
      max-width: 1100px;
      min-height: 700px;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      background: #1A1A1A; /* Slightly lighter panel background */
      animation: fadeInSlideUp 1s ease-out forwards;
    }

    @keyframes fadeInSlideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .left-panel, .right-panel {
      flex: 1;
      padding: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .left-panel {
      color: white;
      background: #151515; /* Dark solid color for left panel */
      clip-path: url(#gentle-curve); 
      padding-right: 80px;
    }

    .left-panel-content, .right-panel-content {
      animation: contentFadeIn 1s ease-out 0.5s forwards;
      opacity: 0;
    }

    @keyframes contentFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    .left-panel-content h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 20px;
      color: #FFFFFF; /* White logo text */
    }

    .left-panel-content h1 span {
      color: #00F2C3; /* Teal accent for part of the logo if needed */
    }
    
    .social-icons {
      margin-top: 30px;
    }
    
    .social-icon {
      color: #FFFFFF;
      background-color: transparent;
      border: 1px solid #3A3A3A;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      font-size: 1.1rem;
      transition: transform 0.3s, background-color 0.3s, border-color 0.3s;
      text-decoration: none;
    }
    .social-icon:hover {
      transform: scale(1.1);
      background-color: #00F2C3;
      border-color: #00F2C3;
      color: #0D0D0D;
    }
    
    .right-panel {
      color: #FFFFFF;
    }
    
    .right-panel h2 {
      text-align: left;
      margin-bottom: 30px;
      font-weight: 600;
      color: #FFFFFF;
    }
    
    .input-group {
      position: relative;
      margin-bottom: 20px;
    }
    
    .input-icon {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      line-height: 0;
      color: #8A8A8A;
    }
    
    .input-group input {
      width: 100%;
      padding: 15px 15px 15px 45px;
      border-radius: 8px;
      border: 1px solid #3A3A3A;
      background-color: #252525;
      color: white;
      box-sizing: border-box;
      font-size: 1rem;
    }
    .input-group input::placeholder { color: #8A8A8A; }
    .input-group input:focus {
        outline: none;
        border-color: #00F2C3;
        box-shadow: 0 0 0 2px rgba(0, 242, 195, 0.3);
    }
    
    .options-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 25px;
      font-size: 0.9rem;
    }
    
    .forgot-password {
      color: #FFFFFF;
      text-decoration: none;
    }
    
    .login-btn, .individual-btn, .corporate-btn {
      width: 100%;
      padding: 15px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .login-btn:hover, .individual-btn:hover, .corporate-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }
    
    .login-btn {
      background-color: #00F2C3;
      color: #0D0D0D;
      font-weight: 600;
    }
    
    .separator {
      text-align: center;
      margin: 20px 0;
    }
    
    .account-buttons {
      display: flex;
      gap: 15px;
    }
    
    .individual-btn {
      background-color: #00F2C3;
      color: #0D0D0D;
    }
    
    .corporate-btn {
      background-color: transparent;
      color: #FFFFFF;
      border: 1px solid #3A3A3A;
    }

    .error-message {
      color: #ff6b6b;
      background-color: rgba(255, 107, 107, 0.1);
      border: 1px solid rgba(255, 107, 107, 0.3);
      border-radius: 8px;
      padding: 15px;
      text-align: center;
      margin-top: 20px;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      
      {/* This SVG defines the gentle S-curve */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="gentle-curve" clipPathUnits="objectBoundingBox">
            {/* This path creates the full S-curve from top to bottom */}
            <path d="M 0,0 L 0,1 L 0.95, 1 C 1.05, 0.7, 0.85, 0.3, 0.95, 0 Z" />
          </clipPath>
        </defs>
      </svg>
      
      <div className="login-page-container">
        <div className="login-panel-container">
          <div className="left-panel">
            <div className="left-panel-content">
              <h1>LOGO</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                dapibus ex in magna vulputate, nec quis lectus leo.
              </p>
              <div className="social-icons">
                 <a href="#" className="social-icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                </a>
                <a href="#" className="social-icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                </a>
                <a href="#" className="social-icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
                <a href="#" className="social-icon">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="right-panel">
            <div className="right-panel-content">
              <h2>SIGN IN</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <span className="input-icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <span className="input-icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="options-group">
                  <label>
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    /> Remember me
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
                <button type="submit" className="login-btn">
                  LOGIN
                </button>
              </form>
              {error && <div className="error-message">{error}</div>}
              <div className="separator">
                <p>Don't have an account?</p>
              </div>
              <div className="account-buttons">
                <button className="individual-btn">INDIVIDUAL ACCOUNT</button>
                <button className="corporate-btn">CORPORATE ACCOUNT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

