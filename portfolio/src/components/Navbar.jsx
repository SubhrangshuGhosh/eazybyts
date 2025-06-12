import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Navbar.css';

export default function Navbar() {
  const { darkMode, toggleMode } = useTheme();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/edit" className="nav-link">Edit</Link>
      </div>
      <button className="mode-toggle" onClick={toggleMode}>
        {darkMode ? '🌞 Day Mode' : '🌙 Night Mode'}
      </button>
    </nav>
  );
}
