import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import Address from './Address.jsx';
import Contact from './Contact.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import ForgotPassword from './ForgotPassword.jsx';

function App() {
  const isAuthenticated = !!localStorage.getItem('modamartUser');
  const isGuest = localStorage.getItem('modamartUser') === 'guest'; // <-- ADD THIS LINE
  const location = useLocation();

  const publicPaths = ['/', '/signup', '/forgot-password'];

  if (isAuthenticated && publicPaths.includes(location.pathname)) {
    return <Navigate to="/home" replace />;
  }

  if (!isAuthenticated && !publicPaths.includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        <Route path="/home" element={
          <>
            <Navbar />
            <PromoBanner />
            <Banner />
            <Footer />
          </>
        } />
        <Route path="/product/:id" element={<ProductPage isGuest={isGuest} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/liked" element={
          <>
            <Navbar />
            <LikeManager asPage={true} />
            <Footer />
          </>
        } />
        <Route path="/category/:categoryName" element={
          <>
            <Navbar />
            <PromoBanner />
            <CategoryPage isGuest={isGuest} />
            <Footer />
          </>
        } />
        <Route path="/category-product/:id" element={
          <>
            <Navbar />
            <CategoryProductPage isGuest={isGuest} />
            <Footer />
          </>
        } />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/account" element={
          <>
            <Navbar />
            <Address />
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/privacy" element={
          <>
            <Navbar />
            <PrivacyPolicy />
            <Footer />
          </>
        } />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;