import weddingImg from "../assets/about-portfolio.JPG";
 
const skills = ["React", "JavaScript", "HTML/CSS", "UI Design", "Figma"];
const interests = ["Reading", "Painting", "Pottery"];
 
export default function About() {
  return (
    <div className="page about-page">
      <div className="about-hero">
        <img src={weddingImg} alt="Lauren" className="about-photo" />
        <div className="about-intro">
          <h2>About Me</h2>
          <p>
           Hi, I’m Lauren! I’m a Digital Media student at UCF specializing in 
           Web and Interactive Media. I’m passionate about UX/UI, visual design, 
           and creating digital experiences that are both engaging and user-friendly.
          </p>
        </div>
      </div>
 
      <div className="about-grid">
        <div className="about-card">
          <h3>Skills</h3>
          <ul className="tag-list">
            {skills.map((s) => <li key={s} className="tag">{s}</li>)}
          </ul>
        </div>
 
        <div className="about-card">
          <h3>Interests</h3>
          <ul className="tag-list">
            {interests.map((i) => <li key={i} className="tag">{i}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
