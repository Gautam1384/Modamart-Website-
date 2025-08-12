// src/components/SellerTopbar.jsx
import React from 'react';
import '../styles/SellerDashboard.css';

const SellerTopbar = ({ title }) => {
  let seller = {};
  try {
    seller = JSON.parse(localStorage.getItem('sellerInfo')) || {};
  } catch {
    seller = {};
  }
  return (
    <header className="seller-topbar">
      <h2>{title}</h2>
      <div className="seller-meta">
        <div className="seller-name">Hi, {seller.name || seller.email || 'Seller'}</div>
      </div>
    </header>
  );
};

export default SellerTopbar;