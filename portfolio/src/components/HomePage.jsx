import React from 'react';

export default function HomePage({ name, bio, projects, skills, blogs }) {
  return (
    <div className="home-page" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {/* Name */}
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>{name}</h1>

      {/* Bio */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Bio</h2>
        <p>
          <a href={bio} target="_blank" rel="noopener noreferrer">
            {bio}
          </a>
        </p>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Projects</h2>
        {projects.map(project => (
          <div key={project.id} style={{ marginBottom: '1rem' }}>
            {project.imageUrl && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.name} style={{ width: '200px', height: 'auto' }} />
              </a>
            )}
            <div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <strong>{project.name}</strong>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section style={{ marginBottom: '2rem' }}>
        <h2>Skills</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill.id}>
              {skill.name} — {skill.level}
            </li>
          ))}
        </ul>
      </section>

      {/* Blogs */}
      <section>
        <h2>Blogs</h2>
        {blogs.map(blog => (
          <div key={blog.id} style={{ marginBottom: '1rem' }}>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <strong>{blog.title}</strong>
            </a>
            <p>{blog.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
