
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

// SELLER IMPORTS
import SellerLogin from './Pages/SellerLogin.jsx';
import SellerDashboard from './Pages/SellerDashboard.jsx';
import SellerProducts from './Pages/SellerProducts.jsx';
import AddEditProduct from './Pages/AddEditProduct.jsx';
import SellerOrders from './Pages/SellerOrders.jsx';
import SellerAnalytics from './Pages/SellerAnalytics.jsx';

// ADMIN IMPORTS
import AdminLogin from './Admin/AdminLogin.jsx';
import AdminDashboard from './Admin/AdminDashboard.jsx';

// SellerProtected component
const SellerProtected = ({ children }) => {
  const token = localStorage.getItem('sellerToken');
  return token ? children : <Navigate to="/seller-login" replace />;
};

// AdminProtected component
const AdminProtected = ({ children }) => {
  const token = localStorage.getItem('adminToken'); // use consistent key adminToken
  return token ? children : <Navigate to="/admin-login" replace />;
};

function App() {
  const location = useLocation();
  const isSellerAuthenticated = localStorage.getItem('sellerToken') !== null;
  const isAdminAuthenticated = localStorage.getItem('adminToken') !== null; // key fixed

  // Prevent seller from seeing seller-login when logged in
  if (isSellerAuthenticated && location.pathname === '/seller-login') {
    return <Navigate to="/seller/dashboard" replace />;
  }

  // Restrict seller dashboard (exclude seller-login)
  if (
    location.pathname.startsWith('/seller/') &&
    !isSellerAuthenticated
  ) {
    return <Navigate to="/seller-login" replace />;
  }

  // Prevent admin from seeing admin-login when logged in
  if (isAdminAuthenticated && location.pathname === '/admin-login') {
    return <Navigate to="/admin-dashboard" replace />; // path fixed here as well
  }

  // Restrict admin dashboard (exclude admin-login)
  if (
    location.pathname.startsWith('/admin/') &&
    !isAdminAuthenticated
  ) {
    return <Navigate to="/admin-login" replace />;
  }

  return (
    <>
      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <PromoBanner />
              <Banner />
              <Footer />
            </>
          }
        />

        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/liked"
          element={
            <>
              <Navbar />
              <LikeManager asPage={true} />
              <Footer />
            </>
          }
        />

        <Route
          path="/category/:categoryName"
          element={
            <>
              <Navbar />
              <PromoBanner />
              <CategoryPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/category-product/:id"
          element={
            <>
              <Navbar />
              <CategoryProductPage />
              <Footer />
            </>
          }
        />

        <Route path="/checkout" element={<CheckoutForm />} />
        <Route
          path="/account"
          element={
            <>
              <Navbar />
              <Address />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/privacy"
          element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        {/* SELLER ROUTES */}
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller/dashboard" element={<SellerProtected><SellerDashboard /></SellerProtected>} />
        <Route path="/seller/products" element={<SellerProtected><SellerProducts /></SellerProtected>} />
        <Route path="/seller/add-product" element={<SellerProtected><AddEditProduct /></SellerProtected>} />
        <Route path="/seller/edit-product/:id" element={<SellerProtected><AddEditProduct /></SellerProtected>} />
        <Route path="/seller/orders" element={<SellerProtected><SellerOrders /></SellerProtected>} />
        <Route path="/seller/analytics" element={<SellerProtected><SellerAnalytics /></SellerProtected>} />

        {/* ADMIN ROUTES */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard/*"
          element={
            <AdminProtected>
              <AdminDashboard />
            </AdminProtected>
          }
        />

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;























