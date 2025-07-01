

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import mockData from './data/mockData';
import Footer from './Footer';

// Banner images
// import Banner5 from './assets/BannerImages/Banner5.jpg';
import Banner4 from './assets/BannerImages/Banner4.jpg';
import Banner6 from './assets/BannerImages/Banner6.jpg';
import Banner7 from './assets/BannerImages/Banner7.jpg';
const bannerImages = [Banner4, Banner6, Banner7];

// Product images
const images = Object.values(import.meta.glob('/src/assets/Image/*.{jpg,jpeg,png,webp}', { eager: true }));

const Banner = () => {
  const navigate = useNavigate();

  const taglines = [
    "Your one-stop shop for ethnic fashion and trends.",
    "Explore our exclusive collection of traditional wear.",
    "Elevate your ethnic wear with Modamart.",
    "Discover the latest trends"
  ];
  const [tagIndex, setTagIndex] = useState(0);
  const [tagCharIndex, setTagCharIndex] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    const current = taglines[tagIndex];
    if (tagCharIndex <= current.length) {
      const type = setTimeout(() => {
        setTypedTagline(current.slice(0, tagCharIndex));
        setTagCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(type);
    } else {
      const pause = setTimeout(() => {
        setTagCharIndex(0);
        setTagIndex((prev) => (prev + 1) % taglines.length);
      }, 2000);
      return () => clearTimeout(pause);
    }
  }, [tagCharIndex, tagIndex]);

  // Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    const product = mockData[index];
    if (product) navigate(`/product/${ product.id }`);
  };

  return (
    <>
      <div className="layout-container">
        <div className="content-wrapper">
          <section className="banner">
            <div className="banner-top">
              <div className="banner-text">
                <h2>Welcome to Modamart</h2>
                <p className="tagline-box">
                  <span className="tagline">{typedTagline}</span>
                </p>
                <button>Explore Collection</button>
              </div>

              <div
                className="slideshow-banner"
                onClick={() => handleClick(currentBannerIndex)}
              >
                <img
                  src={bannerImages[currentBannerIndex]}
                  alt={`Banner ${currentBannerIndex + 1}`}
                className="banner-img"
                />
              </div>
            </div>

            <div className="card-grid">
              {images.map((img, index) => (
                <div
                  className="image-box"
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  <img src={img.default} alt={`Product ${index + 1}`} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Banner;












