
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
  cardHolder: '',
  cardType: '',
};

const CheckoutForm = () => {
  const { cartItems } = useCart();
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const getTotal = () => cartItems.reduce((total, item) => total + item.price, 0);

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
    if (!form.cardHolder) newErrors.cardHolder = 'Cardholder name required';
    if (!form.cardType) newErrors.cardType = 'Card type required';
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
      <>
        <Navbar />
        <div className="cart-page">
          <div className="checkout-success">
            <h2>🎉 Thank you for your order!</h2>
            <p>Your payment of ₹{getTotal()} has been successfully processed.</p>
            <button className="go-back-btn" onClick={() => window.location.href = '/'}>
              Continue Shopping
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="checkout-page-wrapper">
        <h2 className="checkout-title">Secure Checkout</h2>
        <div className="checkout-container">
          <form onSubmit={handleSubmit}>
            <div className="checkout-form-columns">

              {/* Shipping Info */}
              <div className="checkout-column">
                <h3>Shipping Information</h3>
                <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
                {errors.name && <div className="error">{errors.name}</div>}
                <input name="address" placeholder="Street Address" value={form.address} onChange={handleChange} />
                {errors.address && <div className="error">{errors.address}</div>}
                <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
                {errors.city && <div className="error">{errors.city}</div>}
                <input name="zip" placeholder="ZIP / Postal Code" value={form.zip} onChange={handleChange} />
                {errors.zip && <div className="error">{errors.zip}</div>}
                <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>

              {/* Payment Info */}
              <div className="checkout-column">
                <h3>Payment Information</h3>
                <input name="cardNumber" placeholder="Card Number" value={form.cardNumber} onChange={handleChange} maxLength={16} />
                {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
                <input name="expiry" placeholder="Expiry (MM/YY)" value={form.expiry} onChange={handleChange} maxLength={5} />
                {errors.expiry && <div className="error">{errors.expiry}</div>}
                <input name="cvv" placeholder="CVV" value={form.cvv} onChange={handleChange} maxLength={4} />
                {errors.cvv && <div className="error">{errors.cvv}</div>}
                <input name="cardHolder" placeholder="Cardholder Name" value={form.cardHolder} onChange={handleChange} />
                {errors.cardHolder && <div className="error">{errors.cardHolder}</div>}
                <select name="cardType" value={form.cardType} onChange={handleChange}>
                  <option value="">Select Card Type</option>
                  <option value="Visa">Visa</option>
                  <option value="MasterCard">MasterCard</option>
                  <option value="Amex">American Express</option>
                  <option value="Rupay">RuPay</option>
                </select>
                {errors.cardType && <div className="error">{errors.cardType}</div>}
              </div>
            </div>

            {/* Place Order Button */}
            <div className="center-btn">
              <button type="submit" className="place-order-btn">🛍 Place Order</button>
            </div>
          </form>

          {/* Order Summary */}
          <div className="order-summary-box">
            <h3>Order Summary</h3>
            <ul>
              {cartItems.map((item, idx) => (
                <li key={idx}>{item.title} — ₹{item.price}</li>
              ))}
            </ul>
            <h4>Total: ₹{getTotal()}</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutForm;




















