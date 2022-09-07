// import { section } from "./SkillsStyle";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiPostgresql, SiMongodb } from "react-icons/si";

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
    icon: <SiPostgresql />,
  },
  {
    icon: <SiMongodb />,
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      {data.map(({ icon }) => {
        return <div className="skill-icon">{icon}</div>;
      })}
    </section>
  );
};

export default Skills;
