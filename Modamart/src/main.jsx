// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './App';
// import ProductPage from './ProductPage';

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/product/:id" element={<ProductPage />} />
//     </Routes>
//   </BrowserRouter>
// );



import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import ProductPage from './ProductPage';
import CartPage from './CartPage'; // If you have a separate cart page
import { CartProvider } from './context/CartContext'; // Path may vary based on your project

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* Optional */}
      </Routes>
    </BrowserRouter>
  </CartProvider>
);