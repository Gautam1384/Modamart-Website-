import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import PromoBanner from './PromoBanner.jsx';
import Banner from './Banner.jsx';
import ProductPage from './ProductPage.jsx';
import CartPage from './CartPage.jsx';
import CategoryPage from './ProductList/CategoryPage.jsx';
import CategoryProductPage from './ProductList/CategoryProductPage.jsx';
import LikeManager from './LikeManager.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import CheckoutForm from './CheckoutForm.jsx';
import Footer from './Footer.jsx'; 


function App() {
  return (
    <>
      <Navbar />
      <PromoBanner />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/liked" element={<LikeManager asPage={true} />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/category-product/:id" element={<CategoryProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        {/* 404 fallback */}
        <Route path="*" element={<h2 style={{ padding: '2rem' }}>404 - Page Not Found</h2>} />
      </Routes>
      <Footer /> {/* <-- Add Footer here */}
    </>
  );
}

export default App;