import React, { useState, useRef } from 'react';
import Navbar from './Navbar';
import './EditPage.css';

export default function EditPage({
  name, setName,
  bio, setBio,
  projects, setProjects,
  skills, setSkills,
  blogs, setBlogs
}) {
  const [draftBio, setDraftBio] = useState(bio);

  // Project form state
  const [projName, setProjName] = useState('');
  const [projLink, setProjLink] = useState('');
  const [projImage, setProjImage] = useState(null);
  const fileInputRef = useRef(null);

  // Modal states
  const [isProjModal, setIsProjModal] = useState(false);
  const [currentProj, setCurrentProj] = useState(null);
  const [isBlogModal, setIsBlogModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  // Skill and Blog input state
  const [skillName, setSkillName] = useState('');
  const [skillLevel, setSkillLevel] = useState('1');
  const [blogTitle, setBlogTitle] = useState('');
  const [blogLink, setBlogLink] = useState('');
  const [blogContent, setBlogContent] = useState('');

  // Handlers
  const handleSaveBio = () => setBio(draftBio);

  const handleAddProject = e => {
    e.preventDefault();
    setProjects(prev => [...prev, {
      id: Date.now(),
      name: projName,
      link: projLink,
      imageUrl: projImage ? URL.createObjectURL(projImage) : null
    }]);
    setProjName(''); setProjLink(''); setProjImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };
  const handleDeleteProject = id => setProjects(prev => prev.filter(p => p.id !== id));
  const openProjModal = p => { setCurrentProj({ ...p }); setIsProjModal(true); };
  const handleSaveProjectEdit = () => {
    setProjects(prev => prev.map(p => p.id === currentProj.id ? currentProj : p));
    setIsProjModal(false);
    setCurrentProj(null);
  };

  const handleAddSkill = e => {
    e.preventDefault();
    setSkills(prev => [...prev, { id: Date.now(), name: skillName, level: skillLevel }]);
    setSkillName(''); setSkillLevel('1');
  };
  const handleDeleteSkill = id => setSkills(prev => prev.filter(s => s.id !== id));

  const handleAddBlog = e => {
    e.preventDefault();
    setBlogs(prev => [...prev, { id: Date.now(), title: blogTitle, link: blogLink, content: blogContent }]);
    setBlogTitle(''); setBlogLink(''); setBlogContent('');
  };
  const handleDeleteBlog = id => setBlogs(prev => prev.filter(b => b.id !== id));
  const openBlogModal = b => { setCurrentBlog({ ...b }); setIsBlogModal(true); };
  const handleSaveBlogEdit = () => {
    setBlogs(prev => prev.map(b => b.id === currentBlog.id ? currentBlog : b));
    setIsBlogModal(false);
    setCurrentBlog(null);
  };

  return (
    <div className="edit-page">
      <Navbar />

      <div className="form-container">

        {/* Name */}
        <div className="section-box">
          <h2>Name</h2>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
        </div>

        {/* Bio */}
        <div className="section-box">
          <h2>Bio</h2>
          <textarea value={draftBio} onChange={e => setDraftBio(e.target.value)} placeholder="Write bio..." />
          <button className="btn save-btn" onClick={handleSaveBio}>Save Bio</button>
        </div>

        {/* Projects */}
        <div className="section-box">
          <h2>Projects</h2>
          <form className="project-form" onSubmit={handleAddProject}>
            <input value={projName} onChange={e => setProjName(e.target.value)} placeholder="Project Name" required />
            <input value={projLink} onChange={e => setProjLink(e.target.value)} placeholder="Project URL" required type="url" />
            <input ref={fileInputRef} type="file" accept="image/*" onChange={e => setProjImage(e.target.files?.[0] || null)} />
            <button type="submit" className="btn save-btn">Add Project</button>
          </form>
          {projects.map(p => (
            <div key={p.id} className="project-item">
              {p.imageUrl && <img className="project-thumb" src={p.imageUrl} alt={p.name} />}
              <div className="project-info">
                <strong>{p.name}</strong>
                <a href={p.link} target="_blank" rel="noopener noreferrer">{p.link}</a>
              </div>
              <button className="small-btn" onClick={() => openProjModal(p)}>Edit</button>
              <button className="small-btn delete" onClick={() => handleDeleteProject(p.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="section-box">
          <h2>Skills</h2>
          <form className="skill-form" onSubmit={handleAddSkill}>
            <input value={skillName} onChange={e => setSkillName(e.target.value)} placeholder="Skill name" required />
            <select value={skillLevel} onChange={e => setSkillLevel(e.target.value)}>
              {Array.from({ length: 19 }, (_, i) => ((i + 2) / 2)).map(level =>
                <option key={level} value={level}>{level}</option>
              )}
            </select>
            <button type="submit" className="btn save-btn">Add Skill</button>
          </form>
          {skills.map(s => (
            <div key={s.id} className="skill-item">
              {s.name} — {s.level}
              <button className="small-btn delete" onClick={() => handleDeleteSkill(s.id)}>Delete</button>
            </div>
          ))}
        </div>

        {/* Blogs */}
        <div className="section-box">
          <h2>Blogs</h2>
          <form className="blog-form" onSubmit={handleAddBlog}>
            <input value={blogTitle} onChange={e => setBlogTitle(e.target.value)} placeholder="Blog Title" required />
            <input value={blogLink} onChange={e => setBlogLink(e.target.value)} placeholder="Link" required type="url" />
            <textarea value={blogContent} onChange={e => setBlogContent(e.target.value)} placeholder="Content" required />
            <button type="submit" className="btn save-btn">Add Blog</button>
          </form>
          {blogs.map(b => (
            <div key={b.id} className="blog-item">
              <strong>{b.title}</strong>
              <a href={b.link} target="_blank" rel="noopener noreferrer">{b.link}</a>
              <p>{b.content}</p>
              <button className="small-btn" onClick={() => openBlogModal(b)}>Edit</button>
              <button className="small-btn delete" onClick={() => handleDeleteBlog(b.id)}>Delete</button>
            </div>
          ))}
        </div>

      </div>

      {/* Modals */}
      {isProjModal && currentProj && (
        <div className="modal-overlay" onClick={() => setIsProjModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Edit Project</h3>
            <input value={currentProj.name} onChange={e => setCurrentProj(prev => ({ ...prev, name: e.target.value }))} />
            <input type="url" value={currentProj.link} onChange={e => setCurrentProj(prev => ({ ...prev, link: e.target.value }))} />
            <input type="file" accept="image/*" onChange={e => {
              const f = e.target.files?.[0]; 
              if (f) setCurrentProj(prev => ({ ...prev, imageUrl: URL.createObjectURL(f) }));
            }} />
            {currentProj.imageUrl && <img className="project-thumb" src={currentProj.imageUrl} alt="" />}
            <div className="modal-actions">
              <button className="btn save-btn" onClick={handleSaveProjectEdit}>Save</button>
              <button className="small-btn delete" onClick={() => setIsProjModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isBlogModal && currentBlog && (
        <div className="modal-overlay" onClick={() => setIsBlogModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Edit Blog</h3>
            <input value={currentBlog.title} onChange={e => setCurrentBlog(prev => ({ ...prev, title: e.target.value }))} />
            <input type="url" value={currentBlog.link} onChange={e => setCurrentBlog(prev => ({ ...prev, link: e.target.value }))} />
            <textarea value={currentBlog.content} onChange={e => setCurrentBlog(prev => ({ ...prev, content: e.target.value }))} />
            <div className="modal-actions">
              <button className="btn save-btn" onClick={handleSaveBlogEdit}>Save</button>
              <button className="small-btn delete" onClick={() => setIsBlogModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
