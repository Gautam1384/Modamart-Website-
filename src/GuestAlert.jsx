import React from 'react';

const GuestAlert = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
    }}>
      <div style={{
        background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', textAlign: 'center'
      }}>
        <h2 style={{ color: '#e91e63' }}>Please Sign Up</h2>
        <p>Sign up to perform this action!</p>
        <button onClick={onClose} style={{
          marginTop: '1rem', padding: '0.5rem 1.5rem', background: '#e91e63', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'
        }}>Close</button>
      </div>
    </div>
  );
};

export default GuestAlert;