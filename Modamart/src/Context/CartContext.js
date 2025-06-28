// // src/context/CartContext.js
// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);



// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter(item => item.id !== id));
    };

    return React.createElement(
        CartContext.Provider,
        { value: { cartItems, addToCart, removeFromCart } },
        children
    );
};

export const useCart = () => useContext(CartContext);