import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import ProductsPage from './ProductsPage';
import OrdersPage from './OrdersPage';
import UsersPage from './UsersPage';
import AnalyticsPage from './AnalyticsPage';
import AdminLogin from './AdminLogin';
import { isAdminLogged } from './services/AdminService';
import './admin.css';

const RequireAuth = ({ children }) => {
  if (!isAdminLogged()) return <Navigate to="/admin-login" replace />;
  return children;
};

function AdminLayout() {
  return (
    <div className="admin-root">
      <AdminSidebar />
      <main className="admin-content">
        <div className="admin-top">
          <div>
            <h2>Admin Dashboard</h2>
            <div style={{ color: '#6b7280' }}>
              Manage products, orders, users and view analytics
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <input className="search" placeholder="Global search..." />
          </div>
        </div>
        <div style={{ minHeight: 520 }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <Routes>
      {/* Add this route for /admin-login */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route element={<AdminLayout />}>
        <Route index element={<AnalyticsPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<Navigate to="analytics" replace />} />
      </Route>
    </Routes>
  );
}