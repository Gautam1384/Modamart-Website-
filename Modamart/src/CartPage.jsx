// import React from 'react';
// import Navbar from './Navbar.jsx';
// import { useCart } from './Context/CartContext.jsx';
// import { useNavigate } from 'react-router-dom';
// import './CartPage.css';
// import Footer from './Footer.jsx';

// const CartPage = () => {
//     const { cartItems, removeFromCart } = useCart();
//     const navigate = useNavigate();

//     const handleGoBack = () => {
//         navigate('/');
//     };

//     const getTotalPrice = () =>
//         cartItems.reduce((total, item) => total + item.price, 0);

//     return (
//         <>
//             <Navbar />
//             <div className="cart-page">
//                 {cartItems.length === 0 ? (
//                     <div className="empty-cart-section">
//                         <p className="empty">🛍 Your cart is empty.</p>
//                         <button className="go-back-btn" onClick={handleGoBack}>Continue Shopping</button>
//                     </div>
//                 ) : (
//                     <>
//                         <h2>🛒 Added to Cart Products</h2>
//                         <ul className="cart-list">
//                             {cartItems.map((item, index) => (
//                                 <li key={index} className="cart-item">
//                                     <img src={item.image} alt={item.title} />
//                                     <div className="details">
//                                         <h4>{item.title}</h4>
//                                         <p>₹{item.price}</p>
//                                         <button onClick={() => removeFromCart(item.id)}>Remove</button>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                         <div className="summary">
//                             <h3>Total: ₹{getTotalPrice()}</h3>
//                             <button onClick={handleGoBack}>Continue Shopping</button>
//                             <button onClick={() => navigate('/checkout')} style={{ marginLeft: 12 }}>Proceed to Checkout</button>
//                         </div>
//                     </>
//                 )}
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default CartPage;












// src/pages/CartPage.jsx
import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { useCart } from './Context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

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
          <div className="flipkart-empty-cart">
            <div className="cart-icon-face">
              <div className="handle"></div>
              <div className="cart-body">
                <div className="box-top"></div>
                <div className="face">
                  <div className="eyes"></div>
                  <div className="mouth"></div>
                </div>
                <div className="wheels"></div>
              </div>
            </div>
            <p className="flipkart-empty-message">Your cart is empty!</p>
            <button className="flipkart-shop-btn" onClick={handleGoBack}>
              Shop now
            </button>
          </div>
        ) : (
          <>
            <h2>🛒 Added to Cart Products</h2>
            <ul className="cart-list">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="details">
                    <h4>{item.title}</h4>
                    <p>₹{item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="summary">
              <h3>Total: ₹{getTotalPrice()}</h3>
              <button onClick={handleGoBack}>Continue Shopping</button>
              <button onClick={() => navigate('/checkout')} style={{ marginLeft: 12 }}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;



















































