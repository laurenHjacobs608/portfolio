const projects = [
  {
    name: "Trip Link",
    desc: "A UX/UI design project for a travel planning app built for solo travelers. The link leads to the full analysis paper.",
    link: "https://docs.google.com/document/d/1mosBWH7v7V_SH4Kny5PTL-VeSxmmNCJ_02S-IZoVzW0/edit?usp=sharing",
    label: "Read Paper",
    tag: "UX / UI Design",
  },
  {
    name: "Quiz App",
    desc: "A fun interactive quiz game built in class — answer questions and see your score at the end.",
    link: "https://github.com/laurenHjacobs608/quiz-app",
    label: "View on GitHub",
    tag: "JavaScript",
  },
  {
    name: "Portfolio Website",
    desc: "This very site! Built with React, framer-motion, and a lot of care.",
    link: "https://github.com/laurenHjacobs608/portfolio",
    label: "View Source",
    tag: "React",
  },
];
 
export default function Projects() {
  return (
    <div className="page">
      <div className="section-header">
        <h2>Projects</h2>
        <p>A selection of things I've built and designed.</p>
      </div>
 
      <div className="grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <span className="card-tag">{p.tag}</span>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="card-link">
              {p.label} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
