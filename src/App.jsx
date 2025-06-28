import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import ProductPage from './ProductPage.jsx';
import PromoBanner from './PromoBanner.jsx';
import Footer from './Footer.jsx';
import LikeManager from './LikeManager.jsx';

function App() {
  return (
    <>
      <Navbar />
      <PromoBanner />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/liked" element={<LikeManager asPage={true} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;