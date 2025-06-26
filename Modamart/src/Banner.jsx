
import React from 'react';
import './Banner.css';

// Dynamically import all images using Vite's import.meta.glob
const images = Object.values(import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', { eager: true }));

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h2>Welcome to Modamart</h2>
        <p>Your one-stop shop for ethnic fashion and trends.</p>
        <button>Explore Collection</button>
      </div>

      <div className="card-grid">
        {images.map((img, index) => (
          <div className="image-box" key={index}>
            <img src={img.default} alt={`Product ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
