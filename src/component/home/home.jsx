import { motion } from "framer-motion";
import "./home.css";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaInstagram,
  FaGithub
} from "react-icons/fa";

export function Home() {
  return (
    <section className="hero-section">

      {/* BACKGROUND LAYER */}
      <div className="hero-bg" />

      {/* FLOATING BLOBS */}
      <div className="blob blob1" />
      <div className="blob blob2" />

      <div className="hero-container">

        {/* LEFT TEXT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3>hello, i'm</h3>
          <h1>
            Abiola <span>Boluwatife</span>
          </h1>

          <h2>Full-Stack Developer</h2>

          <p>
            I build scalable web applications with modern frontend interfaces
            and powerful backend systems using Node.js and React.
          </p>

          <div className="hero-buttons">
            <Link to='/project'>
            <button>View Projects</button>
            </Link>
            <Link to='/about'>
            <button className="outline">About Me</button>
            </Link>
</div>

          <div className="social-links">
  <a
    href="https://web.facebook.com/profile.php?id=61590863335987"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-btn"
  >
    <FaFacebook />
  </a>

  <a
    href="https://linkedin.com/in/abiola-boluwatife-9bb639405"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-btn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://tiktok.com/@boluwatife.abiola6"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-btn"
  >
    <FaTiktok />
  </a>

  <a
    href="https://instagram.com/boluwatife_tech"
    target="_blank"
    rel="noopener noreferrer"
    className="icon-btn"
  >
    <FaInstagram />
  </a>


  <a
  href="https://github.com/blaqtech-dev"
  target="_blank"
  rel="noopener noreferrer"
  className="icon-btn"
>
  <FaGithub />
</a>
</div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="./images/Boluwatife.png" alt="profile" />
        </motion.div>

      </div>
    </section>
  );
}