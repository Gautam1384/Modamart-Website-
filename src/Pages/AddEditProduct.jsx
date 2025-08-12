// src/pages/AddEditProduct.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SellerSidebar from '../Components/SellerSidebar';
import SellerTopbar from '../Components/SellerTopbar';
import { addSellerProduct, updateSellerProduct, fetchSellerProducts } from '../services/sellerService';
import '../styles/SellerDashboard.css';

const AddEditProduct = () => {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    stock: '',
    category: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      // Ideally GET /seller/products/:id - but service not implemented above
      (async () => {
        try {
          const all = await fetchSellerProducts();
          const product = (all.products || all).find(p => String(p.id) === String(id));
          if (product) setForm({ ...product });
        // eslint-disable-next-line no-unused-vars
        } catch (e) {
          // ignore
        }
      })();
    }
  }, [id, isEdit]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEdit) {
        await updateSellerProduct(id, form);
      } else {
        await addSellerProduct(form);
      }
      alert('Saved successfully (or will be after backend hookup).');
      navigate('/seller/products');
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert('Could not save (backend not connected).');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="seller-page">
      <SellerSidebar />
      <main className="seller-main">
        <SellerTopbar title={isEdit ? 'Edit Product' : 'Add Product'} />

        <form className="product-form" onSubmit={submit}>
          <label>Title</label>
          <input name="title" value={form.title} onChange={handleChange} required />

          <label>Price (₹)</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} required />

          <label>Stock</label>
          <input name="stock" type="number" value={form.stock} onChange={handleChange} required />

          <label>Category</label>
          <input name="category" value={form.category} onChange={handleChange} />

          <label>Description</label>
          <textarea name="description" value={form.description} onChange={handleChange} rows="4" />

          <label>Image URL (or upload hook)</label>
          <input name="image" value={form.image} onChange={handleChange} placeholder="https://..." />

          <div style={{ marginTop: 12 }}>
            <button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save Product'}</button>
            <button type="button" style={{ marginLeft: 8 }} onClick={() => navigate('/seller/products')}>Cancel</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddEditProduct;