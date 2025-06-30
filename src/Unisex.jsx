import React from 'react'
import './Category.css';

const unisexImages = Object.values(
  import.meta.glob('./assets/CategoryImage/Unisex/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
);

const Unisex = () => (
  <div className="category-grid">
    {unisexImages.map((src, i) => (
      <div key={i} className="category-card">
        <img src={src} alt={`Unisex ${i}`} />
      </div>
    ))}
  </div>
);
export default Unisex;
