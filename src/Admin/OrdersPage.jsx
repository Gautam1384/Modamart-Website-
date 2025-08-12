import React, {useEffect, useState} from 'react';
import { getOrders, updateOrderStatus } from './services/AdminService';

export default function OrdersPage(){
  const [orders, setOrders] = useState([]);
  useEffect(()=>{ load(); },[]);
  const load = async ()=> { const x = await getOrders(); setOrders(x); };

  const changeStatus = async (id, status) => {
    await updateOrderStatus(id, status);
    load();
  };

  return (
    <div>
      <div className="card">
        <h3>Orders</h3>
        <div style={{color:'#6b7280'}}>View and manage customer orders</div>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr><th>Order ID</th><th>User</th><th>Total</th><th>Status</th><th>Created</th><th>Action</th></tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.userId}</td>
                <td>₹{o.total}</td>
                <td>{o.status}</td>
                <td>{new Date(o.createdAt).toLocaleString()}</td>
                <td>
                  <div className="flex">
                    {o.status !== 'Delivered' && <button className="btn btn-primary" onClick={()=>changeStatus(o.id, 'Delivered')}>Mark Delivered</button>}
                    {o.status !== 'Cancelled' && <button className="btn btn-ghost" onClick={()=>changeStatus(o.id, 'Cancelled')}>Cancel</button>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}