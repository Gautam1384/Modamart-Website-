import React, {useEffect, useState} from 'react';
import { getAnalytics } from './services/AdminService';

export default function AnalyticsPage(){
  const [a, setA] = useState(null);
  useEffect(()=>{ load(); },[]);
  const load = async () => setA(await getAnalytics());

  if (!a) return <div className="card">Loading analytics...</div>;

  return (
    <div>
      <div className="card" style={{display:'flex', gap:12}}>
        <div style={{flex:1}}>
          <h4>Total Sales</h4>
          <div style={{fontSize:20, fontWeight:700}}>₹{a.totalSales}</div>
        </div>
        <div style={{flex:1}}>
          <h4>Products</h4>
          <div style={{fontSize:20, fontWeight:700}}>{a.totalProducts}</div>
        </div>
        <div style={{flex:1}}>
          <h4>Orders</h4>
          <div style={{fontSize:20, fontWeight:700}}>{a.totalOrders}</div>
        </div>
        <div style={{flex:1}}>
          <h4>Users</h4>
          <div style={{fontSize:20, fontWeight:700}}>{a.totalUsers}</div>
        </div>
      </div>

      <div className="card">
        <h4>Top Products</h4>
        <table className="table">
          <thead><tr><th>Title</th><th>Sold</th><th>Price</th></tr></thead>
          <tbody>
            {a.topProducts.map(p=>(
              <tr key={p.id}><td>{p.title}</td><td>{p.sold}</td><td>₹{p.price}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}