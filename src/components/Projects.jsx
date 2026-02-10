import React from "react";

const projects = [
  {
    title: "Mama Dyeing",
    desc: "Premium fabric dyeing services website featuring services, gallery, and contact info.",
    img: "/mama-dyeing.png",
    live: "https://www.mamadyeing.com.np/",
    repo: "https://github.com/pujan314/mama-dyeing",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React showcasing projects and skills.",
    img: "/portfolio.png",
    live: "https://pujan314.github.io/pujanupreti.github.io/",
    repo: "https://github.com/pujan314/portfolio",
  },
  {
    title: "AI Training Projects",
    desc: "Worked on data annotation, AI model training, and research-based analysis tasks.",
    img: "/ai.png",
    live: "https://github.com/pujan314",
    repo: "https://github.com/pujan314",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="cards">
        {projects.map((p, i) => (
          <div key={i} className="card project-card">
            <img
              src={p.img}
              alt={`${p.title} Screenshot`}
              className="project-img"
            />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-links">
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn primary">
                Live Site
              </a>
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn secondary">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
