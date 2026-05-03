const projects = [
    {
      name: "Trip Link",
      desc: "Travel planning app for solo travelers. We only created the UX/UI design for this project but the link is to the analysis paper.",
      link: "https://docs.google.com/document/d/1mosBWH7v7V_SH4Kny5PTL-VeSxmmNCJ_02S-IZoVzW0/edit?usp=sharing"
    },
    {
      name: "Quiz App",
      desc: "Just a fun little project we had in class to make and app with fun questions and get you score at the end.",
      link: "https://github.com/laurenHjacobs608/quiz-app"
    },
    {
      name: "Portfolio Website",
      desc: "This very site!",
      link: "https://github.com/laurenHjacobs608/portfolio"
    }
  ];
  
  export default function Projects() {
    return (
      <div className="page">
        <h2>Projects</h2>
  
        <div className="grid">
          {projects.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <a href={p.link}>View</a>
            </div>
          ))}
        </div>
      </div>
    );
  }