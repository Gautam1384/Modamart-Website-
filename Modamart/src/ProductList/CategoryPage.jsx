

// src/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../data/mockData';
import './CategoryPage.css';

const rawImages = import.meta.glob('/src/assets/CategoryImage/*.{jpg,jpeg,png}', { eager: true });
const images = Object.entries(rawImages).reduce((acc, [path, module]) => {
    const filename = path.split('/').pop();
    acc[filename] = module.default;
    return acc;
}, {});

const CategoryPage = () => {
    const { categoryName } = useParams();

    const filteredProducts = mockData.filter(
        product => product.category.toLowerCase() === categoryName.toLowerCase()
    );

    return (
        <div className="category-page">
            <h2>{categoryName.toUpperCase()} COLLECTION</h2>
            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={images[product.imageName] || ''}
                            alt={product.title}
                            className="product-img"
                        />
                        <h3>{product.title}</h3>
                        <p>₹{product.price}</p>
                    </div>
                ))}
                {filteredProducts.length === 0 && <p>No products found for {categoryName}</p>}
            </div>
        </div>
    );
};

export default CategoryPage;