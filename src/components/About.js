import "../styles/About.css";
import profileImage from "../images/profileImage.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <img alt="ponmile" src={profileImage} className="my-image" />

      <div className="about-header">
        <h1 className="top-text">About Me</h1>
        <p className="about-bio">
          I am an ex-sales executive who loves building things with code. After,
          few months of self-teaching I got an internship with Robots Limited as
          a Software Engineer where I gained industry experience working with
          teams and senior Software Engineers on different projects. I am
          currently seeking a full-time role where I can contribute my skills
          both in coding and business to help a company achieve their goals.
        </p>
      </div>
    </section>
  );
};

export default About;
