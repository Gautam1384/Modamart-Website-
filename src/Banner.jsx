import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import FilterSection from './FilterSection';
import mockData from './data/mockData';

// Dynamically import all images using Vite's import.meta.glob
const images = Object.values(import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', { eager: true }));
const Banner = () => {
  const navigate = useNavigate();
  const taglines = ["Your one-stop shop for ethnic fashion and trends.", "Explore our exclusive collection of traditional wear.", "Elevate your ethnic wear with Modamart.", "Discover the latest trends."]
  const [tagIndex, setTagIndex] = useState(0);
  const [tagcharIndex, setTagCharIndex] = useState(0);
  const [typedTgline, setTypedTagline] = useState('');
  const handleClick = (index) => {
    const product = mockData[index];
    if (product) {
      navigate(`/product/${product.id}`);
    }
  };

  useEffect(() => {
    const currentTagline = taglines[tagIndex];
    if (tagcharIndex <= currentTagline.length) {
      const typing = setTimeout(() => {
        setTypedTagline(currentTagline.slice(0, tagcharIndex));
        setTagCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(typing);
    } else {
      const pause = setTimeout(() => {
        setTagCharIndex(0);
        setTagIndex((prev) => (prev + 1) % taglines.length);
      },1000);
      return () => clearTimeout(pause);
    }
  }, [tagcharIndex, tagIndex]);

  return (
    <>
      <FilterSection />
      <section className="banner">
        <div className="banner-text">
          <h2>Welcome to Modamart</h2>
          <div className="tagline-box">
            <p className='tagline'>{typedTgline}</p>
          </div>
          <button>Explore Collection</button>
        </div>

        <div className="card-grid">
          {images.map((img, index) => (
            <div
              className="image-box"
              key={index}
              onClick={() => handleClick(index)}
              style={{ cursor: 'pointer' }}
            >
              <img src={img.default} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Banner;


