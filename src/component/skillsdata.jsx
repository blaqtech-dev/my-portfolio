import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs
} from "react-icons/fa";

import {
  IoLogoJavascript,
  IoLogoFirebase
} from "react-icons/io5";

import { RiTailwindCssFill } from "react-icons/ri";

import { SiExpress, SiMongodb, SiPostman,SiNextdotjs,SiTypescript } from "react-icons/si";

export const skillsData = [

  /* ================= FRONTEND ================= */
  {
    id: 1,
    Icons: FaHtml5,
    name: "HTML",
    color: "#E34F26",
    category: "frontend"
  },
  {
    id: 2,
    Icons: FaCss3Alt,
    name: "CSS",
    color: "#1572B6",
    category: "frontend"
  },
  {
    id: 3,
    Icons: IoLogoJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
    category: "frontend"
  },
  {
    id: 4,
    Icons: FaReact,
    name: "React",
    color: "#61DAFB",
    category: "frontend"
  },
  {
  id: 5,
  Icons: SiNextdotjs,
  name: "Next.js",
  color: "#000000",
  category: "frontend"
},
{
  id: 6,
  Icons: SiTypescript,
  name: "TypeScript",
  color: "#3178C6",
  category: "frontend"
},
  {
    id: 7,
    Icons: RiTailwindCssFill,
    name: "Tailwind",
    color: "#38BDF8",
    category: "frontend"
  },

  /* ================= BACKEND ================= */
  {
    id: 8,
    Icons: FaNodeJs,
    name: "Node.js",
    color: "#3C873A",
    category: "backend"
  },
  {
    id: 9,
    Icons: SiExpress,
    name: "Express",
    color: "#ffffff",
    category: "backend"
  },
  {
    id: 10,
    Icons: IoLogoFirebase,
    name: "Firebase",
    color: "#FFCA28",
    category: "backend"
  },

  /* ================= DATABASE ================= */
  {
    id: 11,
    Icons: SiMongodb,
    name: "MongoDB",
    color: "#4DB33D",
    category: "database"
  },

  /* ================= TOOLS ================= */
  {
    id: 12,
    Icons: FaGitAlt,
    name: "Git",
    color: "#F05032",
    category: "tools"
  },
  {
    id: 13,
    Icons: FaGithub,
    name: "GitHub",
    color: "#ffffff",
    category: "tools"
  },
  {
    id: 14,
    Icons: SiPostman,
    name: "Postman",
    color: "#FF6C37",
    category: "tools"
  }
];