// src/pages/SellerOrders.jsx
import React, { useEffect, useState } from "react";
import SellerSidebar from "../Components/SellerSidebar";
import SellerTopbar from "../Components/SellerTopbar";
import { fetchSellerOrders } from "../services/sellerService";
import "../styles/SellerDashboard.css";

const SellerAnalytics = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchSellerOrders();
        setOrders(data.orders ?? data ?? []);
      } catch {
        setOrders([
          { id: "ORD1001", customer: "Asha", items: [{ title: "Kurta", qty: 2 }], amount: 1598, status: "Pending" },
          { id: "ORD1002", customer: "Rahul", items: [{ title: "Saree", qty: 1 }], amount: 1299, status: "Shipped" },
        ]);
      }
    })();
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + (o.amount || 0), 0);

  return (
    <div className="seller-page">
      <SellerSidebar />
      <main className="seller-main">
        <SellerTopbar title="Analytics" />
        <div style={{ padding: '2rem' }}>
          <h3>Total Orders: {orders.length}</h3>
          <h3>Total Revenue: ₹{totalRevenue}</h3>
        </div>
      </main>
    </div>
  );
};

export default SellerAnalytics;