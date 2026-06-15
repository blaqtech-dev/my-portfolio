import { projectData } from "../miniprojectdata";
import "./mainproject.css";
import { motion } from "framer-motion";
import { fadeIn,fadeUp,staggerContainer } from "../animation/scrollanimation";

export function MainProject() {
  return (
    <section className="project-section margin">

      <h1 className="section-title">
        Featured Projects
      </h1>

      <motion.div 
      className="project-grid"
      variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
      >

        {projectData.map(
          ({
            images,
            id,
            word,
            link,
            title,
            tech,
            github,
            type
          }) => (
            <div
              className="project-card"
              key={id}
            >

              {/* IMAGE */}
              <div className="project-image">
                <img src={images} alt={title} />

                <div className="overlay" />
              </div>

              {/* CONTENT */}
              <div className="project-content">

                <span className="project-type">
                  {type}
                </span>

                <h3>{title}</h3>

                <p>{word}</p>

                {/* TECH STACK */}
                <div className="tech-stack">
                  {tech?.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="project-links">

                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="live"
                  >
                    Live Demo
                  </a>

                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="code"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>
          )
        )}

      </motion.div>

    </section>
  );
}