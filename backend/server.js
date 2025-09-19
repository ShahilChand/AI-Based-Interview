const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // We'll run the backend on a different port

// --- Middleware ---
// Allows our server to accept requests from the React frontend
app.use(cors()); 
// Allows our server to understand and parse JSON data from requests
app.use(express.json()); 

// --- The Login API Endpoint ---
app.post('/api/login', (req, res) => {
  // Extract username and password from the incoming request
  const { username, password } = req.body;

  console.log(`Received login attempt for user: ${username}`);

  // --- IMPORTANT DATABASE LOGIC (SIMULATED) ---
  // In a real application, you would look up the user in a database (like MongoDB or PostgreSQL)
  // and securely compare the hashed password.
  // For this example, we'll use simple hardcoded values.
  
  if (username === 'admin' && password === 'password123') {
    // If credentials are correct, send back a success response
    console.log('Login successful!');
    res.json({
      success: true,
      message: 'Login successful!',
      token: 'fake-jwt-token-for-secure-sessions' // In a real app, you'd generate a real JWT
    });
  } else {
    // If credentials are incorrect, send back a failure response
    console.log('Login failed: Invalid credentials.');
    res.status(401).json({ // 401 Unauthorized is the correct status code
      success: false,
      message: 'Invalid username or password.'
    });
  }
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});

