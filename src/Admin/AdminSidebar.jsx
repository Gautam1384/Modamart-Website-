import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { adminLogout } from './services/AdminService';

export default function AdminSidebar() {
  const navigate = useNavigate();

  const logout = async () => {
    await adminLogout();
    navigate('/admin-login', { replace: true });
  };

  const active = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <div className="admin-sidebar">
      <div className="admin-brand">MODAMART ADMIN</div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
        Control panel
      </div>
      <div className="admin-nav">
        <NavLink to="/admin-dashboard" end className={active}>
          🏠 Dashboard
        </NavLink>
        <NavLink to="/admin-dashboard/products" className={active}>
          🛍 Products
        </NavLink>
        <NavLink to="/admin-dashboard/orders" className={active}>
          📦 Orders
        </NavLink>
        <NavLink to="/admin-dashboard/users" className={active}>
          👥 Users
        </NavLink>
        <NavLink to="/admin-dashboard/analytics" className={active}>
          📊 Analytics
        </NavLink>

        <button
          onClick={logout}
          style={{
            marginTop: 18,
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: 0,
            fontSize: 'inherit',
            textAlign: 'left',
          }}
          aria-label="Logout"
        >
          🔒 Logout
        </button>
      </div>
    </div>
  );
}