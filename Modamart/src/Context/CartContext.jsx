import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Initialize cart from localStorage
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem('cartItems');
        return stored ? JSON.parse(stored) : [];
    });

    // Persist cart to localStorage on change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);