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
  },
  {
    id: 2,
    icon: <FaCss3 />,
  },
  {
    id: 3,
    icon: <FaBootstrap />,
  },
  {
    id: 4,
    icon: <DiJavascript1 />,
  },
  {
    id: 5,
    icon: <FaReact />,
  },
  {
    id: 6,
    icon: <FaNodeJs />,
  },
  {
    id: 7,
    icon: <SiExpress />,
  },
  {
    id: 8,
    icon: <SiPostgresql />,
  },
  {
    id: 9,
    icon: <SiMysql />,
  },
  {
    id: 10,
    icon: <SiMongodb />,
  },
  {
    id: 11,
    icon: <SiPython />,
  },
  {
    id: 12,
    icon: <FaGitAlt />,
  },
];

const Skills = () => {
  return (
    <>
      <h1 className="skills-heading">My Top Skills</h1>
      <section className="skills-section" id="skills" smooth>
        {icons.map(({ icon, id }) => {
          return (
            <div className="skills-set" key={id} >
              <div className="skill-icon">{icon}</div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Skills;
