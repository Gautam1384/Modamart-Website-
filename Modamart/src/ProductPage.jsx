import React from 'react';
import Navbar from './Navbar.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import mockData from './data/mockData';
import './ProductPage.css'


const images = Object.values(
    import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', { eager: true })
);

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = mockData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p>Product not found.</p>;
    }

    const imgIndex = parseInt(id);
    const imageSrc = images[imgIndex]?.default || '';

    return (
        <div className="product-page">
            <Navbar />
            <div className="product-container">
                <div className="product-image-section">
                    {imageSrc ? (
                        <img className="product-image" src={imageSrc} alt={product.title} />
                    ) : (
                        <p>Image not found</p>
                    )}
                </div>
                <div className="product-details">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-desc">{product.description}</p>
                    <p className="product-price">₹{product.price}</p>
                    <div className='product-buttons'>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                    <div className='go-back'>
                        <button onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;