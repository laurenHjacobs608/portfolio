import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="page home">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Hey, I’m Lauren!</h1>
        <p>Welcome to my portfolio built with React!</p>
        <img src="src/assets/portfolio-profile.JPG" alt="Profile" style={{ width: "300px", height: "auto" }} />
      </motion.div>
    </div>
  );
}