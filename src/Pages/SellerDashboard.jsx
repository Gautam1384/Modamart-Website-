
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SellerSidebar from '../Components/SellerSidebar';
import SellerTopbar from '../Components/SellerTopbar';
import '../styles/SellerDashboard.css';

const SellerDashboard = () => {
  const [analytics, setAnalytics] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalytics({
        totalOrders: 24,
        totalRevenue: 2450,
        pendingPayouts: 120,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="seller-page">
      <SellerSidebar />
      <main className="seller-main">
        <SellerTopbar title="Overview" />
        <section className="overview-cards">
          <div className="card">
            <h3>Orders</h3>
            <p>{analytics?.totalOrders ?? '--'}</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>₹ {analytics?.totalRevenue ?? '--'}</p>
          </div>
          <div className="card">
            <h3>Pending Payouts</h3>
            <p>₹ {analytics?.pendingPayouts ?? '--'}</p>
          </div>
        </section>
        <section style={{ marginTop: 20 }}>
          <h3>Quick actions</h3>
          <div className="quick-actions">
            <button onClick={() => navigate('/seller/add-product')}>Add New Product</button>
            <button onClick={() => navigate('/seller/products')}>Manage Products</button>
            <button onClick={() => navigate('/seller/orders')}>View Orders</button>
            <button onClick={() => navigate('/seller/analytics')}>Analytics</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SellerDashboard;