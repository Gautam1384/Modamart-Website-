import { Routes, Route,} from 'react-router-dom';
import ScrollTop from './ScrollTop.jsx';
import Navbar from './Navbar.jsx';
import Banner from './Banner.jsx';
import ProductPage from './ProductPage.jsx';
import CartPage from './CartPage.jsx';
import PromoBanner from './PromoBanner.jsx';
import Footer from './Footer.jsx';
import LikeManager from './LikeManager.jsx';
import Men from './Men.jsx';
import Women from './Women.jsx';
import Kids from './Kids.jsx';
import Unisex from './Unisex.jsx';



function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <PromoBanner />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/liked" element={<LikeManager asPage={true} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:category" element={<Banner />} />
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/unisex' element={<Unisex/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;