// import React from 'react';
// import { useParams } from 'react-router-dom';
// import mockData from '../data/mockData';
// import FilterCategory from '../ProductList/FilterCategory'; // Adjust path if needed
// import './CategoryPage.css';

// const rawImages = import.meta.glob('/src/assets/CategoryImage/*.{jpg,jpeg,png}', { eager: true });
// const images = Object.entries(rawImages).reduce((acc, [path, module]) => {
//     const filename = path.split('/').pop();
//     acc[filename] = module.default;
//     return acc;
// }, {});

// const CategoryPage = () => {
//     const { categoryName } = useParams();
//     const filteredProducts = mockData.filter(
//         product => product.category.toLowerCase() === categoryName.toLowerCase()
//     );

//     return (
//         <div className="category-page">
//             <h2>{categoryName.toUpperCase()} COLLECTION</h2>
//             <div className="category-layout">
//                 <aside className="filter-section">
//                     <h3>FILTERS</h3>

//                     <FilterCategory title="Price">
//                         <label><input type="checkbox" /> Under ₹1000</label>
//                         <label><input type="checkbox" /> ₹1000 - ₹5000</label>
//                         <label><input type="checkbox" /> Above ₹5000</label>
//                     </FilterCategory>

//                     <FilterCategory title="Discount %">
//                         <label><input type="checkbox" /> 10% or more</label>
//                         <label><input type="checkbox" /> 20% or more</label>
//                         <label><input type="checkbox" /> 30% or more</label>
//                         <label><input type="checkbox" /> 40% or more</label>
//                         <label><input type="checkbox" /> 50% or more</label>
//                     </FilterCategory>

//                    <FilterCategory title="Sub Categories">
//   {categoryName.toLowerCase() === "men" && (
//     <>
//       <label><input type="checkbox" /> Men's Kurta Set</label>
//       <label><input type="checkbox" /> Kurta Jacket Sets</label>
//       <label><input type="checkbox" /> Groom's Sherwani</label>
//       <label><input type="checkbox" /> Tuxedo</label>
//       <label><input type="checkbox" /> Indo-western</label>
//     </>
//   )}

//   {categoryName.toLowerCase() === "women" && (
//     <>
//       <label><input type="checkbox" /> Sarees</label>
//       <label><input type="checkbox" /> Lehengas</label>
//       <label><input type="checkbox" /> Gowns</label>
//       <label><input type="checkbox" /> Kurtis</label>
//       <label><input type="checkbox" /> Co-ord Sets</label>
//     </>
//   )}

//   {categoryName.toLowerCase() === "kids" && (
//     <>
//       <label><input type="checkbox" /> Ethnic Wear</label>
//       <label><input type="checkbox" /> Western Wear</label>
//       <label><input type="checkbox" /> Kurta Pajama</label>
//       <label><input type="checkbox" /> Frocks</label>
//       <label><input type="checkbox" /> Gown Sets</label>
//     </>
//   )}

//   {categoryName.toLowerCase() === "unisex" && (
//     <>
//       <label><input type="checkbox" />Unisex Kurta Sets</label>
//       <label><input type="checkbox" />Couple Ethnic Sets</label>
//       <label><input type="checkbox" />Unisex Co-ord Sets"</label>
//       <label><input type="checkbox" />Unisex Jackets</label>
//       <label><input type="checkbox" />Indo-western Wear</label>
//       <label><input type="checkbox" />Sherwani Style Robes</label>
//       <label><input type="checkbox" />Special Co-ords</label>
//       <label><input type="checkbox" />Nehru Jackets</label>

//     </>
//   )}
// </FilterCategory>

