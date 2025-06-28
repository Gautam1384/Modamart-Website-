







// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { FaUser, FaHeart, FaShoppingCart, FaVideo, FaWhatsapp,FaBars, FaStore } from 'react-icons/fa';

// const Navbar = () => {
//   const sugg = ["suits", "sarees", "lehengas", "gown", "kurtas", "anarkali"];
//   const [index, setIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [placeholder, setPlaceholder] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);
//   const[menuOpen, setMenuOpen] = useState(false);


//   useEffect(() => {
//     const currentWord = sugg[index];

//     if (charIndex <= currentWord.length) {
//       const typing = setTimeout(() => {
//         setPlaceholder(currentWord.slice(0, charIndex));
//         setCharIndex((prev) => prev + 1);
//       }, 150); 
//       return () => clearTimeout(typing);
//     } else {
//       const pause = setTimeout(() => {
//         setCharIndex(0);
//         setIndex((prev) => (prev + 1) % sugg.length);
//       }, 1000);
//       return () => clearTimeout(pause);
//     }
//   }, [charIndex, index]);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const closeDropdown = () => {
//     setShowDropdown(false);
//   };

//   return (

//     <header className="navbar-container">
//       <h1 className="logo">Modamart</h1>

//       <div className="search-box">
//         <input type="text" placeholder={`Search for ${placeholder}...`} />
//         <button><i className="fas fa-search"></i></button>
//       </div>
//       {/* Added by Karan */}
//       <button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}><FaBars/></button>


//       <nav className={`anchor ${menuOpen ? 'open' : ''}`}>
//         {/* <a className="Anchor" href="/">Home</a> */}
//           <div className="navbar-icons">
//          <FaWhatsapp className = "nav-icon" />
//           <FaUser className="nav-icon" />
//           <FaHeart className="nav-icon" />
//           <FaShoppingCart className="nav-icon" />
//             <FaVideo className="nav-icon" />
//         </div>


//         <div className="dropdown" onClick={toggleDropdown}>
//           <a className="Anchor" href="#" onClick={(e) => e.preventDefault()}></a>
//           {/* Products <i className="fas fa-angle-down"></i> */}
//           {showDropdown && (
//             <div className="dropdown-content mega" onMouseLeave={closeDropdown}>
//               <ul>
//                 <li><a href="/">Sarees</a></li>
//                 <li><a href="/">Lehengas</a></li>
//                 <li><a href="/">Gowns</a></li>
//                 <li><a href="/">Anarkalis</a></li>
//               </ul>
//               <ul>
//                 <li><a href="/">Kurtas</a></li>
//                 <li><a href="/">Jewellery</a></li>
//                 <li><a href="/">Footwear</a></li>
//               </ul>
//               <li>WOMEN</li>

//             </div>
//           )}
//         </div>

//         {/* <a className="Anchor" href="/"><i className="fas fa-shopping-cart"></i> Cart</a> */}
//         {/* <a className="Anchor" href="/"><i className="fas fa-user-circle"></i> Account</a> */}

//       </nav>
//     </header>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaUser, FaHeart, FaShoppingCart, FaVideo, FaWhatsapp, FaBars } from 'react-icons/fa';
import { useCart } from './context/CartContext'; // Make sure path is correct

const Navbar = () => {
  const sugg = ["suits", "sarees", "lehengas", "gown", "kurtas", "anarkali"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useCart(); // Access cart state

  useEffect(() => {
    const currentWord = sugg[index];
    if (charIndex <= currentWord.length) {
      const typing = setTimeout(() => {
        setPlaceholder(currentWord.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(typing);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % sugg.length);
      }, 1000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, index]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <header className="navbar-container">
      <h1 className="logo">Modamart</h1>

      <div className="search-box">
        <input type="text" placeholder={`Search for ${placeholder}...`} />
        <button><i className="fas fa-search"></i></button>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>

      <nav className={`anchor ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-icons">
        <FaWhatsapp className="nav-icon" />
        <FaUser className="nav-icon" />
        <FaHeart className="nav-icon" />

        <div className="cart-icon-wrapper">
          <FaShoppingCart className="nav-icon" />
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>

        <FaVideo className="nav-icon" />
      </div>

      <div className="dropdown" onClick={toggleDropdown}>
        <a className="Anchor" href="#" onClick={(e) => e.preventDefault()}></a>
        {showDropdown && (
          <div className="dropdown-content mega" onMouseLeave={closeDropdown}>
            <ul>
              <li><a href="/">Sarees</a></li>
              <li><a href="/">Lehengas</a></li>
              <li><a href="/">Gowns</a></li>
              <li><a href="/">Anarkalis</a></li>
            </ul>
            <ul>
              <li><a href="/">Kurtas</a></li>
              <li><a href="/">Jewellery</a></li>
              <li><a href="/">Footwear</a></li>
            </ul>
            <li>WOMEN</li>
          </div>
        )}
      </div>
    </nav>
    </header >
  );
};

export default Navbar;
















