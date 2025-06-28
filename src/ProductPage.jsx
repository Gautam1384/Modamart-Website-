import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import PromoBanner from './PromoBanner.jsx';
import Footer from './Footer.jsx';
import mockData from './data/mockData';
import './ProductPage.css';

const imageModules = import.meta.glob('./assets/Image/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
});

const imageList = Object.entries(imageModules)
    .sort((a, b) => {
        const getNum = (str) => Number(str.match(/image(\d+)/)?.[1]);
        return getNum(a[0]) - getNum(b[0]);
    })
    .map((entry) => entry[1]); 

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = mockData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p>Product not found.</p>;
    }

    const imageSrc = imageList[product.id]; 

    return (
        <>
            <Navbar />
            <PromoBanner />
            <div className="product-page">
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
                <Footer />
            </div>
        </>
    );
};

export default ProductPage;