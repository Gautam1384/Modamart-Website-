
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setErr('');
    if (email.trim() && password.trim()) {
      localStorage.setItem('adminToken', 'dummy-admin-token'); // use consistent key
      localStorage.setItem('adminInfo', JSON.stringify({ email }));
      navigate('/admin-dashboard', { replace: true });
    } else {
      setErr('Please enter Admin Email and Password!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleAdminLogin}>
        <h2>Admin Login</h2>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>

        {err && <div style={{ color: 'red', marginTop: 8 }}>{err}</div>}
      </form>
    </div>
  );
};

export default AdminLogin;