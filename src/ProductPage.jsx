import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import PromoBanner from './PromoBanner.jsx';
import { useCart } from './Context/CartContext.js';
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
    }).map((entry) => entry[1]);

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { cartItems, addToCart } = useCart();
    const isInCart = cartItems.some(item => item.id === parseInt(id));
    const product = mockData.find((item) => item.id === parseInt(id));

    if (!product) {
        return <p>Product not found.</p>;
    }

    const imageSrc = imageList[product.id];


    const handleAddToCart = () => {
        // const productimage = {
        //     image: imageSrc,
        // }
        // addToCart(productimage, product.id, product.title, product.price);
        const productimage = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: imageSrc,
        };
        addToCart(productimage);
        navigate('/cart');
    };



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

                        <div className='product-buttons'>{isInCart ? (
                            <button onClick={() => navigate('/cart')}>Go to Cart</button>) : (
                            <button className='cart-btn' onClick={handleAddToCart}>Add to Cart</button>
                        )}
                            <button className='buy-btn'>Buy Now</button>
                        </div>

                        <div className='go-back'>{ }
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