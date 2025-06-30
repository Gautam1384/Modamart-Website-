<<<<<<< HEAD
=======

>>>>>>> 137470c6da907f3de99aa8a0ae1ac087b42d39fc
import React, { useState } from 'react';
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import mockData from './data/mockData';
import './LikeManager.css';

const images = Object.values(
<<<<<<< HEAD
    import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', {
        eager: true,
        import: 'default',
    })
);

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

    const filteredData = asPage
        ? mockData.filter((item) => liked.includes(item.id))
        : mockData;

    return (
        <div className="like-grid">
            {filteredData.map((item) => {
                const imgIndex = item.id;
                const imageSrc = images[imgIndex] || '';

                return (
                    <div className="like-card" key={item.id}>
                        {imageSrc ? (
                            <img src={imageSrc} alt={item.title} className="like-image" />
                        ) : (
                            <p>Image not found</p>
                        )}

                        <div className="like-icons">
                            <FaHeart
                                onClick={() => toggleLike(item.id)}
                                className={`like - icon ${liked.includes(item.id) ? 'liked' : ''}`}
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
                    </div>
                );
            })}
        </div>
    );
=======
  import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  })
);

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

  const filteredData = asPage
    ? mockData.filter((item) => liked.includes(item.id))
    : mockData;


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
          const imgIndex = item.id;
          const imageSrc = images[imgIndex] || '';

          return (
            <div className="like-card" key={item.id}>
              {imageSrc ? (
                <img src={imageSrc} alt={item.title} className="like-image" />
              ) : (
                <p>Image not found</p>
              )}

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
            </div>
          );
        })
      )}
    </div>
  );
>>>>>>> 137470c6da907f3de99aa8a0ae1ac087b42d39fc
};

export default LikeManager;