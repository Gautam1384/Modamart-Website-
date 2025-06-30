<<<<<<< HEAD






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











=======
>>>>>>> 137470c6da907f3de99aa8a0ae1ac087b42d39fc
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProductPage from './ProductPage';
import CartPage from './CartPage';
<<<<<<< HEAD
import { CartProvider } from './context/CartContext.js';
=======
import { CartProvider } from './Context/CartContext.js';
>>>>>>> 137470c6da907f3de99aa8a0ae1ac087b42d39fc
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