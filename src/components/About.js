import "../styles/About.css";
import profileImage from "../assets/profileImage.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <img alt="ponmile" src={profileImage} className="my-image" />

      <div className="about-header">
        <h1 className="top-text">About Me</h1>
        <p className="about-bio">
          My name is Ponmile Adebisi, a Software Engineer who is creative and
          innovative. I love solving problems analytically, implementing the
          right strategies and technics. I have fundamental knowledge of
          software design and development, API, Databases including frontend and
          backend technologies. I am currently learning JavaScript, React,
          Typescript, Vue, NextJS, Express and Python alongside other frontend
          and backend technologies. My goal is to gain a good understanding of
          current systems, and to be able to build on that as things inevitably
          change.
        </p>
      </div>
    </section>
  );
};

export default About;
