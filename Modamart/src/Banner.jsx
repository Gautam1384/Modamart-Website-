
// import React from 'react';
// import './Banner.css';

// const Banner = () => {
//   return (
//     <section className="banner">
//       <div className="banner-text">
//         <h2>Welcome to Modamart</h2>
//         <p>Your one-stop shop for ethnic fashion and trends.</p>
//         <button>Explore Collection</button>
//       </div>

//       <div className="banner-images">
//         <div className="image-box placeholder">Image 1</div>
//         <div className="image-box placeholder">Image 2</div>
//         <div className="image-box placeholder">Image 3</div>
//       </div>
//     </section>
//   );
// };

// export default Banner;


// import React from 'react';
// import srt from './assets/Image/Man3.png'
// import sr from './assets/Image/Man4.jpg'

// import './Banner.css';

// const Banner = () => {
//   return (
//     <section className="banner">
//       <div className="banner-text">
//         <h2>Welcome to Modamart</h2>
//         <p>Your one-stop shop for ethnic fashion and trends.</p>
//         <button>Explore Collection</button>
//       </div>

//       <div className="banner-images">
//         <div className="image-box placeholder"><img src={srt} alt='No image found'/>

//         </div>
//         <div className="image-box placeholder"><img src={sr} alt='No image found'/></div>
//         <div className="image-box placeholder">Image 3</div>
//         <div className="image-box placeholder">Image 4</div>
//         <div className="image-box placeholder">Image 5</div>
//       </div>
//       <div className="banner-images">
//         <div className="image-box placeholder">Image 1</div>
//         <div className="image-box placeholder">Image 2</div>
//         <div className="image-box placeholder">Image 3</div>
//         <div className="image-box placeholder">Image 4</div>
//         <div className="image-box placeholder">Image 5</div>
//       </div>
//       <div className="banner-images">
//         <div className="image-box placeholder">Image 1</div>
//         <div className="image-box placeholder">Image 2</div>
//         <div className="image-box placeholder">Image 3</div>
//         <div className="image-box placeholder">Image 4</div>
//         <div className="image-box placeholder">Image 5</div>
//       </div>
//       <div className="banner-images">
//         <div className="image-box placeholder">Image 1</div>
//         <div className="image-box placeholder">Image 2</div>
//         <div className="image-box placeholder">Image 3</div>
//         <div className="image-box placeholder">Image 4</div>
//         <div className="image-box placeholder">Image 5</div>
//       </div>
//       <div className="banner-images">
//         <div className="image-box placeholder">Image 1</div>
//         <div className="image-box placeholder">Image 2</div>
//         <div className="image-box placeholder">Image 3</div>
//         <div className="image-box placeholder">Image 4</div>
//         <div className="image-box placeholder">Image 5</div>
//       </div>
//       <div className="banner-images">
//         <div className="image-box placeholder">Image 1</div>
//         <div className="image-box placeholder">Image 2</div>
//         <div className="image-box placeholder">Image 3</div>
//         <div className="image-box placeholder">Image 4</div>
//         <div className="image-box placeholder">Image 5</div>
//       </div>
//       <div className="banner-images">
//         <div className="image-box placeholder">Image 1</div>
//         <div className="image-box placeholder">Image 2</div>
//         <div className="image-box placeholder">Image 3</div>
//         <div className="image-box placeholder">Image 4</div>
//         <div className="image-box placeholder">Image 5</div>
//       </div>
//       <div className="banner-images">
//         <div className="image-box placeholder">Image 1</div>
//         <div className="image-box placeholder">Image 2</div>
//         <div className="image-box placeholder">Image 3</div>
//         <div className="image-box placeholder">Image 4</div>
//         <div className="image-box placeholder">Image 5</div>
//       </div>
//     </section>
//   );
// };

// export default Banner;


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
