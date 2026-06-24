import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profileImg from "../assets/portfolio-profile.JPG";
 
export default function Home() {
  return (
    <div className="page home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-avatar-wrap">
          <img src={profileImg} alt="Lauren" className="hero-avatar" />
        </div>
        <h1>Hey, I'm Lauren!</h1>
        <p className="hero-sub">
          Digital Media student at UCF — designing thoughtful experiences, one project at a time.
        </p>
        <div className="hero-ctas">
          <Link to="/projects" className="btn-primary">See My Work</Link>
          <Link to="/contact" className="btn-secondary">Get In Touch</Link>
        </div>
      </motion.div>
    </div>
  );
}
