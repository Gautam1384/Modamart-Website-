import React from 'react';
import './PromoBanner.css';
import { FaUser, FaHeart, FaShoppingCart, FaVideo, FaWhatsapp, FaStore } from 'react-icons/fa';


const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <ul className="nav-links">
        <li>WOMEN</li>
        <li>MEN</li>
        <li>KIDS</li>
        <li>UNISEX</li>
        <li className="store-link">
          <FaStore style={{ marginRight: '6px' }} />  Find Store </li>
      </ul>
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

      <p>🎉 Carnival SALE — Shop for ₹11,999 & Get Extra 10% Off! | Use Code: <strong>STYLE10</strong></p>
    </div>
  
  );
};

export default PromoBanner;