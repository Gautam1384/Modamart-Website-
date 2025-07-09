import React, { useState } from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import mockData from './data/mockData';
import mockDataWomen from './data/mockDataWomen';
import mockDataMen from './data/mockDataMen';
import mockDataKids from './data/mockDataKids';
import mockDataUnisex from './data/mockDataUnisex';
import './LikeManager.css';
// Import images from both folders
const imageModules = import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const categoryImageModules = import.meta.glob('./assets/CategoryImage/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const imageMap = {};
const bannerImageNames = new Set();
Object.keys(imageModules).forEach((path) => {
  const fileName = path.split('/').pop();
  imageMap[fileName] = imageModules[path];
  bannerImageNames.add(fileName);
});
Object.keys(categoryImageModules).forEach((path) => {
  const fileName = path.split('/').pop();
  if (!imageMap[fileName]) {
    imageMap[fileName] = categoryImageModules[path];
  }
});

const LikeManager = ({ asPage = false }) => {
  const [liked, setLiked] = useState(() => {
    const stored = localStorage.getItem('likedProducts');
    return stored ? JSON.parse(stored) : [];
  });

  const toggleLike = (id) => {
    const updatedLikes = liked.includes(id)
      ? liked.filter((itemId) => itemId !== id)
      : [...liked, id];

    setLiked(updatedLikes);
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
    window.dispatchEvent(
      new CustomEvent('likedCountUpdated', { detail: updatedLikes.length })
    );
  };

  const allMockData = [
    ...mockData,
    ...mockDataWomen,
    ...mockDataMen,
    ...mockDataKids,
    ...mockDataUnisex,
  ];

  const filteredData = asPage
    ? allMockData.filter((item) => liked.includes(item.id))
    : allMockData;

  return (
    <div className="like-grid">
      {asPage && filteredData.length === 0 ? (
        <div className="empty-like-msg">
          <h2>No Favourites Yet</h2>
          <p className='para'>Looks like you haven't liked anything yet.</p>
          <button onClick={() => window.location.href = '/'} className="discover-btn">
            Discover Beautiful Styles
          </button>
        </div>
      ) : (
        filteredData.map((item) => {
          return (
            <div className="like-card category-style" key={item.id}>
              <img
                src={imageMap[item.imageName] || ''}
                alt={item.title}
                className="like-image"
              />
              <div className="like-icons">
                <FaHeart
                  onClick={() => toggleLike(item.id)}
                  className={`like-icon ${liked.includes(item.id) ? 'liked' : ''}`}
                />
                <FaShareAlt
                  onClick={() =>
                    navigator.share?.({
                      title: item.title,
                      text: item.description,
                      url: window.location.href,
                    }) || alert('Sharing not supported')
                  }
                  className="share-icon"
                />
              </div>
              {/* Card bottom: show title & price for banner, full info for category */}
              <div className="like-desc">
                <div className="like-title">{item.title}</div>
                <div className="like-price">₹{item.price}</div>
              </div>
            </div>
          );
        })
      )}

    </div>
  );
};

export default LikeManager;