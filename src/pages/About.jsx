import weddingImg from "../assets/wedding.JPG";
 
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
            I'm a student at the University of Central Florida pursuing a
            Bachelor's Degree in Digital Media. I love blending creativity
            with code to build things people enjoy using.
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
