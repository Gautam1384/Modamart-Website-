

import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import PromoBanner from './PromoBanner.jsx';
import Banner from './Banner.jsx';
import ProductPage from './ProductPage.jsx';
import CartPage from './CartPage.jsx';
import CategoryPage from './ProductList/CategoryPage.jsx';
import ScrollTop from './ScrollTop.jsx';


function App() {
  return (
    <>
    <ScrollTop/>
      <Navbar />
      <PromoBanner />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        {/* 404 Page fallback */}
        <Route path="*" element={<h2 style={{ padding: '2rem' }}>404 - Page Not Found</h2>} />
      </Routes>
      </>

  );
}

export default App;