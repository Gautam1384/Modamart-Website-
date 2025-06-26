// import React from 'react'
// // import './Navbar.jsx'
// import './Navbar.css'

// const Navbar = () => {
//   return (
//     <div>
//      <h1>Modamart</h1>
//       <header className="header">
//      <nav className="anchor">
//         <a  className="Anchor"href="/">Home</a>
//         <a className="Anchor"href="/">Products</a>
//         <a className="Anchor"href="/">Cart</a>
//      </nav>
//      </header>
//     </div>
//   )
// }
// export default Navbar


// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       <h1 className="logo">Modamart</h1>
      
//       <div className="search-box">
//         <input type="text" placeholder="Search the Products" />
//         <button>Search</button>
//       </div>
      
//       <nav className="anchor">
//         <a className="Anchor" href="/">Home</a>
//         <a className="Anchor" href="/">Products</a>
//         <a className="Anchor" href="/">Cart</a>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <h1 className="logo">Modamart</h1>

      <div className="search-box">
        <input type="text" placeholder="Search the Products..." />
        <button><i className="fas fa-search"></i></button>
      </div>

      <nav className="anchor">
        <a className="Anchor" href="/">Home</a>
        <div className="dropdown">
          <a className="Anchor" href="/">Products</a>
          <div className="dropdown-content">
            <a href="/">Women</a>
            <a href="/">Men</a>
            <a href="/">Footwear</a>
          </div>
        </div>
        <a className="Anchor" href="/">Cart</a>
      </nav>
    </header>
  );
};

export default Navbar;

