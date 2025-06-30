<<<<<<< HEAD
// import React from 'react';
// import './PromoBanner.css';

// const PromoBanner = () => {
//   return (
//     <div className="promo-banner">

//       <p>🎉 FESTIVAL SALE — Shop for ₹9999/- & Get Extra 10% Off! | Use Code: <strong>STYLE10</strong></p>
//     </div>
//   );
// };

// export default PromoBanner;


// import React from 'react';
// import './PromoBanner.css';
// import { FaUser, FaHeart, FaShoppingCart, FaVideo, FaWhatsapp, FaStore } from 'react-icons/fa';


// const PromoBanner = () => {
//   return (

//     <div className="promo-banner">
//       <ul className="nav-links">
//         <li>WOMEN</li>
//         <li>MEN</li>
//         <li>KIDS</li>
//         <li>UNISEX</li>
//         <li className="store-link">
//           <FaStore style={{ marginRight: '6px' }} />  Find Store </li>
//       </ul>
//       <div className="sub-navbar">
//         <ul className="nav-link">
//           <li>Bestsellers</li>
//           <li>Men</li>
//           <li>Bridal</li>
//           <li>Saree</li>
//           <li>Lehangas</li>
//           <li>Gowns</li>
//           <li>Salwar Kameez</li>
//           <li>Indo Western</li>
//           <li>Blouse</li>
//           <li>Jewellery</li>
//           <li>Footwear</li>
//           <li>Kids</li>
//           <li>Co-ord Sets</li>
//           <li>Wedding</li>
//           <li>New</li>
//           <li>Sale</li>
//         </ul>
//       </div>

//       <p>🎉 Carnival SALE — Shop for ₹11,999 & Get Extra 10% Off! | Use Code: <strong>STYLE10</strong></p>
//     </div>
//   );
// };

// export default PromoBanner;










// src/PromoBanner.jsx
import React from 'react';
import './PromoBanner.css';
import { Link } from 'react-router-dom';
import { FaStore } from 'react-icons/fa';
=======
import React from 'react';
import './PromoBanner.css';
import { FaUser, FaHeart, FaShoppingCart, FaVideo, FaWhatsapp, FaStore } from 'react-icons/fa';
import { Link } from 'react-router-dom';

>>>>>>> 137470c6da907f3de99aa8a0ae1ac087b42d39fc

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <ul className="nav-links">
<<<<<<< HEAD
        <li><Link to="/category/women">WOMEN</Link></li>
        <li><Link to="/category/men">MEN</Link></li>
        <li><Link to="/category/kids">KIDS</Link></li>
        <li><Link to="/category/unisex">UNISEX</Link></li>
        <li className="store-link">
          <FaStore style={{ marginRight: '6px' }} /> Find Store
        </li>
      </ul>

=======
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/kids">KIDS</Link></li>
        <li><Link to="/unisex">UNISEX</Link></li>
        <li className="store-link">
          <FaStore style={{ marginRight: '6px' }} />  Find Store </li>
      </ul>
>>>>>>> 137470c6da907f3de99aa8a0ae1ac087b42d39fc
      <div className="sub-navbar">
        <ul className="nav-link">
          <li>Bestsellers</li>
          <li>Men</li>
          <li>Bridal</li>
          <li>Saree</li>
          <li>Lehangas</li>
          <li>Gowns</li>
          <li>Salwar Kameez</li>
          <li>Indo Western</li>
          <li>Blouse</li>
          <li>Jewellery</li>
          <li>Footwear</li>
          <li>Kids</li>
          <li>Co-ord Sets</li>
          <li>Wedding</li>
          <li>New</li>
          <li>Sale</li>
        </ul>
      </div>

<<<<<<< HEAD
      <p>
        🎉 Carnival SALE — Shop for ₹11,999 & Get Extra 10% Off! | Use Code: <strong>STYLE10</strong>
      </p>
    </div>
=======
      <div className="promo-banner">
        <div className="promo-text">
          <p>🎉 Carnival SALE — Shop for ₹11,999 & Get Extra 10% Off! | Use Code: <strong>STYLE10</strong></p>
        </div>
      </div>
    </div>

>>>>>>> 137470c6da907f3de99aa8a0ae1ac087b42d39fc
  );
};

export default PromoBanner;