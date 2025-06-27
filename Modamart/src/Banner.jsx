
// import React from 'react';
// import './Banner.css';
// import PromoBanner from './PromoBanner';
// import FilterSection from './FilterSection';

// // Dynamically import all images using Vite's import.meta.glob
// const images = Object.values(import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', { eager: true }));

// const Banner = () => {
//   return (
// <>
// <PromoBanner/>
// <div className='banner-container'>
//   <FilterSection/>
//     <section className="banner">
//       <div className="banner-text">
//         <h2>Welcome to Modamart</h2>
//         <p>Your one-stop shop for ethnic fashion and trends.</p>
//         <button>Explore Collection</button>
//       </div>

//       <div className="card-grid">
//         {images.map((img, index) => (
//           <div className="image-box" key={index}>
//             <img src={img.default} alt={`Product ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//     </section>
//     </div>
//     </>
//   );
// };

// export default Banner;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import mockData from './data/mockData';
import FilterSection from './FilterSection';

// Dynamically import all images using Vite's import.meta.glob
const images = Object.values(import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', { eager: true }));

const Banner = () => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    const product = mockData[index];
    if (product) {
      navigate(`/product/${product.id}`);
    }
  };

  return (
    <div className='banner-container'>
      <FilterSection />
      <section className="banner">
        <div className="banner-text">
          <h2>Welcome to Modamart</h2>
          <p>Your one-stop shop for ethnic fashion and trends.</p>
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
    </div>
  );
};

export default Banner;






