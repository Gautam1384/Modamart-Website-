// src/pages/SellerOrders.jsx
import React, { useEffect, useState } from 'react';
import SellerSidebar from '../Components/SellerSidebar';
import SellerTopbar from '../Components/SellerTopbar';
import { fetchSellerOrders, updateOrderStatus } from '../services/sellerService';
import '../styles/SellerDashboard.css';

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);

  const load = async () => {
    try {
      const data = await fetchSellerOrders();
      setOrders(data.orders ?? data ?? []);
    } catch {
      // fallback mock
      setOrders([
        { id: 'ORD1001', customer: 'Asha', items: [{ title: 'Kurta', qty: 2 }], amount: 1598, status: 'Pending' },
        { id: 'ORD1002', customer: 'Rahul', items: [{ title: 'Saree', qty: 1 }], amount: 1299, status: 'Shipped' },
      ]);
    }
  };

  useEffect(() => { load(); }, []);

  const changeStatus = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders((o) => o.map(x => x.id === orderId ? { ...x, status: newStatus } : x));
    } catch {
      alert('Could not update status (backend not connected). Updating locally.');
      setOrders((o) => o.map(x => x.id === orderId ? { ...x, status: newStatus } : x));
    }
  };

  return (
    <div className="seller-page">
      <SellerSidebar />
      <main className="seller-main">
        <SellerTopbar title="Orders" />
        <div className="orders-list">
          {orders.map(o => (
            <div key={o.id} className="order-card">
              <div><strong>#{o.id}</strong> — {o.customer}</div>
              <div>Items: {o.items.map(it => `${it.title} x${it.qty}`).join(', ')}</div>
              <div>Amount: ₹ {o.amount}</div>
              <div>Status: <strong>{o.status}</strong></div>
              <div className="order-actions">
                {o.status !== 'Shipped' && <button onClick={() => changeStatus(o.id, 'Shipped')}>Mark Shipped</button>}
                {o.status !== 'Delivered' && <button onClick={() => changeStatus(o.id, 'Delivered')}>Mark Delivered</button>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SellerOrders;