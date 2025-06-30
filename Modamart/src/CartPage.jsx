
import React from 'react';
import Navbar from './Navbar.jsx';
import { useCart } from './context/CartContext.js';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';
import Footer from './Footer.jsx';

const CartPage = () => {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    const getTotalPrice = () =>
        cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <>
            <Navbar />
            <div className="cart-page">
                {cartItems.length === 0 ? (
                    <div className="empty-cart-section">
                        <p className="empty">🛍 Your cart is empty.</p>
                        <button className="go-back-btn" onClick={handleGoBack}>Continue Shopping</button>
                    </div>
                ) : (
                    <>
                        <h2>🛒 Added to Cart Products</h2>
                        <ul className="cart-list">
                            {cartItems.map((item, index) => (
                                <li key={index} className="cart-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="details">
                                        <h4>{item.name}</h4>
                                        <p>₹{item.price}</p>
                                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="summary">
                            <h3>Total: ₹{getTotalPrice()}</h3>
                            <button onClick={handleGoBack}>Continue Shopping</button>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default CartPage;