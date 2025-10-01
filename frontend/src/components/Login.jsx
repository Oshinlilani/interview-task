import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Send login request to backend
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username: username.trim(), 
        password: password.trim()
      });

      // Save JWT token
      setToken(res.data.token);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError('Invalid credentials'); 
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', cursor: 'pointer' }}
        >
          Login
        </button>
      </form>
      <p>Use <strong>Username:</strong> testuser & <strong>Password:</strong> 123456</p>
    </div>
  );
};

export default Login;
