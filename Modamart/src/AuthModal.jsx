import React, { useState } from 'react';
import './AuthFile.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>×</button>
        <div className="auth-tabs">
          <button
            className={!isSignup ? 'active' : ''}
            onClick={() => setIsSignup(false)}
          >
            Sign In
          </button>
          <button
            className={isSignup ? 'active' : ''}
            onClick={() => setIsSignup(true)}
          >
            Sign Up
          </button>
        </div>
        {isSignup ? (
          <form className="auth-form">
            <h2>Create Account</h2>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <form className="auth-form">
            <h2>Sign In</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;