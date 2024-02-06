import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiPython,
  SiMysql,
} from "react-icons/si";

const icons = [
  {
    id: 1,
    icon: <FaHtml5 />,
    text: "HTML5",
  },
  {
    id: 2,
    icon: <FaCss3 />,
    text: "CSS3",
  },
  {
    id: 3,
    icon: <FaBootstrap />,
    text: "Bootstrap",
  },
  {
    id: 4,
    icon: <DiJavascript1 />,
    text: "JavaScript",
  },
  {
    id: 5,
    icon: <FaReact />,
    text: "React",
  },
  {
    id: 6,
    icon: <FaNodeJs />,
    text: "NodeJS",
  },
  {
    id: 7,
    icon: <SiExpress />,
    text: "Express",
  },
  {
    id: 8,
    icon: <SiPostgresql />,
    text: "PostgreSQL",
  },
  {
    id: 9,
    icon: <SiMysql />,
    text: "MySQL",
  },
  {
    id: 10,
    icon: <SiMongodb />,
    text: "MongoDB",
  },
  {
    id: 11,
    icon: <SiPython />,
    text: "Python",
  },
  {
    id: 12,
    icon: <FaGitAlt />,
    text: "Git",
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="skills-heading">My Top Skills</h1>
      <div className="skills-section">
        {icons.map(({ icon, id, text }) => {
          return (
            <div className="skills-set" key={id}>
              <div className="skill-icon">
                {icon}
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
