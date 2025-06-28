
// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Banner.css';
// import FilterSection from './FilterSection';
// import mockData from './data/mockData';

// // Dynamically import all images using Vite's import.meta.glob
// const images = Object.values(import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', { eager: true }));
// const Banner = () => {
//   const navigate = useNavigate();
//   const taglines = ["Your one-stop shop for ethnic fashion and trends.", "Explore our exclusive collection of traditional wear.", "Elevate your ethnic wear with Modamart.", "Discover the latest trends"]
//   const [tagIndex, setTagIndex] = useState(0);
//   const [tagcharIndex, setTagCharIndex] = useState(0);
//   const [typedTgline, setTypedTagline] = useState('');
//   const handleClick = (index) => {
//     const product = mockData[index];
//     if (product) {
//       navigate(`/product/${product.id}`);
//     }
//   };

//   useEffect(() => {
//     const currentTagline = taglines[tagIndex];
//     if (tagcharIndex <= currentTagline.length) {
//       const typing = setTimeout(() => {
//         setTypedTagline(currentTagline.slice(0, tagcharIndex));
//         setTagCharIndex((prev) => prev + 1);
//       }, 100);
//       return () => clearTimeout(typing);
//     } else {
//       const pause = setTimeout(() => {
//         setTagCharIndex(0);
//         setTagIndex((prev) => (prev + 1) % taglines.length);
//       });
//       return () => clearTimeout(pause);
//     }
//   }, [tagcharIndex, tagIndex]);

//   return (
//     <>
//       <FilterSection />
//       <section className="banner">
//         <div className="banner-text">
//           <h2>Welcome to Modamart</h2>
//         <p className='tagline'>{typedTgline}</p>
//           <button>Explore Collection</button>
//         </div>

//         <div className="card-grid">
//           {images.map((img, index) => (
//             <div
//               className="image-box"
//               key={index}
//               onClick={() => handleClick(index)}
//               style={{ cursor: 'pointer' }}
//             >
//               <img src={img.default} alt={`Product ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Banner;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
import FilterSection from './FilterSection';
import mockData from './data/mockData'

// Import banner images manually
import Banner1 from './assets/BannerImages/Banner5.jpg';
import Banner2 from './assets/BannerImages/Banner2.jpg';
import Banner3 from './assets/BannerImages/Banner3.jpg';
import Banner4 from './assets/BannerImages/Banner4.jpg';
import Banner6 from './assets/BannerImages/Banner6.jpg';

const bannerImages = [Banner1, Banner2, Banner3, Banner4,Banner6];

// Dynamically import product images
const images = Object.values(import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', { eager: true }));

const Banner = () => {
  const navigate = useNavigate();

  // Tagline animation state
  const taglines = [
    "Your one-stop shop for ethnic fashion and trends.",
    "Explore our exclusive collection of traditional wear.",
    "Elevate your ethnic wear with Modamart.",
    "Discover the latest trends"
  ];
  const [tagIndex, setTagIndex] = useState(0);
  const [tagCharIndex, setTagCharIndex] = useState(0);
  const [typedTagline, setTypedTagline] = useState('');

  // Banner auto-slide state
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    // Typing effect
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

  useEffect(() => {
    // Banner image auto change every 2 sec
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % bannerImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    const product = mockData[index];
    if (product) navigate(`/product/${ product.id }`);
  };

  return (
    <div className="layout-container">
      <div className="filter-wrapper">
        <FilterSection />
      </div>

      <div className="content-wrapper">
         <section className="banner">
           <div className="banner-text">
            <h2>Welcome to Modamart</h2>
            <p className='tagline'>{typedTagline}</p>
            <button>Explore Collection</button>
         </div>

          <div
            className="slideshow-banner"
            onClick={() => handleClick(currentBannerIndex)}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={bannerImages[currentBannerIndex]}
              alt={`Banner ${currentBannerIndex + 1}`}
            className="banner-img"
            />
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
    </div>
  );
};

export default Banner;





