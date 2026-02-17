import "./techstack.css";

import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";

const techs = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: FaReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "Express.js", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "Git", Icon: FaGitAlt },
  { name: "GitHub", Icon: FaGithub },
];

function TechStack() {
  return (
    <section className="tech" id="tech">
      <div className="container">
        <h2 className="tech-title">Tech Stack</h2>
        <div className="tech-underline"></div>
        <p className="tech-subtitle">
          Tools & technologies I use to build full-stack applications
        </p>

        <div className="tech-grid">
          {techs.map(({ name, Icon }) => (
            <div className="tech-card" key={name}>
              <Icon className="tech-icon" />
              <span className="tech-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
