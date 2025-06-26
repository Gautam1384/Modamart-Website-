
import React from 'react';
import {useState,useEffect}from 'react'
import './Navbar.css';

const Navbar = () =>{
  const sugg=["suits","sarees","lehengas","gown","kurtas","anarkali"]
const [index,setIndex]=useState(0)
useEffect(()=>{
  const time=setInterval(()=>{
    setIndex((prev)=>(prev+1)%sugg.length)
  },1000)

  return ()=>clearInterval(time)
},[])

  return (
    <header className="navbar-container">
      <h1 className="logo">Modamart</h1>

      <div className="search-box">
        <input type="text" placeholder={`Search for ${sugg[index]}...`} />
        <button><i className="fas fa-search"></i></button>
      </div>

      <nav className="anchor">
        <a className="Anchor" href="/">Home</a>
        <div className="dropdown">
          <a className="Anchor" href="/">Products</a>
          <div className="dropdown-content">
            <a href="/">Women</a>
            <a href="/">Men</a>
            <a href="/">Kids</a>
            <a href="/">Jewellery</a>
            <a href="/">Footwear</a>
          </div>
        </div>
        <a className="Anchor" href="/">Cart</a>
      </nav>
    </header>
  );
};

export default Navbar;











