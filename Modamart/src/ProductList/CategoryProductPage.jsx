import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockData from '../data/mockData';
import mockDataWomen from '../data/mockDataWomen';
import mockDataMen from '../data/mockDataMen';
import mockDataKids from '../data/mockDataKids';
import mockDataUnisex from '../data/mockDataUnisex';
import { useCart } from '../Context/CartContext';
import './CategoryPage.css';

const rawImages = import.meta.glob('/src/assets/CategoryImage/*.{jpg,jpeg,png}', { eager: true });
const images = Object.entries(rawImages).reduce((acc, [path, module]) => {
  const filename = path.split('/').pop();
  acc[filename] = module.default;
  return acc;
}, {});

const CategoryProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart();

  // Find product by id in all mock data arrays
  const allProducts = [
    ...mockData,
    ...mockDataWomen,
    ...mockDataMen,
    ...mockDataKids,
    ...mockDataUnisex,
  ];
  const product = allProducts.find((item) => item.id === parseInt(id));
  if (!product) return <p>Product not found.</p>;

  // Get category image
  const imageSrc = images[product.imageName];

  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: imageSrc,
    };
    addToCart(productToAdd);
    navigate('/cart');
  };

  // Add this function for Buy Now
  const handleBuyNow = () => {
    if (!isInCart) {
      const productToAdd = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: imageSrc,
      };
      addToCart(productToAdd);
    }
    navigate('/checkout');
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image-section">
          {imageSrc ? (
            <img className="product-image" src={imageSrc} alt={product.title} />
          ) : (
            <p>Image not found</p>
          )}
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-desc">{product.description}</p>
          <p className="product-price">₹{product.price}</p>
          <div className="product-buttons">
            {isInCart ? (
              <button onClick={() => navigate('/cart')}>Go to Cart</button>
            ) : (
              <button className="cart-btn" onClick={handleAddToCart}>Add to Cart</button>
            )}
            {/* Add Buy Now button */}
            <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
          </div>
          <div className="go-back">
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductPage;