import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User credentials:', { email, password });
    navigate('/dashboard');  // can redirect to a real dashboard later
  };

  return (
    <div className="user-page">
      <form className="user-box" onSubmit={handleSubmit}>
        <h2>User Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
