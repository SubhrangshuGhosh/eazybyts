import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Welcome</h2>

        <button
          className="btn guest-btn"
          onClick={() => navigate('/guest')}
        >
          Continue as Guest
        </button>

        <button
          className="btn user-btn"
          onClick={() => navigate('/user')}
        >
          Login as User
        </button>
      </div>
    </div>
  );
}
