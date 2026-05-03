export default function About() {
    return (
      <div className="page">
        <img src="src/assets/wedding.JPG" alt="about" style={{ width: "300px", height: "auto" }} />
        <h2>About Me</h2>
  
        <p>
          I’m a currently a students at the University of Central Florida persuing a Bachelors Degree in Digital Media.
        </p>
  
        <h3>Skills</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>UI Design</li>
        </ul>

        <h3>Interests</h3>
        <ul>
            <li>Reading</li>
            <li>Painting</li>
            <li>Pottery</li>
        </ul>
      </div>
    );
  }