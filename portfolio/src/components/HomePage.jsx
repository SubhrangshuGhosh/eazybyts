import React from 'react';
import './HomePage.css';

export default function HomePage({ name, bio, projects, skills, blogs }) {
  return (
    <div className="home-page">
      {/* Name */}
      <h1 className="home-page__name">{name}</h1>

      {/* Bio */}
      <section className="home-page__section home-page__bio">
        <h2 className="home-page__section-title"></h2>
        <p className="home-page__bio-text">
          <a href={bio} target="_blank" rel="noopener noreferrer">{bio}</a>
        </p>
      </section>

      {/* Projects */}
      <section className="home-page__section home-page__projects projects">
        <h2 className="home-page__section-title"></h2>
        <div className="home-page__projects-list">
          {projects.map(project => (
            <div key={project.id} className="home-page__project-item">
              {project.imageUrl && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.imageUrl} alt={project.name} className="home-page__project-image" />
                </a>
              )}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="home-page__project-name">
                <strong>{project.name}</strong>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="home-page__section home-page__skills">
        <h2 className="home-page__section-title"></h2>
        <ul className="home-page__skill-list">
  {skills.map(skill => (
    <li
      key={skill.id}
      className="home-page__skill-item"
      data-skill-level={skill.level}
    >
      {skill.name}
    </li>
  ))}
</ul>
      </section>

      {/* Blogs */}
      <section className="home-page__section home-page__blogs">
        <h2 className="home-page__section-title"></h2>
        <div className="home-page__blogs-list">
          {blogs.map(blog => (
            <div key={blog.id} className="home-page__blog-item">
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="home-page__blog-title">
                <strong>{blog.title}</strong>
              </a>
              <p className="home-page__blog-content">{blog.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-page__section home-page__contact">
  <h2 className="home-page__section-title">Contact</h2>
  <form className="home-page__contact-form" onSubmit={(e) => e.preventDefault()}>
    <input type="text" placeholder="Your Name" className="home-page__contact-input" required />
    <input type="email" placeholder="Your Email" className="home-page__contact-input" required />
    <textarea placeholder="Your Message" className="home-page__contact-textarea" rows="5" required></textarea>
    <button type="submit" className="home-page__contact-button">Send Message</button>
  </form>
</section>

    </div>
  );
}
