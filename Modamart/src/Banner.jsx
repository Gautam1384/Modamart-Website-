
import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h2>Welcome to Modamart</h2>
        <p>Your one-stop shop for ethnic fashion and trends.</p>
        <button>Explore Collection</button>
      </div>

      <div className="banner-images">
        <div className="image-box placeholder">Image 1</div>
        <div className="image-box placeholder">Image 2</div>
        <div className="image-box placeholder">Image 3</div>
      </div>
    </section>
  );
};

export default Banner;
