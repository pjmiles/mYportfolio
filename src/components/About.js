import "../styles/About.css";
import profileImage from "../assets/ponmile_james_adebisi.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <img alt="ponmile" src={profileImage} className="my-image" />

      <div className="about-header">
        <h1 className="top-text">About Me</h1>
        <p className="about-bio">
          I'm <span>Ponmile Adebisi</span>, a Software Engineer who is creative
          and innovative. I have fundamental knowledge of Software Design and
          development, system architecture and infrastucture, API Design,
          Databases including frontend and backend technologies. I am currently
          keeping upto date with JavaScript, React, Typescript, Vue, NextJS,
          Express and Python alongside other frontend and backend technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
