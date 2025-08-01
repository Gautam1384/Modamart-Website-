import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthFile.css';

const ForgotPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!newPassword || !confirmPassword) {
            setError('Please fill both fields.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setSuccess(true);
        setTimeout(() => navigate('/'), 2000);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Reset Password</h2>
                {success ? (
                    <p style={{ color: 'green', fontWeight: 'bold' }}>
                        Password successfully updated!
                    </p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Update Password</button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;