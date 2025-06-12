import React from 'react';
import Navbar from './Navbar';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="page dashboard">
      <Navbar />
      <div className="main-content">
        <h1>Welcome to Dashboard</h1>
      </div>
    </div>
  );
}
