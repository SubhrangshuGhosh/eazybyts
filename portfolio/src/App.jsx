// App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import GuestLogin from './components/GuestLogin';
import UserLogin from './components/UserLogin';
import UnderDevelopment from './components/UnderDevelopment';
import Dashboard from './components/Dashboard';
import EditPage from './components/EditPage';
import HomePage from './components/HomePage';

export default function App() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [blogs, setBlogs] = useState([]);

  return (
    <Routes>
      {/* public pages */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/guest" element={<GuestLogin />} />
      <Route path="/user" element={<UserLogin />} />
      <Route path="/under-dev" element={<UnderDevelopment />} />

      {/* main pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/edit"
        element={
          <EditPage
            name={name} setName={setName}
            bio={bio} setBio={setBio}
            projects={projects} setProjects={setProjects}
            skills={skills} setSkills={setSkills}
            blogs={blogs} setBlogs={setBlogs}
          />
        }
      />
      <Route
        path="/home"
        element={
          <HomePage
            name={name}
            bio={bio}
            projects={projects}
            skills={skills}
            blogs={blogs}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
