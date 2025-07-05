import React, { useState, useEffect } from 'react';
import './AuthFile.css';

const AuthModal = ({ isOpen, onClose, mode = 'signin' }) => {
  const [isSignup, setIsSignup] = useState(mode === 'signup');

  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
  const [showModal, setShowModal] = useState(isOpen);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setFadeOut(false);
      setIsSignup(mode === 'signup');
    }
  }, [isOpen, mode])

  const handleClose = () => {
    setFadeOut(true)
    setTimeout(() => {
      setShowModal(false)
      onClose()
    }, 300)
  }
  if (!showModal) return null;

  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className={`auth-modal ${fadeOut ? 'fade-out' : ''}`} onClick={(e) => e.stopPropagation()}>

      <button className="auth-close" onClick={handleClose} aria-label="Close">&times;</button>
    
      <div className="auth-modal-split">
        <div className="auth-modal-left">
          <img src="/img1.jpg" alt="No Image" className='auth-image' />
        </div>
        <div className="auth-modal-right">
          <h1>Modamart</h1>
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
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={signUpData.name}
                onChange={handleSignUpChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signUpData.password}
                onChange={(e) => {
                  setSignUpData({
                    ...signUpData,
                    password: e.target.value
                  })
                }}
                required

              />


              <button type="submit">Sign Up</button>
            </form>
          ) : (
            <form className="auth-form">
              <h2>Sign In</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signInData.email}
                onChange={handleSignInChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signInData.password}
                onChange={(e) => {
                  setSignInData({
                    ...signInData,
                    password: e.target.value
                  })
                }}
                required

              />
              <button type="submit">Sign In</button>
            </form>
          )}
        </div>
      </div>
    </div>
    </div >
  );
};

export default AuthModal;