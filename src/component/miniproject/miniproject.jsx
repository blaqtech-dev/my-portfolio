import { miniProjectData } from "../miniprojectdata";
import "./miniproject.css";
import { fadeIn,fadeUp,staggerContainer } from "../animation/scrollanimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function MiniProject() {
  return (
    <section className="project-section margin">

      <h1 className="section-title">
        Featured Projects
      </h1>

      <motion.div 
      className="project-grid"
        initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
      >

        {miniProjectData.map(
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

                 
                </div>

              </div>

            </div>
          )
        )}

      </motion.div>
<button className='project-btn'>
  <Link to='project'>
    see more
  </Link>

  </button>
    </section>
  );
}