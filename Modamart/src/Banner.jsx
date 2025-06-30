
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';
// import FilterSection from './FilterSection';
import mockData from './data/mockData'
import Footer from './Footer'

// Import banner images manually
import Banner5 from './assets/BannerImages/Banner5.jpg';
import Banner4 from './assets/BannerImages/Banner4.jpg';
import Banner6 from './assets/BannerImages/Banner6.jpg';
import Banner7 from './assets/BannerImages/Banner7.jpg';
const bannerImages = [Banner5 ,Banner4,Banner6,Banner7];

// Dynamically import product images
const images = Object.values(import.meta.glob('/src/assets/Image/*.{jpg,jpeg,png,webp}', { eager: true }));

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
    <>
    <div className="layout-container">
      <div className="filter-wrapper">
        {/* <FilterSection /> */}
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
    <Footer/>
    </>
  );
};

export default Banner;









// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import FilterSection from './FilterSection';
// import { FaHeart, FaShareAlt } from 'react-icons/fa';
// import './Banner.css';
// import mockData from './data/mockData';

// const getLikedFromStorage = () => {
//   const data = localStorage.getItem('likedProducts');
//   return data ? JSON.parse(data) : [];
// };

// const imageModules = import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', {
//   eager: true,
//   import: 'default',
// });

// const imageList = Object.entries(imageModules)
//   .sort((a, b) => {
//     const getNum = (str) => Number(str.match(/image(\d+)/)?.[1]);
//     return getNum(a[0]) - getNum(b[0]);
//   })
//   .map((entry) => entry[1]);

// const Banner = () => {
//   const navigate = useNavigate();
//   const taglines = [
//     "Your one-stop shop for ethnic fashion and trends.",
//     "Explore our exclusive collection of traditional wear.",
//     "Elevate your ethnic wear with Modamart.",
//     "Discover the latest trends."
//   ];

//   const [tagIndex, setTagIndex] = useState(0);
//   const [tagCharIndex, setTagCharIndex] = useState(0);
//   const [typedTagline, setTypedTagline] = useState('');
//   const [likedIds, setLikedIds] = useState(getLikedFromStorage());

//   useEffect(() => {
//     const currentTagline = taglines[tagIndex];
//     if (tagCharIndex <= currentTagline.length) {
//       const typing = setTimeout(() => {
//         setTypedTagline(currentTagline.slice(0, tagCharIndex));
//         setTagCharIndex((prev) => prev + 1);
//       }, 100);
//       return () => clearTimeout(typing);
//     } else {
//       const pause = setTimeout(() => {
//         setTagCharIndex(0);
//         setTagIndex((prev) => (prev + 1) % taglines.length);
//       }, 1000);
//       return () => clearTimeout(pause);
//     }
//   }, [tagCharIndex, tagIndex]);

//   const handleClick = (id) => {
//     navigate(`/product/${ id }`);
//   };

//   const handleLike = (id) => {
//     const updatedLikes = likedIds.includes(id)
//       ? likedIds.filter((item) => item !== id)
//       : [...likedIds, id];

//     setLikedIds(updatedLikes);
//     localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
//     window.dispatchEvent(
//       new CustomEvent('likedCountUpdated', { detail: updatedLikes.length })
//     );
//   };

//   const handleShare = (product) => {
//     if (navigator.share) {
//       navigator.share({
//         title: product.title,
//         text: product.description,
//         url: window.location.href
//       });
//     } else {
//       alert("Sharing is not supported in your browser.");
//     }
//   };

//   return (
//     <>
//       <FilterSection />
//       <section className="banner">
//         <div className="banner-text">
//           <h2>Welcome to Modamart</h2>
//           <div className="tagline-box">
//             <p className="tagline">{typedTagline}</p>
//           </div>
//           <button>Explore Collection</button>
//         </div>

//         <div className="card-grid">
//           {mockData.map((product) => {
//             const imageSrc = imageList[product.id];
//             return (
//               <div
//                 key={product.id}
//                 className="image-box"
//                 onClick={() => handleClick(product.id)}
//                 style={{ position: 'relative', cursor: 'pointer' }}
//               >
//                 {imageSrc && <img src={imageSrc} alt={product.title} />}

//                 <div
//                   className="like-share-stack"
//                   style={{
//                     position: 'absolute',
//                     top: '10px',
//                     right: '10px',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '6px'
//                   }}
//                 >
//                   <FaHeart
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleLike(product.id);
//                     }}
//                     color={likedIds.includes(product.id) ? 'red' : 'gray'}
//                     style={{ cursor: 'pointer' }}
//                   />
//                   <FaShareAlt
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleShare(product);
//                     }}
//                     style={{ cursor: 'pointer' }}
//                   />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Banner;




