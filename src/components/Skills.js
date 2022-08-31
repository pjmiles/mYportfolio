import { SkillSectionStyle } from "./SkillsStyle";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiPostgresql, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <SkillSectionStyle>
      <FaHtml5 className="skill-icon" />
      <FaCss3 className="skill-icon" />
      <FaBootstrap className="skill-icon" />
      <DiJavascript1 className="skill-icon" />
      <FaReact className="skill-icon" />
      <FaNodeJs className="skill-icon" />
      <SiPostgresql className="skill-icon" />
      <SiMongodb className="skill-icon" />
    </SkillSectionStyle>
  );
};

export default Skills;
