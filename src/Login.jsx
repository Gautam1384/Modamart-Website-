import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './AuthFile.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('modamartUser', email);
        navigate('/home');
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <FaUserCircle className="auth-icon" />
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                    <button
                        type="button"
                        style={{
                            marginTop: '1rem',
                            background: '#6366f1',
                            color: '#fff',
                            borderRadius: '10px',
                            padding: '0.9rem 0',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            localStorage.setItem('modamartUser', 'guest');
                            navigate('/home');
                        }}
                    >
                        Continue as Guest
                    </button>
                </form>

                <p>
                    <Link to="/forgot-password" style={{ color: '#6366f1', fontWeight: 600 }}>
                        Forgot Password?
                    </Link>
                </p>
                <p>
                    Don't have an account?{' '}
                    <Link to="/signup" style={{ color: '#a855f7', fontWeight: 600 }}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;