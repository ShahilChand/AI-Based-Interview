import React, { useState } from 'react';

// --- Icon Components (replaces react-icons) ---
const FaUser = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304h-91.4z"></path>
  </svg>
);

const FaLock = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
  </svg>
);

const FaFacebookF = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
  </svg>
);

const FaTwitter = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
    </svg>
);

const FaInstagram = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"></path>
    </svg>
);

const FaLinkedinIn = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
);

// --- Main Login Page Component ---
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login attempt with:', { username, password, rememberMe });
    alert(`Signing in as: ${username}`);
  };

  return (
    <>
      {/* SVG definition for the wavy line shape */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="wavy-line-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0.95,0 C 0.85,0.33 1,0.66 0.95,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* CSS is now embedded in a <style> tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        /* --- Animation Keyframes --- */
        @keyframes panel-enter {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes content-fade-in {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-page-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          background: linear-gradient(135deg, #2c3e50, #1a222b);
        }

        .login-panel-container {
          display: flex;
          width: 100%;
          max-width: 1100px;
          min-height: 700px;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: panel-enter 0.8s ease-out forwards;
        }

        .left-panel {
          flex: 1;
          position: relative;
          color: white;
          padding: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(45deg, rgba(200, 50, 120, 0.4), rgba(70, 40, 150, 0.4));
          clip-path: url(#wavy-line-clip);
        }
        
        .left-panel-content, .right-panel-content {
           animation: content-fade-in 0.8s ease-out 0.4s forwards;
           opacity: 0;
        }
        
        .left-panel-content h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(45deg, #ff81c9, #a385ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .left-panel-content p { font-size: 1rem; line-height: 1.6; }
        .social-icons { margin-top: 30px; }
        .social-icon {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
          margin-right: 20px;
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          padding: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
          transition: background-color 0.3s, color 0.3s, transform 0.3s;
        }
        .social-icon:hover { background-color: white; color: #c83278; transform: scale(1.1); }

        .right-panel { flex: 1; display: flex; align-items: center; justify-content: center; padding: 50px; color: white; }
        .right-panel-content { width: 100%; max-width: 400px; }
        .right-panel h2 { font-size: 1.5rem; font-weight: 600; color: white; margin-bottom: 30px; text-align: center; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
        
        .input-group { position: relative; margin-bottom: 20px; }
        .input-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: rgba(255, 255, 255, 0.8); }
        .input-group input {
          width: 100%;
          padding: 15px 15px 15px 45px;
          border-radius: 8px;
          font-size: 1rem;
          box-sizing: border-box; 
          color: white;
          background-color: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .input-group input::placeholder { color: rgba(255, 255, 255, 0.7); }
        .input-group input:focus {
          outline: none;
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
        }
        
        .options-group { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; font-size: 0.9rem; }
        .remember-me { display: flex; align-items: center; cursor: pointer; }
        .remember-me input { margin-right: 8px; accent-color: #c83278; }
        .forgot-password { color: white; text-decoration: none; }
        .forgot-password:hover { text-decoration: underline; }
        
        .login-btn {
          width: 100%;
          padding: 15px;
          border: none;
          border-radius: 8px;
          background-color: #e43a81;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }
        .login-btn:hover { background-color: #c83278; transform: scale(1.02); }
        
        .separator { text-align: center; margin: 30px 0; color: rgba(255, 255, 255, 0.8); }
        .account-buttons { display: flex; gap: 15px; }
        .account-buttons button { flex: 1; padding: 12px; border-radius: 8px; font-size: 0.9rem; font-weight: 500; cursor: pointer; transition: background-color 0.3s, color 0.3s, transform 0.2s; }
        
        .individual-btn { background-color: #8e44ad; color: white; border: none; }
        .corporate-btn { background-color: transparent; color: white; border: 1px solid rgba(255, 255, 255, 0.7); }
        .individual-btn:hover, .corporate-btn:hover { transform: scale(1.03); }
        .individual-btn:hover { background-color: #7b2d9e; }
        .corporate-btn:hover { background-color: rgba(255, 255, 255, 0.2); }
      `}</style>
      
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
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          <div className="right-panel">
            <div className="right-panel-content">
              <h2>SIGN IN</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <div className="input-icon"><FaUser /></div>
                  <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="input-group">
                  <div className="input-icon"><FaLock /></div>
                  <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="options-group">
                  <label className="remember-me">
                    <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
                    Remember me
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
                <button type="submit" className="login-btn">LOGIN</button>
              </form>
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

