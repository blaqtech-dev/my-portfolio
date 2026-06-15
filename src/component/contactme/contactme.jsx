import "./contact.css";
import { motion } from "framer-motion";
import { fadeIn,fadeUp,staggerContainer } from "../animation/scrollanimation";


export function ContactMe() {
  return (
    <section className="contact-section margin">

      <h1 className="section-title">
        Contact Me
      </h1>

      <p className="contact-subtitle">
        Have a project, job opportunity, or idea?
        Let’s build something amazing together.
      </p>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
      className="contact-container">

        {/* FORM CARD */}
        <form
          className="contact-form"
          action="https://formspree.io/f/mzdoypdy"
          method="POST"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </motion.div>

    </section>
  );
}