import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { useCart } from './Context/CartContext.js';
import './CartPage.css';

const initialState = {
  name: '',
  address: '',
  city: '',
  zip: '',
  email: '',
  cardNumber: '',
  expiry: '',
  cvv: '',
};

const CheckoutForm = () => {
  const { cartItems } = useCart();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price, 0);

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.address) newErrors.address = 'Address is required';
    if (!form.city) newErrors.city = 'City is required';
    if (!form.zip) newErrors.zip = 'ZIP is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.cardNumber || !/^\d{16}$/.test(form.cardNumber)) newErrors.cardNumber = '16-digit card number required';
    if (!form.expiry || !/^\d{2}\/\d{2}$/.test(form.expiry)) newErrors.expiry = 'Expiry MM/YY required';
    if (!form.cvv || !/^\d{3,4}$/.test(form.cvv)) newErrors.cvv = 'CVV required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="cart-page">
        <h2>Thank you for your order!</h2>
        <p>Your payment has been processed.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
          <h3>Shipping Details</h3>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
          <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
          {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
          <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
          {errors.city && <div style={{ color: 'red' }}>{errors.city}</div>}
          <input name="zip" placeholder="ZIP Code" value={form.zip} onChange={handleChange} />
          {errors.zip && <div style={{ color: 'red' }}>{errors.zip}</div>}
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}

          <h3>Payment Details</h3>
          <input name="cardNumber" placeholder="Card Number" value={form.cardNumber} onChange={handleChange} maxLength={16} />
          {errors.cardNumber && <div style={{ color: 'red' }}>{errors.cardNumber}</div>}
          <input name="expiry" placeholder="Expiry (MM/YY)" value={form.expiry} onChange={handleChange} maxLength={5} />
          {errors.expiry && <div style={{ color: 'red' }}>{errors.expiry}</div>}
          <input name="cvv" placeholder="CVV" value={form.cvv} onChange={handleChange} maxLength={4} />
          {errors.cvv && <div style={{ color: 'red' }}>{errors.cvv}</div>}

          <button type="submit" style={{ marginTop: 20 }}>Place Order</button>
        </form>

        <div className="summary" style={{ marginTop: 40 }}>
          <h3>Order Summary</h3>
          <ul>
            {cartItems.map((item, idx) => (
              <li key={idx}>{item.title} - ₹{item.price}</li>
            ))}
          </ul>
          <h4>Total: ₹{getTotal()}</h4>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutForm;