import React from 'react';
import './Category.css';

const womenImages = Object.values(
  import.meta.glob('./assets/CategoryImage/Women/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
);

const Women = () => (
  <div className="category-grid">
    {womenImages.map((src, i) => (
      <div key={i} className="category-card">
        <img src={src} alt={`Women ${i}`} />
      </div>
    ))}
  </div>
);

export default Women;