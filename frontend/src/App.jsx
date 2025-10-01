import React, { useState } from 'react';
import Login from './components/Login.jsx';
import Products from './components/Products.jsx';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Products token={token} />
      )}
    </div>
  );
};

export default App;
