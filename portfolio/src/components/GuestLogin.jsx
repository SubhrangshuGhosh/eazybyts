import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // add this
import './GuestLogin.css';

export default function GuestLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guest credentials:', { email, password });
    navigate('/under-dev');  // navigate on form submit
  };

  return (
    <div className="guest-page">
      <form className="guest-box" onSubmit={handleSubmit}>
        <h2>Guest Login</h2>
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
        <button type="submit" className="btn login-btn">Login</button>
      </form>
    </div>
  );
}
