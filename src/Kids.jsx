import React from 'react'
import './Category.css';

const kidsImages = Object.values(
  import.meta.glob('./assets/CategoryImage/Kids/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
);

const Kids = () => (
  <div className="category-grid">
    {kidsImages.map((src, i) => (
      <div key={i} className="category-card">
        <img src={src} alt={`Kids ${i}`} />
      </div>
    ))}
  </div>
);
export default Kids;
