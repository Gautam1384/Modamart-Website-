import Navbar from './Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Banner from './Banner.jsx';
import ProductPage from './ProductPage.jsx';
import PromoBanner from './PromoBanner.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
    <PromoBanner/>
    
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;