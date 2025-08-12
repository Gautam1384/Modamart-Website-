// src/components/SellerSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SellerDashboard.css';

const SellerSidebar = () => (
  <aside className="seller-sidebar">
    <nav>
      <ul>
        <li><NavLink to="/seller/dashboard">Overview</NavLink></li>
        <li><NavLink to="/seller/products">My Products</NavLink></li>
        <li><NavLink to="/seller/add-product">Add Product</NavLink></li>
        <li><NavLink to="/seller/orders">Orders</NavLink></li>
        <li><NavLink to="/seller/analytics">Analytics</NavLink></li>
        <li>
          <button
            className="logout-btn"
            onClick={() => {
              localStorage.removeItem('sellerToken');
              localStorage.removeItem('sellerInfo');
              window.location.href = '/seller-login';
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </aside>
);

export default SellerSidebar;