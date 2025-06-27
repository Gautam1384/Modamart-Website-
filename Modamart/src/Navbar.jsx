





// import React, { useState, useEffect } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   const sugg = ["suits", "sarees", "lehengas", "gown", "kurtas", "anarkali"];
//   const [index, setIndex] = useState(0);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const time = setInterval(() => {
//       setIndex((prev) => (prev + 1) % sugg.length);
//     }, 1500);
//     return () => clearInterval(time);
//   }, []);

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
//         <input type="text" placeholder={`Search for ${sugg[index]}...`} />
//         <button><i className="fas fa-search"></i></button>
//       </div>

//       <nav className="anchor">
//         <a className="Anchor" href="/">Home</a>

//         <div className="dropdown" onClick={toggleDropdown}>
//           <a className="Anchor" href="#" onClick={(e) => e.preventDefault()}>Products <i className="fas fa-angle-down"></i></a>
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
//             </div>
//           )}
//         </div>

//         <a className="Anchor" href="/"><i className="fas fa-shopping-cart"></i> Cart</a>
//         <a className="Anchor" href="/"><i className="fas fa-user-circle"></i> Account</a>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const sugg = ["suits", "sarees", "lehengas", "gown", "kurtas", "anarkali"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

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

      <nav className="anchor">
        <a className="Anchor" href="/">Home</a>

        <div className="dropdown" onClick={toggleDropdown}>
          <a className="Anchor" href="#" onClick={(e) => e.preventDefault()}>Products <i className="fas fa-angle-down"></i></a>
          {showDropdown && (
            <div className="dropdown-content mega" onMouseLeave={closeDropdown}>
              <ul>
                <li><a href="/">Sarees</a></li>
                <li><a href="/">Lehengas</a></li>
                <li><a href="/">Gowns</a></li>
                <li><a href="/">Anarkalis</a></li>
                {/* <ul className="nav-links">
                  <li>WOMEN</li>
                  <li>MEN</li>
                  <li>KIDS</li>
                  <li>UNISEX</li>
                  <li className="store-link"> */}
              
              </ul>
              <ul>
                <li><a href="/">Kurtas</a></li>
                <li><a href="/">Jewellery</a></li>
                <li><a href="/">Footwear</a></li>
              </ul>
            </div>
          )}
        </div>

        <a className="Anchor" href="/"><i className="fas fa-shopping-cart"></i> Cart</a>
        <a className="Anchor" href="/"><i className="fas fa-user-circle"></i> Account</a>
      </nav>
    </header>
  );
};

export default Navbar;















