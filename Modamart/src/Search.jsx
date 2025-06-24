// import React from 'react'

// const Search = [
//     {id:1,name:"Ethnic Kurti",price:999,image:"https://via.placeholder.com/150"},
//     {id:2,name:"Men's Sherwani",price:1999,image:"https://via.placeholder.com/150"},
//     {id:3,name:'Footwear',price:499,image:'https://via.placeholder.150'},
//     {id:4,name:'Lehenga Choli',price:2999,image:'https://via.placeholder.150'},

// ];
// function ProductList({ searchTerm }) {
//   const filteredProducts = searchTerm.filter(product =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="product-list">
//       {filteredProducts.length > 0 ? (
//         filteredProducts.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))
//       ) : (
//         <p style={{ margin: '20px' }}>No products found.</p>
//       )}
//     </div>
//   );
// }

// export default Search;
import React from 'react'

const Search = () => {
  return (
    <div>
      <input type="text"placeholder="Search the Products"></input>
      <button>Search</button>
    </div>
  )
}

export default Search

  
