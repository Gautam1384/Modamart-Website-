





// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import { CartProvider } from './context/CartContext';

// createRoot(document.getElementById('root')).render(
//   <CartProvider>
//     <BrowserRouter>
//     <ScrollTop/>
//       <App />
//     </BrowserRouter>
//   </CartProvider>
// );











import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
import { CartProvider } from './context/CartContext.js';
import ScrollTop from './ScrollTop.jsx';

createRoot(document.getElementById('root')).render(
  <CartProvider>
  <BrowserRouter>
  <ScrollTop/>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} /> 
    </Routes>
  </BrowserRouter>
  </CartProvider>
);