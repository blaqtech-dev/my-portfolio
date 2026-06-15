import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/homepage/homepage.jsx";
import { Project } from "./pages/work/project.jsx";
import { About } from "./pages/about/about.jsx";

import { NavBar } from "./component/navbar/navbar.jsx";
import { BottomBar } from "./component/bottombar/bottombar.jsx";
import {ResumePage} from "./pages/resume/resume.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : "light"
    );
  };

  return (
    <div className="app-container">
      <NavBar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/project"
            element={<Project />}
          />

  <Route
            path="/resume"
            element={<ResumePage/>}
          />

          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </main>

      <BottomBar />
    </div>
  );
}

export default App;