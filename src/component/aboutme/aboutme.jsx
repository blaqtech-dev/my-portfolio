import "./aboutme.css";
import {Link} from 'react-router-dom'
import { motion } from "framer-motion";
import { fadeIn,fadeUp,staggerContainer } from "../animation/scrollanimation";

export function AboutMe() {
  return (
    <section className="about-section margin">

      <h1 className="section-title">
        About Me
      </h1>

      <motion.div 
      initial="hidden"
  whileInView="show"
  variants={staggerContainer}
  viewport={{ once: true }}
      className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left">

          <div className="image-card">
            <img
              src="./images/Boluwatife.png"
              alt="profile"
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">

          <h2 className="name">
            I'm Abiola Boluwatife
          </h2>

          <h3 className="role">
            Full-Stack Developer (Frontend + Backend)
          </h3>

          <p className="text">
            I specialize in building modern, responsive
            and scalable web applications using React on
            the frontend and Node.js on the backend.
          </p>

          <p className="text">
            I enjoy turning ideas into real-world
            applications with clean architecture,
            efficient APIs, and strong database design.
            My focus is on performance, usability,
            and real user experience.
          </p>

          {/* SKILLS HIGHLIGHT */}
          <div className="skills-tags">

            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>REST API</span>
            <span>Supabase</span>
            <span>MongoDB</span>
            <span>Firebase</span>
            <span>JWT Auth</span>

          </div>

          {/* CTA */}
             <Link to='/about'>
          <button className="about-btn">
         
          see more
        
          </button>
            </Link>

        </div>

      </motion.div>

    </section>
  );
}