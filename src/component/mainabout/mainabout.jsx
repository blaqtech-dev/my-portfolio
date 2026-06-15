import "./mainabout.css";

import { motion } from "framer-motion";
import { fadeIn,fadeUp,staggerContainer } from "../animation/scrollanimation";

export function MainAbout() {
  return (
    <section style={{marginTop:'100px'}} className="about-section margin">

      <h1 className="section-title">About Me</h1>

      <div className="about-container">

        {/* IMAGE SIDE */}
        <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
        className="about-left">

          <div className="image-wrapper">
            <img src="./images/Boluwatife.png" alt="profile" />
          </div>

        </motion.div>

        {/* TEXT SIDE */}
        <motion.div 
         variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        className="about-right">

          <h2>
            I’m Abiola Boluwatife
            <span>Full-Stack Developer</span>
          </h2>

          <p>
            I am a passionate <b>Full-Stack Developer</b> who builds
            modern, scalable, and user-focused web applications.
            I specialize in turning ideas into real digital products
            using clean architecture and efficient code.
          </p>

          <p>
            On the frontend, I create responsive and interactive UI
            experiences using React and modern CSS systems. On the backend,
            I work with Node.js, Express, and databases to build secure
            and scalable APIs.
          </p>

          <p>
            I enjoy solving real-world problems, building full-stack systems
            like chat applications, authentication systems, dashboards, and
            API-driven platforms. I am constantly improving my skills and
            staying updated with modern development practices.
          </p>

          {/* HIGHLIGHTS */}
          <div className="about-highlights">

            <div className="highlight-card">
              <h4>Frontend</h4>
              <p>React • UI Systems • Responsive Design</p>
            </div>

            <div className="highlight-card">
              <h4>Backend</h4>
              <p>Node.js • Express • REST APIs</p>
            </div>

            <div className="highlight-card">
              <h4>Database</h4>
              <p>MongoDB • Firebase • Supabase</p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}