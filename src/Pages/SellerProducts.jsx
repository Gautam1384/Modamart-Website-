// src/pages/SellerProducts.jsx
import React, { useEffect, useState } from 'react';
import SellerSidebar from '../Components/SellerSidebar';
import SellerTopbar from '../Components/SellerTopbar';
import { fetchSellerProducts, deleteSellerProduct } from '../services/sellerService';
import '../styles/SellerDashboard.css'

const SellerProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchSellerProducts();
      setProducts(data.products ?? data ?? []);
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      // fallback mock
      setProducts([
        { id: 1, title: 'Handmade Kurta', price: 799, stock: 12, image: '' },
        { id: 2, title: 'Traditional Saree', price: 1299, stock: 6, image: '' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await deleteSellerProduct(id);
      setProducts((p) => p.filter(x => x.id !== id));
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      alert('Could not delete (backend not connected). Removing locally.');
      setProducts((p) => p.filter(x => x.id !== id));
    }
  };

  return (
    <div className="seller-page">
      <SellerSidebar />
      <main className="seller-main">
        <SellerTopbar title="My Products" />
        {loading ? <p>Loading...</p> : (
          <div className="products-grid">
            {products.map((prod) => (
              <div key={prod.id} className="product-card">
                <div className="product-thumb">{prod.image ? <img src={prod.image} alt={prod.title} /> : <div className="placeholder">No Image</div>}</div>
                <div className="product-info">
                  <h4>{prod.title}</h4>
                  <p>₹ {prod.price}</p>
                  <p>Stock: {prod.stock}</p>
                  <div className="product-actions">
                    <button onClick={() => window.location.href = `/seller/edit-product/${prod.id}`}>Edit</button>
                    <button className="danger" onClick={() => handleDelete(prod.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default SellerProducts;