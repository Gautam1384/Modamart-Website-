import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockData from '../data/mockData';
import FilterCategory from '../ProductList/FilterCategory';
import './CategoryPage.css';

const rawImages = import.meta.glob('/src/assets/CategoryImage/*.{jpg,jpeg,png}', { eager: true });
const images = Object.entries(rawImages).reduce((acc, [path, module]) => {
  const filename = path.split('/').pop();
  acc[filename] = module.default;
  return acc;
}, {});

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const [selectedFilters, setSelectedFilters] = useState({
    price: [],
    subCategory: [],
    color: [],
    size: [],
    pattern: [],
    occasion: [],
    embellishment: [],
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      const isSelected = prev[type]?.includes(value);
      const updatedValues = isSelected
        ? prev[type].filter((v) => v !== value)
        : [...(prev[type] || []), value];
      return { ...prev, [type]: updatedValues };
    });
  };

  const getSubCategories = () => {
    switch (categoryName.toLowerCase()) {
      case 'men':
        return ["Men's Kurta Set", 'Kurta Jacket Sets', "Groom's Sherwani", 'Tuxedo', 'Indo-western'];
      case 'women':
        return ['Sarees', 'Lehengas', 'Gowns', 'Kurtis', 'Co-ord Sets'];
      case 'kids':
        return ['Ethnic Wear', 'Western Wear', 'Kurta Pajama', 'Frocks', 'Gown Sets'];
      case 'unisex':
        return [
          'Unisex Kurta Sets', 'Couple Ethnic Sets', 'Unisex Co-ord Sets',
          'Unisex Jackets', 'Indo-western Wear', 'Sherwani Style Robes',
          'Special Co-ords', 'Nehru Jackets'
        ];
      default:
        return [];
    }
  };

  const applyFilters = () => {
    let results = mockData.filter(
      (item) => item.category.toLowerCase() === categoryName.toLowerCase()
    );

    // Price filter
    if (selectedFilters.price.length > 0) {
      results = results.filter((product) =>
        selectedFilters.price.some((range) => {
          if (range === 'Under ₹1000') return product.price < 1000;
          if (range === '₹1000 - ₹5000') return product.price >= 1000 && product.price <= 5000;
          if (range === 'Above ₹5000') return product.price > 5000;
          return true;
        })
      );
    }

    // Sub Category
    if (selectedFilters.subCategory.length > 0) {
      results = results.filter((product) =>
        selectedFilters.subCategory.includes(product.subCategory)
      );
    }

    // Color
    if (selectedFilters.color.length > 0) {
      results = results.filter((product) =>
        selectedFilters.color.includes(product.color)
      );
    }

    // Size
    if (selectedFilters.size.length > 0) {
      results = results.filter((product) =>
        selectedFilters.size.includes(product.size)
      );
    }

    // Pattern
    if (selectedFilters.pattern.length > 0) {
      results = results.filter((product) =>
        selectedFilters.pattern.includes(product.pattern)
      );
    }

    // Occasion
    if (selectedFilters.occasion.length > 0) {
      results = results.filter((product) =>
        selectedFilters.occasion.includes(product.occasion)
      );
    }

    // Embellishment
    if (selectedFilters.embellishment.length > 0) {
      results = results.filter((product) =>
        selectedFilters.embellishment.includes(product.embellishment)
      );
    }

    setFilteredProducts(results);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedFilters, categoryName]);

  // Find image for product (fallback to empty string if not found)
  const getProductImage = (product) => images[product.imageName] || '';

  return (
    <div className="category-page">
      <h2>{categoryName.toUpperCase()} COLLECTION</h2>
      <div className="category-layout">
        <aside className="filter-section">
          <h3>FILTERS</h3>

          <FilterCategory title="Price">
            {['Under ₹1000', '₹1000 - ₹5000', 'Above ₹5000'].map((range) => (
              <label key={range}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange('price', range)}
                />
                {range}
              </label>
            ))}
          </FilterCategory>

          <FilterCategory title="Sub Categories">
            {getSubCategories().map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange('subCategory', item)}
                />
                {item}
              </label>
            ))}
          </FilterCategory>

          <FilterCategory title="Color">
            {[
              'Red', 'Blue', 'Gold', 'Black', 'Pink', 'Violet', 'Lavender',
              'Brown', 'Yellow', 'Orange', 'White', 'Beige', 'Cream', 'Grey',
              'Purple', 'Peach', 'Maroon', 'Green', 'Ivory'
            ].map((color) => (
              <label key={color}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange('color', color)}
                />
                {color}
              </label>
            ))}
          </FilterCategory>

          <FilterCategory title="Size">
            {['S', 'M', 'L', 'XL', 'XXL', 'Free'].map((size) => (
              <label key={size}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange('size', size)}
                />
                {size}
              </label>
            ))}
          </FilterCategory>

          <FilterCategory title="Print & Patterns">
            {['Print', 'Floral', 'Jaipuri', 'Block Print', 'Viscose Rayon'].map((pattern) => (
              <label key={pattern}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange('pattern', pattern)}
                />
                {pattern}
              </label>
            ))}
          </FilterCategory>

          <FilterCategory title="Occasion">
            {['Wedding', 'Festive', 'Haldi', 'Mehendi', 'Sangeet', 'Reception', 'Pooja', 'Casual'].map((occ) => (
              <label key={occ}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange('occasion', occ)}
                />
                {occ}
              </label>
            ))}
          </FilterCategory>

          <FilterCategory title="Embellishment">
            {['Resham Work', 'Sequins Work', 'Cutdana', 'Mirror Work', 'Pearl Work', 'Stone Work', 'Thread Work', 'Zari Work', 'Leather Work'].map((embellish) => (
              <label key={embellish}>
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange('embellishment', embellish)}
                />
                {embellish}
              </label>
            ))}
          </FilterCategory>
        </aside>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/category-product/${product.id}`)} // <-- update this line
            >
              <img
                src={getProductImage(product)}
                alt={product.title}
                className="product-img"
              />
              <h3>{product.title}</h3>
              <p>₹{product.price}</p>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p>No products found for selected filters in {categoryName}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;












































































































