//                     <FilterCategory title="Color">
//                         <label><input type="checkbox" /> Red</label>
//                         <label><input type="checkbox" /> Blue</label>
//                         <label><input type="checkbox" /> Gold</label>
//                         <label><input type="checkbox" /> Black</label>
//                         <label><input type="checkbox" /> Pink</label>
//                         <label><input type="checkbox" /> Violet</label>
//                         <label><input type="checkbox" /> Lavender</label>
//                         <label><input type="checkbox" /> Brown</label>
//                         <label><input type="checkbox" /> Yellow</label>
//                         <label><input type="checkbox" /> Orange</label>
//                         <label><input type="checkbox" /> White</label>
//                         <label><input type="checkbox" /> Beige</label>
//                         <label><input type="checkbox" /> Cream</label>
//                         <label><input type="checkbox" /> Grey</label>
//                         <label><input type="checkbox" /> Purple</label>
//                         <label><input type="checkbox" /> Peach</label>
//                         <label><input type="checkbox" /> Maroon</label>
//                         <label><input type="checkbox" /> Green</label>
//                         <label><input type="checkbox" /> Ivory</label>
//                     </FilterCategory>

//                     <FilterCategory title="Size">
//                         <label><input type="checkbox" /> S</label>
//                         <label><input type="checkbox" /> M</label>
//                         <label><input type="checkbox" /> L</label>
//                         <label><input type="checkbox" /> XL</label>
//                         <label><input type="checkbox" /> XXL</label>
//                         <label><input type="checkbox" /> Free</label>
//                     </FilterCategory>

//                     <FilterCategory title="Print & Patterns">
//                    <label><input type="checkbox" /> Print</label>
//                    <label><input type="checkbox" /> Floral </label>
//                    <label><input type="checkbox" /> Jaipuri</label>
//                     <label><input type="checkbox" /> Block Print</label>
//                     <label><input type="checkbox" /> Viscose Rayon </label>
//                   </FilterCategory>

//                  <FilterCategory title="Occasion">
//                     <label><input type="checkbox" /> Wedding</label>
//                  <label><input type="checkbox" /> Festive </label>                    <label><input type="checkbox" /> Haldi</label>
//                    <label><input type="checkbox" /> Mehendi</label>
//                    <label><input type="checkbox" /> Sangeet</label>
//                    <label><input type="checkbox" /> Reception</label>
//                    <label><input type="checkbox" /> Pooja </label>
//                      <label><input type="checkbox" /> Casual</label>
//                   </FilterCategory>

//                   <FilterCategory title="Embellishment">
//                     <label><input type="checkbox" /> Resham Work</label>
//                     <label><input type="checkbox" /> Sequins Work </label>                    <label><input type="checkbox" /> Cutdana</label>
//                    <label><input type="checkbox" /> Mirror Work</label>
//                    <label><input type="checkbox" /> Pearl Work </label>
//                     <label><input type="checkbox" /> Stone Work </label>
//                     <label><input type="checkbox" /> Thread Work </label>
//                     <label><input type="checkbox" /> Zari Work </label>
//                    <label><input type="checkbox" /> Leather Work </label>
//                   </FilterCategory>
//                 </aside>

//                 <div className="product-grid">
//                     {filteredProducts.map((product) => (
//                         <div key={product.id} className="product-card">
//                             <img
//                                 src={images[product.imageName] || ''}
//                                 alt={product.title}
//                                 className="product-img"
//                             />
//                             <h3>{product.title}</h3>
//                             <p>₹{product.price}</p>
//                         </div>
//                     ))}
//                     {filteredProducts.length === 0 && <p>No products found for {categoryName}</p>}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CategoryPage;


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../data/mockData';
import FilterCategory from '../ProductList/FilterCategory'; // Adjust if needed
import './CategoryPage.css';

const rawImages = import.meta.glob('/src/assets/CategoryImage/*.{jpg,jpeg,png}', { eager: true });
const images = Object.entries(rawImages).reduce((acc, [path, module]) => {
  const filename = path.split('/').pop();
  acc[filename] = module.default;
  return acc;
}, {});

const CategoryPage = () => {
  const { categoryName } = useParams();

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
          {filteredProducts.length === 0 && (
            <p>No products found for selected filters in {categoryName}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
