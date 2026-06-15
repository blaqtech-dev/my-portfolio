import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import "./bottombar.css";
import { Link } from "react-router-dom";

export function BottomBar() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="coverall-bottombar">

      <div className="main-bottombar">

        {/* LEFT ICONS */}
        <div className="iconleft-bottombar">

          <a href="tel:+2347063367214" className="icon-btn">
            <FaPhone />
          </a>

          <a
            href="mailto:abiolaboluwatife28@gmail.com"
            className="icon-btn"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* RIGHT ACTIONS */}
        <div className="iconright-bottombar">

 
         <button>
             <a href="/cv.pdf" download
                   className="cv-download-btn cv-btn">
            Download CV
          </a>
          </button>
            
         
     

          <button
            className="up-btn"
            onClick={scrollTop}
          >
            <FaChevronUp />
          </button>

        </div>

      </div>

    </footer>
  );
}