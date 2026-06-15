import { useEffect } from "react";
import "./resume.css";

export function ResumePage() {





  return (
    <div className="resume-page">

      {/* HERO */}

      <section className="resume-hero">

        <div className="resume-image">

          <img
            src="/images/Boluwatife.png"
            alt="Abiola Boluwatife"
          />

        </div>

        <div className="resume-intro">

          <span className="resume-badge">
            FULL STACK DEVELOPER
          </span>

          <h1>
            Abiola Boluwatife
            Oluwaseyi
          </h1>

          <h2>
            Building Modern Web &
            AI-Powered Applications
          </h2>

          <p>

            Passionate Full Stack Developer
            specializing in React.js,
            Node.js, Supabase and AI
            integrations. Experienced in
            building scalable educational
            platforms, real-time systems,
            SaaS products and intelligent
            web applications.

          </p>

          <div className="resume-buttons">

        <a href="/cv.pdf" download
         className="cv-download-btn">
  Download CV
</a>

            <a
              href="#contact"
            >
              Contact Me
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}

    <section className="resume-section about-section">
  <h2>About Me</h2>

  <div className="about-card">
    <p>
      I am a Full Stack Developer with a passion for creating impactful
      digital solutions. My expertise spans frontend development,
      backend architecture, cloud databases, AI integrations,
      payment systems and Progressive Web Applications.
    </p>

    <p>
      I enjoy transforming ideas into production-ready products that
      solve real-world problems while delivering exceptional user
      experiences.
    </p>
  </div>
</section>

      {/* SKILLS */}

      <section className="resume-section">

        <h2>
          Technical Skills
        </h2>

        <div className="skills-grid">

          <div className="skill-card">

            <h3>
              Frontend
            </h3>

            <ul>

              <li>React.js</li>

              <li>JavaScript</li>

              <li>HTML5</li>

              <li>CSS3</li>

              <li>Tailwind CSS</li>

              <li>PWA</li>

            </ul>

          </div>

          <div className="skill-card">

            <h3>
              Backend
            </h3>

            <ul>

              <li>Node.js</li>

              <li>Express.js</li>

              <li>REST APIs</li>

              <li>Authentication</li>

              <li>Payment Integration</li>

            </ul>

          </div>

          <div className="skill-card">

            <h3>
              Database
            </h3>

            <ul>

              <li>Supabase</li>

              <li>PostgreSQL</li>

              <li>Firebase</li>

              <li>Cloud Storage</li>

            </ul>

          </div>

          <div className="skill-card">

            <h3>
              AI & Tools
            </h3>

            <ul>

              <li>Groq AI</li>

              <li>Git</li>

              <li>GitHub</li>

              <li>Paystack</li>

              <li>OneSignal</li>

              <li>Render</li>

            </ul>

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="resume-section">

        <h2>
          Professional Experience
        </h2>

        <div className="experience-card">

          <h3>
            Full Stack Developer
          </h3>

          <span>
            Self-Employed | 2023 - Present
          </span>

          <ul>

            <li>
              Built and deployed
              production-ready web
              applications using modern
              technologies.
            </li>

            <li>
              Developed AI-powered
              educational systems and
              intelligent web tools.
            </li>

            <li>
              Integrated payment systems,
              authentication and cloud
              storage services.
            </li>

            <li>
              Designed responsive and
              user-focused interfaces.
            </li>

            <li>
              Managed complete software
              development lifecycle from
              idea to deployment.
            </li>

          </ul>

        </div>

      </section>

      {/* PROJECTS */}

      <section className="resume-section">

        <h2>
          Featured Projects
        </h2>

        <div className="projects-grid">

          <div className="project-card">

            <h3>
              AIQuizMaster
            </h3>

            <p>

              AI-powered learning platform
              featuring PDF analysis,
              quizzes, flashcards,
              classroom management,
              multiplayer learning,
              assignments, AI tutor and
              advanced analytics.

            </p>

          </div>

          <div className="project-card">

            <h3>
              Real-Time Chat App
            </h3>

            <p>

              Full-stack messaging
              platform supporting live
              communication, image sharing
              and authentication.

            </p>

          </div>

          <div className="project-card">

            <h3>
              AskBolu AI
            </h3>

            <p>

              AI chatbot capable of
              answering questions and
              generating intelligent
              responses using modern AI.

            </p>

          </div>

          <div className="project-card">

            <h3>
              VidTube
            </h3>

            <p>

              YouTube-inspired video
              platform with search,
              discovery and responsive
              viewing experience.

            </p>

          </div>

        </div>

      </section>

      {/* EDUCATION */}

      <section className="resume-section">

        <h2>
          Education
        </h2>

        <div className="education-card">

          <h3>
            Adekunle Ajasin University
          </h3>

          <p>

            Bachelor of Science (B.Sc.)
            Accounting

          </p>

          <span>
            2020 - 2026
          </span>

        </div>

      </section>

      {/* CERTIFICATION */}

      <section className="resume-section">

        <h2>
          Certifications
        </h2>

        <div className="education-card">

          <h3>
            freeCodeCamp
          </h3>

          <p>
            Web Development Certification
          </p>

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="resume-section">

        <h2>
          Achievements
        </h2>

        <div className="stats-grid">

          <div>

            <h3>
              4+
            </h3>

            <p>
              Major Projects
            </p>

          </div>

          <div>

            <h3>
              25+
            </h3>

            <p>
              Features Built
            </p>

          </div>

          <div>

            <h3>
              100%
            </h3>

            <p>
              Self-Taught Journey
            </p>

          </div>

          <div>

            <h3>
              Full Stack
            </h3>

            <p>
              Production Experience
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="resume-section"
      >

        <h2>
          Contact
        </h2>

        <div className="contact-grid">

          <div>

            <h3>Email</h3>

            <p>
              abiolaboluwatife28@gmail.com
            </p>

          </div>

          <div>

            <h3>Phone</h3>

            <p>
              07063367214
            </p>

          </div>

          <div>

            <h3>Location</h3>

            <p>
              Ondo State, Nigeria
            </p>

          </div>

          <div>

            <h3>Role</h3>

            <p>
              Full Stack Developer
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}