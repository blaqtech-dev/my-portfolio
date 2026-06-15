import { skillsData } from "../skillsdata";
import "./skills.css";
import { motion } from "framer-motion";
import { fadeIn,fadeUp,staggerContainer } from "../animation/scrollanimation";

export function Skills() {
  return (
    <section className="skills-section margin">

      <h1 className="section-title">
        Skills & Tech Stack
      </h1>

      <p className="skills-subtitle">
        Technologies I use to build scalable full-stack applications
      </p>

      <motion.div 
       className="skills-grid"
  initial="hidden"
  whileInView="show"
  variants={staggerContainer}
  viewport={{ once: true }}
     >

        {skillsData.map((skill) => {
          const { name, Icons, id, color } = skill;

          return (
            <div className="skill-card" key={id}>

              <div
                className="icon-wrapper"
                style={{
                  color: color || "#2563eb"
                }}
              >
                <Icons />
              </div>

              <p>{name}</p>

            </div>
          );
        })}

      </motion.div>

    </section>
  );
}