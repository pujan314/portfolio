import React from "react";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <section className="hero">
        <h1>Hi, I'm Pujan Upreti</h1>
        <p>AI Enthusiast • Data Analyst • Web Developer</p>
        <button>View Projects</button>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I specialize in AI training, data analysis, research, and modern web
          development with clean UI/UX design.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="grid-3">
          <div className="project-card">
            <h3>NepNovel Platform</h3>
            <p>Literature platform with social features and novel uploads.</p>
          </div>
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>My personal portfolio built with React.</p>
          </div>
          <div className="project-card">
            <h3>AI Training Projects</h3>
            <p>Worked on AI model training, data annotation, and analysis.</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <button>Email</button>
        <button>GitHub</button>
        <button>LinkedIn</button>
      </section>

      <footer>
        © {new Date().getFullYear()} Pujan Upreti. All rights reserved.
      </footer>
    </div>
  );
}
