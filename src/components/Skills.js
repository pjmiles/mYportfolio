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

const data = [
  {
    icon: <FaHtml5 />,
  },
  {
    icon: <FaCss3 />,
  },
  {
    icon: <FaBootstrap />,
  },
  {
    icon: <DiJavascript1 />,
  },
  {
    icon: <FaReact />,
  },
  {
    icon: <FaNodeJs />,
  },
  {
    icon: <SiExpress />,
  },
  {
    icon: <SiPostgresql />,
  },
  {
    icon: <SiMysql />,
  },
  {
    icon: <SiMongodb />,
  },
  {
    icon: <SiPython />,
  },
  {
    icon: <FaGitAlt />,
  },
];

const Skills = () => {
  return (
    <>
      <h1 className="skills-heading">Top Skills</h1>
      <section className="skills-section" id="skills">
        {/* <h1 className="skills-header-text">Skiils</h1> */}
        {data.map(({ icon }) => {
          return (
            <div className="skills-set">
              <div className="skill-icon">{icon}</div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Skills;
