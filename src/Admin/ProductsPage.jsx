import React, {useEffect, useState} from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from './services/AdminService';

function ProductRow({p, onEdit, onDelete, onToggle}){
  return (
    <tr>
      <td style={{minWidth:90}}>{p.id}</td>
      <td style={{minWidth:180}}>{p.title}</td>
      <td>{p.category}</td>
      <td>₹{p.price}</td>
      <td>{p.stock}</td>
      <td>{p.sold}</td>
      <td>
        <div className="flex">
          <button className="btn btn-ghost" onClick={()=>onToggle(p)}>{p.featured ? '★' : '☆'}</button>
          <button className="btn btn-primary" onClick={()=>onEdit(p)}>Edit</button>
          <button className="btn btn-danger" onClick={()=>onDelete(p.id)}>Delete</button>
        </div>
      </td>
    </tr>
  );
}

export default function ProductsPage(){
  const [products, setProducts] = useState([]);
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({title:'', category:'Women', price:0, stock:10, description:'', img:''});

  useEffect(()=>{ load(); },[]);

  const load = async () => {
    const res = await getProducts();
    setProducts(res);
  };

  const search = async () => {
    const res = await getProducts({ q });
    setProducts(res);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (editing){
      await updateProduct(editing.id, form);
      setEditing(null);
    } else {
      await createProduct(form);
    }
    setForm({title:'', category:'Women', price:0, stock:10, description:'', img:''});
    load();
  };

  const startEdit = (p) => {
    setEditing(p);
    setForm({ title:p.title, category:p.category, price:p.price, stock:p.stock, description:p.description || '', img:p.img || '' });
  };

  const remove = async (id) => {
    if (!confirm("Delete product?")) return;
    await deleteProduct(id);
    load();
  };

  const toggleFeatured = async (p) => {
    await updateProduct(p.id, { featured: !p.featured });
    load();
  };

  return (
    <div>
      <div className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <strong>Products</strong>
          <div style={{color:'#6b7280'}}>Manage product catalog</div>
        </div>
        <div style={{display:'flex', gap:8}}>
          <input className="search" placeholder="search products..." value={q} onChange={e=>setQ(e.target.value)} />
          <button className="btn btn-primary" onClick={search}>Search</button>
        </div>
      </div>

      <div className="card">
        <h3>{editing ? 'Edit product' : 'Add new product'}</h3>
        <form onSubmit={submit} className="form-row">
          <input className="input" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} required />
          <select className="input" value={form.category} onChange={e=>setForm({...form, category:e.target.value})}>
            <option>Women</option><option>Men</option><option>Kids</option><option>Unisex</option>
          </select>
          <input type="number" className="input" placeholder="Price" value={form.price} onChange={e=>setForm({...form, price:Number(e.target.value)})} />
          <input type="number" className="input" placeholder="Stock" value={form.stock} onChange={e=>setForm({...form, stock:Number(e.target.value)})} />
          <input className="input" placeholder="Image path (optional)" value={form.img||''} onChange={e=>setForm({...form, img:e.target.value})} />
          <textarea rows={2} className="input" placeholder="Description" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
          <div style={{width:'100%', display:'flex', justifyContent:'flex-end', gap:10}}>
            {editing && <button type="button" className="btn btn-ghost" onClick={()=>{setEditing(null); setForm({title:'',category:'Women',price:0,stock:10,description:'', img:''})}}>Cancel</button>}
            <button className="btn btn-primary" type="submit">{editing ? 'Update' : 'Create'}</button>
          </div>
        </form>
      </div>

      <div className="card">
        <table className="table">
          <thead>
            <tr><th>ID</th><th>Title</th><th>Category</th><th>Price</th><th>Stock</th><th>Sold</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {products.map(p => <ProductRow key={p.id} p={p} onEdit={startEdit} onDelete={remove} onToggle={toggleFeatured} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}