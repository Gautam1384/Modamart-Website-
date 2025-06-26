
// import React from 'react';
// import {useState,useEffect}from 'react'
// import './Navbar.css';

// const Navbar = () =>{
//   const sugg=["suits","sarees","lehengas","gown","kurtas","anarkali"]
// const [index,setIndex]=useState(0)
// useEffect(()=>{
//   const time=setInterval(()=>{
//     setIndex((prev)=>(prev+1)%sugg.length)
//   },1000)

//   return ()=>clearInterval(time)
// },[])

//   return (
//     <header className="navbar-container">
//       <h1 className="logo">Modamart</h1>

//       <div className="search-box">
//         <input type="text" placeholder={`Search for ${sugg[index]}...`} />
//         <button><i className="fas fa-search"></i></button>
//       </div>

//       <nav className="anchor">
//         <a className="Anchor" href="/">Home</a>
//         <div className="dropdown">
//           <a className="Anchor" href="/">Products</a>
//           <div className="dropdown-content">
//             <a href="/">Women</a>
//             <a href="/">Men</a>
//             <a href="/">Kids</a>
//             <a href="/">Jewellery</a>
//             <a href="/">Footwear</a>
//           </div>
//         </div>
//         <a className="Anchor" href="/">Cart</a>
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
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const time = setInterval(() => {
      setIndex((prev) => (prev + 1) % sugg.length);
    }, 1500);
    return () => clearInterval(time);
  }, []);

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
        <input type="text" placeholder={`Search for ${sugg[index]}...`} />
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















