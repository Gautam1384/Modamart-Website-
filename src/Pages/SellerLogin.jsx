// src/Pages/SellerLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerLogin.css';

const SellerLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSellerLogin = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      // Simulate authentication
      localStorage.setItem('sellerToken', 'dummy-seller-token');
      localStorage.setItem('sellerInfo', JSON.stringify({ email }));
      navigate('/seller/dashboard', { replace: true });
    } else {
      alert('Please enter Seller Email and Password!');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2 className="admin-login-title">Seller Login</h2>
        <form onSubmit={handleSellerLogin}>
          <input
            className="admin-login-input"
            type="email"
            placeholder="Seller Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="admin-login-input"
            type="password"
            placeholder="Seller Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="admin-login-btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerLogin;