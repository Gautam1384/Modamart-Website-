
import React from 'react';
import './Category.css';

const menImages = Object.values(
  import.meta.glob('./assets/CategoryImage/Men/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
);

const Men = () => {
  return (
    <div className="category-grid">
      {menImages.map((src, index) => (
        <div key={index} className="category-card">
          <img src={src} alt={`Men ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default Men;
