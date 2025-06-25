import React from 'react'
// import './Navbar.jsx'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
     <h1>Modamart</h1>
      <header className="header">
     <nav className="anchor">
        <a  className="Anchor"href="/">Home</a>
        <a className="Anchor"href="/">Products</a>
        <a className="Anchor"href="/">Cart</a>
     </nav>
     </header>
    </div>
  )
}
export default Navbar

